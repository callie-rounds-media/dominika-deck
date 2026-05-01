import coverDiptych from "@/assets/cover-diptych.jpg";
import audienceWalking from "@/assets/audience-walking.jpg";
import promiseDubai from "@/assets/promise-dubai.jpg";

const palettes = [
  {
    n: "01",
    name: "bone & terracotta",
    hexes: ["#F4ECE0", "#EAE0D0", "#D6C3A8", "#B26449", "#7A3A28", "#26211C"],
    lines: [
      "warm, sun-bleached, slightly mediterranean.",
      "feels like linen drying on a balcony in canggu.",
    ],
  },
  {
    n: "02",
    name: "ink & yellow",
    hexes: ["#F4ECE0", "#E5DBC9", "#A89E8C", "#3A3530", "#26211C", "#E8C04A"],
    lines: [
      "quiet base, one disciplined flash of light.",
      "editorial, unsentimental, a little expensive.",
    ],
  },
  {
    n: "03",
    name: "blue hour",
    hexes: ["#F4ECE0", "#D9D2C4", "#8A93A0", "#3E4A5C", "#1E2A38", "#0E1620"],
    lines: [
      "dubai at dusk, the moment before the lights win.",
      "structured, cool, holds ambition without selling it.",
    ],
  },
];

const Index = () => {
  return (
    <main className="bg-background text-ink font-body antialiased overflow-x-hidden">
      {/* 1 — COVER */}
      <section className="relative h-[100svh] w-full overflow-hidden grain">
        <img
          src={coverDiptych}
          alt="Dubai blue hour skyline beside a Bali jungle morning"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-between py-10 md:py-14 px-6 z-10">
          <p
            className="text-[10px] md:text-[11px] tracking-[0.32em] uppercase fade-up"
            style={{ color: "hsl(var(--yellow))", animationDelay: "0.2s" }}
          >
            for Dominika · niche direction
          </p>

          <h1
            className="font-display italic font-light text-balance text-center max-w-4xl text-[clamp(2.25rem,6.5vw,5.5rem)] leading-[1.05] fade-up"
            style={{ color: "hsl(var(--background))", animationDelay: "0.6s" }}
          >
            the woman walking out,
            <br />
            in real time
          </h1>

          <p
            className="text-[10px] tracking-[0.32em] uppercase fade-up"
            style={{ color: "hsl(var(--background) / 0.7)", animationDelay: "1s" }}
          >
            a private read
          </p>
        </div>
      </section>

      {/* 2 — AUDIENCE */}
      <section className="px-6 md:px-12 py-32 md:py-48">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-12 items-center">
          <div className="md:col-span-5 md:col-start-1 relative grain-soft overflow-hidden">
            <img
              src={audienceWalking}
              alt="A woman in linen walking away down a Bali path at golden hour"
              loading="lazy"
              width={1024}
              height={1536}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50">i. the audience</p>
            <p className="font-display italic font-light text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-balance">
              a year ahead of where they are.
            </p>
            <p className="max-w-md text-ink/75 text-[15px] leading-[1.7]">
              she is speaking to women who already built the impressive thing,
              and feel the quiet wrongness of it.
            </p>
          </div>
        </div>
      </section>

      {/* 3 — PROMISE */}
      <section className="px-6 md:px-12 py-32 md:py-48 bg-sand/40">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-12 items-center">
          <div className="md:col-span-6 md:col-start-1 space-y-10 md:order-1 order-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50">ii. the promise</p>
            <p className="font-display italic font-light text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-balance">
              a front-row seat to one woman choosing differently,
              <br className="hidden md:block" />
              while still inside the old life.
            </p>
            <p className="max-w-md text-ink/75 text-[15px] leading-[1.7]">
              not a before-and-after. a during. dubai on monday, bali on friday,
              both true, both held.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8 relative grain-soft overflow-hidden md:order-2 order-1">
            <img
              src={promiseDubai}
              alt="Dubai skyline at blue hour"
              loading="lazy"
              width={1024}
              height={1536}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4 — GALLERY */}
      <section className="px-6 md:px-12 py-32 md:py-44">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[min(38vw,18rem)] gap-3 md:gap-5">
            {gallery.map((g, i) => (
              <figure
                key={i}
                className={`relative overflow-hidden grain-soft group ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />
                <figcaption className="absolute left-3 bottom-3 right-3 font-display italic text-[11px] md:text-[12px] lowercase text-background/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — VOICE */}
      <section className="px-6 md:px-12 py-40 md:py-56 bg-background">
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-24 md:mb-32">
            iii. voice direction
          </p>

          <div className="space-y-28 md:space-y-40">
            {[
              "one thought per line.",
              "first sentence is always a confession.",
              "end on a commitment, never on advice.",
            ].map((line, i) => (
              <p
                key={i}
                className="font-display italic font-light text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.1] text-balance"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* IV — PALETTE SUGGESTIONS */}
      <section className="px-6 md:px-12 py-32 md:py-48 bg-background">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-16 md:mb-20">
            iv. palette suggestions
          </p>

          <p className="font-display italic font-light text-center mx-auto max-w-[42ch] text-[clamp(1.1rem,1.8vw,1.45rem)] leading-[1.5] text-ink/80 mb-24 md:mb-32">
            color is decided before words. the right palette does thirty percent
            of the brand work before anyone reads a caption. one accent only,
            never two.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
            {palettes.map((p) => (
              <div key={p.n} className="space-y-6">
                <div className="flex w-full h-20 md:h-24 overflow-hidden grain-soft relative">
                  {p.hexes.map((h) => (
                    <div
                      key={h}
                      className="flex-1"
                      style={{ backgroundColor: h }}
                      aria-label={h}
                    />
                  ))}
                </div>

                <p className="font-display italic text-[14px] text-ink/55">
                  {p.n}
                </p>

                <h3 className="font-display italic font-light text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1] text-balance">
                  {p.name}
                </h3>

                <div className="space-y-2 max-w-[34ch]">
                  {p.lines.map((l, i) => (
                    <p
                      key={i}
                      className="text-[14px] leading-[1.65] text-ink/75"
                    >
                      {l}
                    </p>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="h-px w-12 bg-ink/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
