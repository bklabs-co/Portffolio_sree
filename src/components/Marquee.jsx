import { services } from '../data/site'

const words = services.map((s) => s.title)

export default function Marquee() {
  return (
    <div aria-hidden className="border-y border-line overflow-hidden py-6">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] motion-reduce:animate-none">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0">
            {words.map((w) => (
              <span key={w} className="flex items-center gap-8 whitespace-nowrap px-8 font-display text-[clamp(1.2rem,2.8vw,2rem)] font-medium text-slate-dim">
                {w}
                <span className="text-[10px] text-violet-accent">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
