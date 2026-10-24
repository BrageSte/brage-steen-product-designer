const steps = [
  { title: "Fire lastceller", detail: "Last på kontaktflatene blir til små elektriske signaler.", connection: "J3–J6 → AIN2–AIN5" },
  { title: "ADS131M08", detail: "ADC-en leser de differensielle signalene fra kanalene.", connection: "Digitale data over SPI" },
  { title: "XIAO nRF52840", detail: "Firmware håndterer datarammer og forbindelsen videre.", connection: "USB Serial / BLE" },
  { title: "GripSense-appen", detail: "Visning, forsøk og lagring med kontekst.", connection: "Webgrensesnitt" },
];

export default function Signalvei() {
  return <figure className="mt-10">
    <figcaption className="text-lg font-medium">Oppkoblingsoversikt: fra kontaktflate til app</figcaption>
    <ol aria-label="Signalveien i GripSense Rev E" className="mt-6 grid gap-6 lg:grid-cols-4 lg:gap-8">
      {steps.map((step, index) => <li key={step.title} className="relative border-t-2 border-[#1267ae] pt-4 lg:pr-5">
        <p className="text-xs tracking-widest text-[#1267ae]">0{index + 1}</p>
        <h3 className="mt-2 text-xl">{step.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
        <p className="mt-3 text-sm font-medium">{step.connection}</p>
        {index < steps.length - 1 && <span aria-hidden="true" className="mt-4 block text-xl text-[#1267ae] lg:absolute lg:-right-5 lg:top-3 lg:mt-0"><span className="lg:hidden">↓</span><span className="hidden lg:inline">→</span></span>}
      </li>)}
    </ol>
    <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Forenklet signalvei for Rev E. De fire kanalene kobles til J3 (PEKE), J4 (LANG), J5 (RING) og J6 (LILLE). Kanalnavnene beskriver tilordning; kontaktplassering og kalibrering må følge forsøket.</p>
  </figure>;
}
