import type { ImgHTMLAttributes } from "react";
import bilder from "@/content/bilder.json";

export default function Prosjektbilde(props: ImgHTMLAttributes<HTMLImageElement>) {
  const size = props.src ? bilder[props.src as keyof typeof bilder] : undefined;
  return <img {...props} width={props.width ?? size?.width} height={props.height ?? size?.height}
    loading={props.loading ?? (props.fetchPriority === "high" ? "eager" : "lazy")}
    decoding={props.decoding ?? "async"} />;
}
