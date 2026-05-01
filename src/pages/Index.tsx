import coverDiptych from "@/assets/cover-diptych.jpg";
import audienceWalking from "@/assets/audience-walking.jpg";
import promiseDubai from "@/assets/promise-dubai.jpg";
import closingSilhouette from "@/assets/closing-silhouette.jpg";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";

const palettes = [
  {
    n: "01",
    name: "sun-bleached linen.",
    hexes: ["#F4ECE0", "#EAE0D0", "#C9A88A", "#B26449", "#8C4A33", "#26211C"],
    lines: [
      "the mediterranean still life direction.",
      "oat, bone, sand, terracotta, faded gold.",
    ],
    inspired: "yentlspijk, sirintalbot, joliejanine",
    search: '"tonal cream editorial" or "linen and terracotta moodboard"',
  },
  {
    n: "02",
    name: "dubai blue hour.",
    hexes: ["#F4ECE0", "#EAE0D0", "#B26449", "#8C4A33", "#1E2A38", "#0F1620"],
    lines: [
      "editorial dark with a warm glow.",
      "deep navy, ink, terracotta, bone, sunset orange.",
    ],
    inspired: "pink.lem, sallyhadin, marimiqadzze",
    search: '"blue hour editorial" or "navy and terracotta"',
  },
  {
    n: "03",
    name: "bali earth.",
    hexes: ["#F4ECE0", "#E2D8C5", "#B26449", "#8C4A33", "#3E4F2A", "#26211C"],
    lines: [
      "organic tropical, lived in nature.",
      "jungle green, terracotta, deep brown, soft amber.",
    ],
    inspired: "marianawengorovius, meloai, gabriella__cristina",
    search: '"bali earth tones" or "jungle and terracotta"',
  },
];

const typography = [
  {
    n: "01",
    name: "the journal entry.",
    fonts: "header in Fraunces italic. body in Inter.",
    feel: "literary, reflective, soft. lowercase friendly.",
    like: "yentlspijk",
    sample: (
      <p
        className="font-display italic font-light text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.25] text-ink"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        i once believed performance was the same as identity.
      </p>
    ),
  },
  {
    n: "02",
    name: "the magazine cover.",
    fonts: "header in Canela or Playfair Display. accent italic in same family. body in Inter.",
    feel: "editorial, art directed, deliberate.",
    like: "sirintalbot",
    sample: (
      <div className="space-y-3">
        <p
          className="italic uppercase tracking-[0.18em] text-[10px] text-ink/60"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          (educational wellness)
        </p>
        <p
          className="font-semibold text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.1] text-ink"
          style={{ fontFamily: "'Playfair Display', 'Fraunces', Georgia, serif" }}
        >
          How I Became{" "}
          <span className="italic" style={{ color: "#E8C04A" }}>
            Peptide
          </span>{" "}
          Obsessed
        </p>
      </div>
    ),
  },
  {
    n: "03",
    name: "the soft note.",
    fonts: "header in Söhne or Inter, all lowercase. italic Fraunces for occasional emotional accents only.",
    feel: "casual, modern, unpretentious.",
    like: "marianawengorovius",
    sample: (
      <p
        className="text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.25] text-ink lowercase font-normal"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        i think i want to try
      </p>
    ),
  },
];

const formats = [
  {
    n: "01",
    name: "still life cover plus journal caption.",
    inspired: "yentlspijk",
    body: "a real object in soft natural light. two line italic quote overlay. three paragraph journal caption that ends on an invitation, not advice.",
    img: post1,
  },
  {
    n: "02",
    name: "magazine cover with accent word.",
    inspired: "sirintalbot",
    body: "eyebrow in italic small caps. bold serif headline. one yellow italic accent word on the loaded term. soft DM gate at the close.",
    img: post2,
  },
  {
    n: "03",
    name: "voiceover reel, no face.",
    inspired: "keziacook",
    body: "action b roll. subject not facing camera. big serif text overlay carrying the message. music supports, never leads.",
    img: post3,
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
