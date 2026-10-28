import type { Language } from "@/i18n/LanguageContext";

const artworkLabels: Record<string, { code: string; fr: string; en: string; steps: [string, string, string] }> = {
  "super-cerame": { code: "D / V / R", fr: "Maîtriser le procédé", en: "Understand the process", steps: ["D", "V", "R"] },
  "ligne-devidoir": { code: "LEAN / ARENA", fr: "Équilibrer les flux", en: "Balance the flow", steps: ["01", "02", "03"] },
  tricycle: { code: "CAD / CAM", fr: "Concevoir puis fabriquer", en: "Design then manufacture", steps: ["CAD", "CAM", "TEST"] },
  kanban: { code: "PULL / FLOW", fr: "Produire au bon moment", en: "Produce when needed", steps: ["01", "02", "03"] },
  msp: { code: "X̄ / R / Cp", fr: "Comprendre les variations", en: "Understand variation", steps: ["X̄", "R", "Cp"] },
  batteries: { code: "EIS / DRT", fr: "Lire les données", en: "Make sense of data", steps: ["EIS", "DRT", "DATA"] },
  expediente: { code: "API / PDF", fr: "Structurer l’information", en: "Structure information", steps: ["API", "PDF", "DOC"] },
  driftshare: { code: "SOCKET / IO", fr: "Connecter en temps réel", en: "Connect in real time", steps: ["A", "IO", "B"] },
};

/** Decorative, schematic artwork: no measured results or product screenshots. */
export default function ProjectArtwork({ projectId, language }: { projectId: string; language: Language }) {
  const art = artworkLabels[projectId] ?? artworkLabels.expediente;
  return (
    <div aria-hidden="true" className="relative aspect-[16/9] w-full overflow-hidden bg-[#123c33] text-[#f3f0df]">
      <svg viewBox="0 0 640 360" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M0 72H640M0 144H640M0 216H640M0 288H640M80 0V360M160 0V360M240 0V360M320 0V360M400 0V360M480 0V360M560 0V360" stroke="currentColor" strokeOpacity=".05" />
        <circle cx="555" cy="18" r="165" stroke="currentColor" strokeOpacity=".09" />
        <circle cx="555" cy="18" r="118" stroke="currentColor" strokeOpacity=".07" />
        {projectId === "super-cerame" ? (
          <g stroke="currentColor" strokeWidth="2">
            {[168, 320, 472].map((x, i) => <g key={x}>
              <path d={`M${x - 46} 115H${x + 46}V195L${x + 14} 224V242H${x - 14}V224L${x - 46} 195Z`} fill="currentColor" fillOpacity=".045" />
              <path d={`M${x - 46} 151H${x + 46}`} stroke="#c7d888" />
              <text x={x} y="185" textAnchor="middle" fill="#c7d888" stroke="none" fontFamily="monospace" fontSize="24">{art.steps[i]}</text>
            </g>)}
            <path d="M214 176H274M366 176H426M230 171L237 176L230 181M382 171L389 176L382 181" strokeOpacity=".55" />
          </g>
        ) : projectId === "ligne-devidoir" ? (
          <g stroke="currentColor" strokeWidth="2">
            <rect x="91" y="208" width="458" height="34" rx="17" fill="currentColor" fillOpacity=".04" />
            {[115, 149, 183, 217, 251, 285, 319, 353, 387, 421, 455, 489, 523].map(x => <circle key={x} cx={x} cy="225" r="7" strokeOpacity=".3" />)}
            {[172, 320, 468].map((x, i) => <g key={x}>
              <rect x={x - 33} y="140" width="66" height="68" rx="5" stroke={i === 1 ? "#c7d888" : "currentColor"} fill="currentColor" fillOpacity=".04" />
              <text x={x} y="183" textAnchor="middle" fill={i === 1 ? "#c7d888" : "currentColor"} stroke="none" fontFamily="monospace" fontSize="23">{art.steps[i]}</text>
            </g>)}
            <path d="M211 173H277M360 173H427M262 168L269 173L262 178M412 168L419 173L412 178" strokeOpacity=".5" />
          </g>
        ) : projectId === "tricycle" ? (
          <g stroke="currentColor" strokeWidth="2">
            <circle cx="188" cy="236" r="48" fill="currentColor" fillOpacity=".035" />
            <circle cx="467" cy="236" r="48" fill="currentColor" fillOpacity=".035" />
            <circle cx="188" cy="236" r="11" stroke="#c7d888" />
            <circle cx="467" cy="236" r="11" stroke="#c7d888" />
            <path d="M188 236L284 127L396 236H188L307 236L467 236" stroke="#c7d888" strokeWidth="3" />
            <path d="M284 127L324 93M310 93H344M284 127L307 236M307 236L396 236" />
            <path d="M284 127L254 157M254 157L188 236M254 157L396 236" strokeOpacity=".55" />
            <path d="M396 236L429 188L467 236M429 188L444 151" strokeOpacity=".7" />
            <rect x="371" y="218" width="50" height="15" rx="4" fill="currentColor" fillOpacity=".08" />
            <text x="320" y="283" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="monospace" fontSize="13">TOPSOLID / CNC / ASSEMBLY</text>
          </g>
        ) : projectId === "kanban" ? (
          <g stroke="currentColor" strokeWidth="2">
            {[145, 281, 417].map((x, i) => <g key={x}>
              <rect x={x} y="120" width="82" height="109" rx="8" fill="currentColor" fillOpacity=".05" />
              <path d={`M${x + 17} 166H${x + 64}M${x + 17} 181H${x + 50}M${x + 17} 196H${x + 59}`} strokeOpacity=".4" />
              <circle cx={x + 19} cy="141" r="4" fill="#c7d888" stroke="none" />
              <text x={x + 60} y="146" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="monospace" fontSize="13">{art.steps[i]}</text>
            </g>)}
            <path d="M231 174H275M367 174H411M458 240V260H186V240M179 247L186 240L193 247" stroke="#c7d888" />
          </g>
        ) : projectId === "msp" ? (
          <g stroke="currentColor" strokeWidth="2">
            <rect x="121" y="113" width="398" height="131" rx="9" fill="currentColor" fillOpacity=".03" />
            <path d="M143 139H497M143 220H497" strokeOpacity=".4" strokeDasharray="6 7" />
            <path d="M143 180H497" strokeOpacity=".25" />
            <path d="M149 185L179 169L209 179L239 163L269 190L299 177L329 188L359 173L389 182L419 162L449 170L491 157" stroke="#c7d888" strokeWidth="3" />
            {[149, 239, 329, 419, 491].map((x, i) => <circle key={x} cx={x} cy={[185, 163, 188, 162, 157][i]} r="4" fill="#c7d888" stroke="none" />)}
          </g>
        ) : projectId === "batteries" ? (
          <g stroke="currentColor" strokeWidth="2">
            <rect x="135" y="130" width="88" height="113" rx="10" fill="currentColor" fillOpacity=".05" />
            <path d="M160 130V117H198V130M173 154V177H192L177 216V188H159L173 154Z" stroke="#c7d888" />
            <path d="M253 187H308M296 180L303 187L296 194" strokeOpacity=".6" />
            <rect x="329" y="124" width="170" height="123" rx="8" fill="currentColor" fillOpacity=".04" />
            <path d="M349 150H391M349 169H470M349 188H456M349 207H479M349 226H425" strokeOpacity=".35" />
            <circle cx="473" cy="148" r="5" fill="#c7d888" stroke="none" />
          </g>
        ) : projectId === "driftshare" ? (
          <g stroke="currentColor" strokeWidth="2">
            <rect x="110" y="137" width="106" height="87" rx="9" fill="currentColor" fillOpacity=".045" />
            <rect x="424" y="137" width="106" height="87" rx="9" fill="currentColor" fillOpacity=".045" />
            <path d="M141 242H185M163 224V242M455 242H499M477 224V242M217 181H277M363 181H424" strokeOpacity=".7" />
            <circle cx="320" cy="181" r="40" stroke="#c7d888" fill="#c7d888" fillOpacity=".06" />
            <text x="320" y="189" textAnchor="middle" fill="#c7d888" stroke="none" fontFamily="monospace" fontSize="23">IO</text>
            <path d="M309 125C325 105 352 105 369 125M331 237C314 257 287 257 270 237" strokeOpacity=".4" />
          </g>
        ) : (
          <g stroke="currentColor" strokeWidth="2">
            <rect x="182" y="116" width="168" height="139" rx="8" strokeOpacity=".3" />
            <rect x="201" y="101" width="168" height="139" rx="8" strokeOpacity=".5" fill="#123c33" />
            <rect x="220" y="86" width="168" height="139" rx="8" fill="#123c33" />
            <path d="M242 116H309M242 139H366M242 157H350M242 175H358M242 196H309" strokeOpacity=".5" />
            <rect x="344" y="170" width="100" height="66" rx="8" fill="#c7d888" stroke="none" />
            <text x="394" y="212" textAnchor="middle" fill="#123c33" stroke="none" fontFamily="monospace" fontSize="24">PDF</text>
          </g>
        )}
      </svg>
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 pt-5 text-[10px] font-mono tracking-[0.15em] uppercase text-[#dce4c6]">
        <span>{art.code}</span><span>EA / {String(Object.keys(artworkLabels).indexOf(projectId) + 1).padStart(2, "0")}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-6 pb-5">
        <span className="font-heading text-sm font-medium tracking-wide">{art[language]}</span>
        <span className="text-[9px] text-[#c4d2c8]">{language === "fr" ? "Illustration" : "Illustration"}</span>
      </div>
    </div>
  );
}
