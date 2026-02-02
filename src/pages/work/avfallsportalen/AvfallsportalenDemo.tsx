import { useState } from "react";
import { cn } from "@/lib/utils";

// Timeline data
const timelineSteps = [
  { icon: "🌍", label: "Verden", color: "#5C6BC0" },
  { icon: "🇪🇺", label: "Europa", color: "#42A5F5" },
  { icon: "🇳🇴", label: "Norge", color: "#26A69A" },
  { icon: "🏠", label: "Hjemme", color: "#66BB6A" },
  { icon: "🚛", label: "Innsamling", color: "#FFA726" },
  { icon: "🏭", label: "Sortering", color: "#AB47BC" },
  { icon: "🔥", label: "Behandling", color: "#EF5350" },
  { icon: "🌱", label: "Fremtiden", color: "#4CAF50" },
];

const stepContent = [
  {
    title: "Verden",
    subtitle: "Vi lever over evne. Jorden klarer ikke å fornye ressursene våre i samme tempo som vi bruker dem.",
    stats: [
      { number: "29. juli", label: "Earth Overshoot Day 2019", desc: "Dagen verden brukte opp årets ressurser", info: "Dette er dagen i kalenderåret da verden har brukt opp alle de fornybare ressursene som jorden kan regenerere på ett år. I 2019 var denne dagen 29. juli." },
      { number: "1.75", label: "Jordkloder", desc: "Vi lever som om vi har nesten 2 jordkloder", info: "Menneskheten bruker naturens ressurser 1.75 ganger raskere enn planetens økosystemer kan regenerere dem." },
      { number: "186", label: "Land i Paris-avtalen", desc: "Mål: Holde temperaturøkningen under 2°C", info: "En internasjonal avtale som forplikter landene til å redusere klimagassutslipp og holde global oppvarming under 2°C." },
    ],
    info: [],
    quote: null,
  },
  {
    title: "Europa",
    subtitle: "EU setter ambisiøse mål for gjenvinning og sirkulær økonomi. Men veien dit er lang.",
    stats: [
      { number: "30%", label: "Plast resirkulert", desc: "Kun 30% av plastavfall i EU resirkuleres", info: "Mesteparten av plasten ender opp på deponi eller forbrenning." },
      { number: "50%", label: "Mål 2025", desc: "EUs mål for emballasjegjenvinning", info: "EU har satt ambisiøse mål for å øke gjenvinningen betydelig." },
      { number: "65%", label: "Mål 2035", desc: "Langsiktig mål for materialgjenvinning", info: "Innen 2035 skal 65% av alt kommunalt avfall materialgjenvinnes." },
    ],
    info: [],
    quote: { text: "Avfall er ikke avfall, men en brukt ressurs med kapasitet for gjenbruk og fornyelse.", author: "EU Circular Economy Action Plan" },
  },
  {
    title: "Norge",
    subtitle: "Vi er nest høyest i Europa på avfall per innbygger – men ligger langt bak på gjenvinning.",
    stats: [
      { number: "739 kg", label: "Avfall per person/år", desc: "Nest høyest i Europa", info: "Kun Luxembourg produserer mer avfall per innbygger enn Norge." },
      { number: "39%", label: "Materialgjenvinning", desc: "Under EU-snittet", info: "Norge gjenvinner mindre enn mange EU-land vi liker å sammenligne oss med." },
      { number: "21%", label: "Fra husholdninger", desc: "Av totalt avfall", info: "Husholdningsavfall utgjør 21% av alt avfall i Norge, totalt 2,4 millioner tonn." },
    ],
    info: [
      { title: "🇳🇴 Norske mål", content: "Norges miljømål 4.3 sier at avfallsveksten skal være lavere enn økonomisk vekst. Status: IKKE NÅDD – BNP økte 2%, avfall økte 3%." },
      { title: "📊 Avfall i Norge", content: "2,4 millioner tonn husholdningsavfall årlig. Det tilsvarer vekten av 373 000 elefanter!" },
    ],
    quote: null,
  },
  {
    title: "Hjemme",
    subtitle: "Sortering starter hos deg. Men systemene varierer mye fra kommune til kommune.",
    stats: [
      { number: "37%", label: "Googler", desc: "Når usikre på sortering", info: "37% googler når de er usikre, mens bare 18% bruker info på emballasjen." },
      { number: "52%", label: "Synes det er lett", desc: "Å sortere riktig", info: "Halvparten synes sortering er enkelt – men mange gjør likevel feil." },
      { number: "4-10", label: "Fraksjoner", desc: "Avhengig av kommune", info: "Antall avfallstyper du må sortere varierer fra kommune til kommune." },
    ],
    info: [],
    quote: { text: "Folk sorterer i den grad det er praktisk, og i den grad de har kunnskap.", author: "Forbrukerrådet" },
  },
  {
    title: "Innsamling",
    subtitle: "Ulike systemer gir vidt forskjellig resultat. Sentralisert sortering viser veien.",
    stats: [
      { number: "86%", label: "Sentralisert", desc: "Høyest effektivitet", info: "Sentralisert sortering med optisk skanning oppnår 86% sorteringseffektivitet." },
      { number: "34%", label: "Hentesystem", desc: "Middels effektivitet", info: "Tradisjonelt hentesystem med flere dunker hjemme." },
      { number: "19%", label: "Optibag", desc: "Lavest effektivitet", info: "Oslos Optibag-system med fargede poser har kun 19% effektivitet for plast." },
    ],
    info: [
      { title: "🔵 Optibag Oslo", content: "Blå pose = Plast, Grønn pose = Matavfall, Vanlig pose = Restavfall. Alt i samme dunk! Men hvis blå pose veier over 600g, sorteres den som restavfall." },
    ],
    quote: { text: "Forurensningsloven slår fast at alle kommuner i Norge har ansvar for å samle inn avfall fra husholdninger.", author: "" },
  },
  {
    title: "Sortering",
    subtitle: "På sorteringsanlegget skilles avfallet – men mye verdifullt havner likevel i restavfallet.",
    stats: [
      { number: "65,7%", label: "Feilsortert Oslo", desc: "I restavfallet", info: "Nesten 2/3 av restavfallet i Oslo kunne vært gjenvunnet!" },
      { number: "36,3%", label: "Matavfall", desc: "I restavfallet", info: "Over en tredjedel av restavfallet er matavfall som skulle vært i grønn pose." },
      { number: "9%", label: "Papir", desc: "Feilsortert", info: "Papir og kartong som kunne blitt til nye produkter, brennes istedet." },
    ],
    info: [],
    quote: null,
  },
  {
    title: "Behandling",
    subtitle: "Mesteparten brennes – verdifulle materialer går tapt for alltid.",
    stats: [
      { number: "54,5%", label: "Forbrent", desc: "Over halvparten brennes", info: "Forbrenning gir fjernvarme og elektrisitet, men materialene er tapt for alltid." },
      { number: "~40%", label: "Gjenvunnet", desc: "Blir til nye produkter", info: "Dette er det beste utfallet – materialene får nytt liv." },
      { number: "~3%", label: "Deponi", desc: "Blant lavest i Europa", info: "Norge har svært lite deponi sammenlignet med mange andre land." },
    ],
    info: [
      { title: "🗑️ Restavfall Oslo", content: "54 857 tonn i 2019 – 36,3% matavfall, 26,6% faktisk restavfall, 9% papir, 8,6% plast. Alt dette brennes!" },
    ],
    quote: null,
  },
  {
    title: "Fremtiden",
    subtitle: "Det finnes håp! Nye løsninger og økt bevissthet kan snu trenden.",
    stats: [
      { number: "65%", label: "EU-mål 2035", desc: "Målet for materialgjenvinning", info: "Med riktig teknologi og atferd er dette mulig å nå." },
      { number: "10", label: "LOOP-symboler", desc: "Enklere sortering fra 2020", info: "LOOP har utviklet nye, intuitive symboler som gjør det lettere å vite hvor ting skal." },
      { number: "86%", label: "Mulig effektivitet", desc: "Med riktig teknologi", info: "Sentralisert sortering beviser at høy effektivitet er mulig." },
    ],
    info: [
      { title: "💪 Hva kan DU gjøre?", content: "Lær deg systemet i din kommune. Ha en praktisk løsning hjemme. Bruk de nye symbolene. Ikke gi opp – det NYTTER!" },
    ],
    quote: { text: "Dette kan oppnås gjennom langvarig design, vedlikehold, reparasjon, gjenbruk, re-produksjon, oppussing og resirkulering.", author: "Paris-avtalen om sirkulær økonomi" },
  },
];

interface StatCardProps {
  number: string;
  label: string;
  desc: string;
  info: string;
  color: string;
}

const StatCard = ({ number, label, desc, info, color }: StatCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div 
      onClick={() => setExpanded(!expanded)}
      className="bg-card rounded-xl p-6 border-2 border-border cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
      style={{ borderTopColor: color, borderTopWidth: 4 }}
    >
      <div className="text-4xl font-black mb-2" style={{ color }}>{number}</div>
      <div className="text-sm font-bold uppercase tracking-wide mb-2">{label}</div>
      <div className="text-sm text-muted-foreground">{desc}</div>
      <div className={cn(
        "overflow-hidden transition-all duration-300 text-sm text-muted-foreground mt-3 pt-3 border-t border-border",
        expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0 border-t-0 mt-0 pt-0"
      )}>
        {info}
      </div>
      <div className="text-xs text-muted-foreground mt-2 opacity-60">
        {expanded ? "Klikk for å lukke" : "Klikk for mer info ↓"}
      </div>
    </div>
  );
};

interface TimelineProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const Timeline = ({ currentStep, onStepClick }: TimelineProps) => {
  return (
    <div className="bg-card border-b border-border py-4 px-4 sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-4xl mx-auto relative">
        {/* Progress line */}
        <div className="absolute top-6 left-6 right-6 h-1 bg-border rounded-full" />
        <div 
          className="absolute top-6 left-6 h-1 rounded-full transition-all duration-500"
          style={{ 
            width: `calc(${(currentStep / (timelineSteps.length - 1)) * 100}% - 24px)`,
            background: `linear-gradient(90deg, ${timelineSteps[0].color}, ${timelineSteps[currentStep].color})`
          }}
        />
        
        {timelineSteps.map((step, index) => (
          <div 
            key={index}
            onClick={() => onStepClick(index)}
            className="flex flex-col items-center cursor-pointer z-10 transition-transform hover:scale-110"
          >
            <div 
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center text-xl border-4 transition-all duration-300",
                index === currentStep 
                  ? "scale-110 shadow-lg" 
                  : index < currentStep 
                    ? "" 
                    : "bg-card"
              )}
              style={{ 
                borderColor: index <= currentStep ? step.color : undefined,
                backgroundColor: index <= currentStep ? step.color : undefined,
              }}
            >
              <span className={index <= currentStep ? "brightness-0 invert" : ""}>{step.icon}</span>
            </div>
            <span className={cn(
              "text-[10px] font-bold uppercase mt-2 hidden sm:block transition-colors",
              index === currentStep ? "text-foreground" : "text-muted-foreground"
            )}
            style={{ color: index === currentStep ? step.color : undefined }}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AvfallsportalenDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeTab, setActiveTab] = useState<"journey" | "quiz">("journey");
  
  const content = stepContent[currentStep];
  const stepColor = timelineSteps[currentStep].color;

  const nextStep = () => {
    if (currentStep < timelineSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-background rounded-xl border border-border overflow-hidden">
      {/* Nav tabs */}
      <div className="flex border-b border-border bg-card">
        <button
          onClick={() => setActiveTab("journey")}
          className={cn(
            "flex-1 py-3 px-4 text-sm font-semibold flex items-center justify-center gap-2 transition-colors",
            activeTab === "journey" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
          )}
        >
          🗺️ Avfallsreisen
        </button>
        <button
          onClick={() => setActiveTab("quiz")}
          className={cn(
            "flex-1 py-3 px-4 text-sm font-semibold flex items-center justify-center gap-2 transition-colors",
            activeTab === "quiz" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
          )}
        >
          ❓ Quiz
        </button>
      </div>

      {activeTab === "journey" ? (
        <>
          <Timeline currentStep={currentStep} onStepClick={setCurrentStep} />
          
          <div className="p-6 md:p-8 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">{timelineSteps[currentStep].icon}</span>
              <h2 className="text-3xl font-black mb-3" style={{ color: stepColor }}>{content.title}</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">{content.subtitle}</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {content.stats.map((stat, i) => (
                <StatCard key={i} {...stat} color={stepColor} />
              ))}
            </div>

            {/* Info cards */}
            {content.info.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {content.info.map((info, i) => (
                  <div key={i} className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-bold mb-3">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Quote */}
            {content.quote && (
              <div 
                className="rounded-xl p-6 border-l-4 mb-8"
                style={{ 
                  borderLeftColor: stepColor,
                  background: `linear-gradient(135deg, ${stepColor}10, transparent)`
                }}
              >
                <p className="text-lg italic mb-2">"{content.quote.text}"</p>
                {content.quote.author && (
                  <p className="text-sm text-muted-foreground">— {content.quote.author}</p>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t border-border">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="px-6 py-3 rounded-full border-2 border-border font-semibold disabled:opacity-40 hover:border-primary transition-colors disabled:cursor-not-allowed"
              >
                ← Forrige
              </button>
              <span className="text-sm text-muted-foreground font-semibold">
                Steg {currentStep + 1} av {timelineSteps.length}
              </span>
              <button
                onClick={nextStep}
                disabled={currentStep === timelineSteps.length - 1}
                className="px-6 py-3 rounded-full font-semibold text-white disabled:opacity-40 transition-all hover:brightness-110 disabled:cursor-not-allowed"
                style={{ backgroundColor: stepColor }}
              >
                Neste →
              </button>
            </div>
          </div>
        </>
      ) : (
        <QuizSection />
      )}
    </div>
  );
};

// Quiz component
const quizQuestions = [
  { question: "Når var Earth Overshoot Day i 2019?", options: ["15. juni", "29. juli", "10. august", "1. september"], correct: 1, explanation: "29. juli 2019 var dagen verden hadde brukt opp alle fornybare ressurser for året." },
  { question: "Hvor mye avfall produserer en gjennomsnittlig nordmann per år?", options: ["492 kg", "587 kg", "739 kg", "824 kg"], correct: 2, explanation: "Norge har 739 kg avfall per person per år - nest høyest i Europa!" },
  { question: "Hvor stor andel av plastavfall resirkuleres i Europa?", options: ["18,5%", "30%", "42,3%", "56,8%"], correct: 1, explanation: "Kun 30% av plastavfall blir resirkulert i Europa." },
  { question: "Hva er effektiviteten til sentralisert sortering?", options: ["54%", "68%", "79%", "86%"], correct: 3, explanation: "Sentralisert sortering har 86% effektivitet mot Optibags 19%." },
  { question: "Hvor stor andel av restavfallet i Oslo er feilsortert?", options: ["42,3%", "54,9%", "65,7%", "78,2%"], correct: 2, explanation: "65,7% av restavfallet i Oslo er feilsortert!" },
  { question: "Hva er EUs mål for materialgjenvinning innen 2035?", options: ["50%", "55%", "60%", "65%"], correct: 3, explanation: "EU har satt mål om 65% materialgjenvinning innen 2035." },
  { question: "Hvor stor del av restavfallet i Oslo er matavfall?", options: ["22,8%", "36,3%", "44,7%", "51,2%"], correct: 1, explanation: "Matavfall utgjør 36,3% av det feilsorterte restavfallet." },
  { question: "Hvor mange prosent googler når de er usikre på sortering?", options: ["18%", "29%", "37%", "46%"], correct: 2, explanation: "37% googler, mens bare 18% bruker info på emballasjen." },
  { question: "Hvor stor andel av husholdningsavfall brennes i Norge?", options: ["38,2%", "46,7%", "54,5%", "62,3%"], correct: 2, explanation: "54,5% av husholdningsavfall brennes for energigjenvinning." },
  { question: "Hva er effektiviteten til Optibag-systemet i Oslo?", options: ["12%", "19%", "27%", "34%"], correct: 1, explanation: "Optibag har kun 19% sorteringseffektivitet for plast." },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Array<{selected: number; correct: boolean} | null>>(new Array(quizQuestions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const q = quizQuestions[currentQuestion];
  const answered = answers[currentQuestion] !== null;
  const score = answers.filter(a => a?.correct).length;

  const selectAnswer = (index: number) => {
    if (answered) return;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = { selected: index, correct: index === q.correct };
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setShowResult(false);
  };

  if (showResult) {
    const percent = (score / quizQuestions.length) * 100;
    let message = "";
    if (percent === 100) message = "🏆 Perfekt! Du er en avfallsekspert!";
    else if (percent >= 80) message = "🌟 Veldig bra! Du kan mye om avfall!";
    else if (percent >= 60) message = "👍 Bra jobbet! Du er på god vei!";
    else if (percent >= 40) message = "📚 Ikke verst, men ta reisen en gang til!";
    else message = "🔄 Ta Avfallsreisen på nytt for å lære mer!";

    return (
      <div className="p-8 text-center">
        <div className="text-6xl font-black text-primary mb-4">{score}/{quizQuestions.length}</div>
        <p className="text-xl mb-8">{message}</p>
        <div className="space-y-2 max-w-md mx-auto mb-8">
          {answers.map((a, i) => (
            <div key={i} className={cn(
              "p-3 rounded-lg text-left text-sm flex items-center gap-3",
              a?.correct ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-destructive/10 text-destructive"
            )}>
              <span>{a?.correct ? "✓" : "✗"}</span>
              <span>{quizQuestions[i].question.substring(0, 40)}...</span>
            </div>
          ))}
        </div>
        <button
          onClick={resetQuiz}
          className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
        >
          Prøv igjen ↺
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary mb-2">🎯 Test kunnskapen din!</h2>
        <p className="text-muted-foreground">10 spørsmål basert på Avfallsreisen</p>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {quizQuestions.map((_, i) => (
            <div
              key={i}
              onClick={() => answers[i] !== null && setCurrentQuestion(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                i === currentQuestion && "scale-125 ring-2 ring-primary ring-offset-2",
                answers[i] === null && "bg-border",
                answers[i]?.correct && "bg-emerald-500",
                answers[i] !== null && !answers[i]?.correct && "bg-destructive",
                answers[i] !== null && "cursor-pointer"
              )}
            />
          ))}
        </div>

        {/* Question */}
        <div className="bg-card rounded-xl p-6 border border-border mb-6">
          <p className="text-sm text-muted-foreground mb-2">Spørsmål {currentQuestion + 1} av {quizQuestions.length}</p>
          <p className="text-xl font-semibold mb-6">{q.question}</p>
          
          <div className="space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => selectAnswer(i)}
                disabled={answered}
                className={cn(
                  "w-full p-4 rounded-xl text-left font-medium transition-all border-2",
                  !answered && "hover:border-primary hover:bg-primary/5 border-border",
                  answered && i === q.correct && "bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-400",
                  answered && i === answers[currentQuestion]?.selected && !answers[currentQuestion]?.correct && "bg-destructive/10 border-destructive text-destructive",
                  answered && i !== q.correct && i !== answers[currentQuestion]?.selected && "opacity-50 border-border"
                )}
              >
                {opt}
              </button>
          ))}
        </div>

        {answered && (
          <div className={cn(
            "mt-4 p-4 rounded-xl",
            answers[currentQuestion]?.correct ? "bg-emerald-500/10" : "bg-destructive/10"
          )}>
            <p className="font-semibold mb-1">
              {answers[currentQuestion]?.correct ? "✓ Riktig!" : "✗ Feil."}
            </p>
            <p className="text-sm text-muted-foreground">{q.explanation}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="px-6 py-3 rounded-full border-2 border-border font-semibold disabled:opacity-40"
        >
          ← Forrige
        </button>
        <button
          onClick={nextQuestion}
          disabled={!answered}
          className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold disabled:opacity-40"
        >
          {currentQuestion < quizQuestions.length - 1 ? "Neste →" : "Se resultat"}
        </button>
      </div>
    </div>
  );
};

export default AvfallsportalenDemo;
