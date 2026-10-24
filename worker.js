// Kun prototypevideoen kjøres gjennom denne Worker-en. Resten serveres statisk.
// Assets svarer med hele filen; Cache API gir ekte byteområder slik at videospilleren kan søke.
const videoPath = "/projects/sorting-guide/prototype-gjennomgang.mp4";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== videoPath) return env.ASSETS.fetch(request);
    if (!["GET", "HEAD"].includes(request.method)) {
      return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
    }
    const assetUrl = new URL(videoPath, url.origin);
    const metadata = await env.ASSETS.fetch(new Request(assetUrl, { method: "HEAD" }));
    if (!metadata.ok) return metadata;
    const headers = new Headers(metadata.headers);
    headers.set("Accept-Ranges", "bytes");
    headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    if (request.method === "HEAD") return new Response(null, { status: 200, headers });

    // ETag i nøkkelen hindrer at en ny deploy får forrige videos hurtigbuffer.
    const cacheUrl = new URL(assetUrl);
    cacheUrl.searchParams.set("asset", headers.get("ETag"));
    const cacheKey = new Request(cacheUrl);
    const lookupHeaders = new Headers();
    const range = request.headers.get("Range");
    const ifRange = request.headers.get("If-Range");
    if (range && (!ifRange || ifRange === headers.get("ETag"))) lookupHeaders.set("Range", range);
    const etag = request.headers.get("If-None-Match");
    if (etag) lookupHeaders.set("If-None-Match", etag);
    const lookup = new Request(cacheKey, { headers: lookupHeaders });
    let response = await caches.default.match(lookup);
    if (!response) {
      const asset = await env.ASSETS.fetch(new Request(assetUrl));
      if (!asset.ok) return asset;
      const cached = new Response(asset.body, asset);
      cached.headers.set("Cache-Control", "public, max-age=86400");
      // Kaldt treff må være lagret før Cache API kan svare med 206. Filen strømmes til cache.
      await caches.default.put(cacheKey, cached);
      response = await caches.default.match(lookup);
    }
    if (!response) return new Response("Videoen kunne ikke lastes. Prøv igjen.", { status: 503 });
    const result = new Response(response.body, response);
    result.headers.set("Accept-Ranges", "bytes");
    result.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    return result;
  },
};
