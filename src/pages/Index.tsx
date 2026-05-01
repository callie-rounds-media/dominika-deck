import coverDiptych from "@/assets/cover-diptych.jpg";
import audienceWalking from "@/assets/audience-walking.jpg";
import promiseDubai from "@/assets/promise-dubai.jpg";
import gBracelet from "@/assets/gallery-bracelet.jpg";
import gCoffee from "@/assets/gallery-coffee.jpg";
import gPilates from "@/assets/gallery-pilates.jpg";
import gBalcony from "@/assets/gallery-balcony.jpg";
import gJournal from "@/assets/gallery-journal.jpg";
import gScooter from "@/assets/gallery-scooter.jpg";
import gInterior from "@/assets/gallery-interior.jpg";
import gTower from "@/assets/gallery-tower.jpg";
import pillarSuccess from "@/assets/pillar-success.jpg";
import pillarLiving from "@/assets/pillar-living.jpg";
import pillarBody from "@/assets/pillar-body.jpg";
import pillarMoney from "@/assets/pillar-money.jpg";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import closing from "@/assets/closing-silhouette.jpg";

const gallery = [
  { src: gCoffee,    caption: "a slow morning in canggu",   span: "row-span-2" },
  { src: gTower,     caption: "blue hour, marina",           span: "" },
  { src: gBracelet,  caption: "the bead she always wears",   span: "" },
  { src: gJournal,   caption: "before the phone, the page",  span: "row-span-2" },
  { src: gBalcony,   caption: "an empty chair, on purpose",  span: "" },
  { src: gPilates,   caption: "body as form, not aesthetic", span: "" },
  { src: gInterior,  caption: "the hour before anyone wakes",span: "" },
  { src: gScooter,   caption: "a small commute, a whole life", span: "row-span-2" },
  { src: gBalcony,   caption: "dusk, terracotta, no plans",  span: "" },
];

const pillars = [
  {
    img: pillarSuccess,
    title: "Redefining Success",
    samples: [
      "the day I stopped optimizing my life",
      "what the corner office cost me, in private",
      "ambition, recalibrated",
    ],
    tone: "blue",
  },
  {
    img: pillarLiving,
    title: "Designed Living",
    samples: [
      "one ceramic bowl, ten years of use",
      "the room I rebuilt around silence",
      "less, but warmer",
    ],
    tone: "bone",
  },
  {
    img: pillarBody,
    title: "Body as Home",
    samples: [
      "the morning I stopped weighing myself",
      "strength in service of nothing visible",
      "softness as a discipline",
    ],
    tone: "bone",
  },
  {
    img: pillarMoney,
    title: "Money as Tool",
    samples: [
      "what I bought that bought me time",
      "the spreadsheet that set me free",
      "wealth, quietly held",
    ],
    tone: "warm",
  },
];

const posts = [
  { img: post1, hook: "i woke up in the wrong life.", payoff: "and i was the one who built it." },
  { img: post2, hook: "dubai didn't break me.",       payoff: "it just stopped fitting." },
  { img: post3, hook: "i kept the journal anyway.",   payoff: "even on the days nothing changed." },
  { img: post4, hook: "a bowl of oranges, a quiet kitchen.", payoff: "i call this the new ambition." },
  { img: post5, hook: "i walked out of the room.",    payoff: "and into the next one. slowly." },
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

      {/* 6 — PILLARS */}
      <section>
        <div className="px-6 md:px-12 pt-24 pb-12 max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50">
            iv. the four pillars
          </p>
        </div>

        {pillars.map((p, i) => {
          const overlay =
            p.tone === "blue"
              ? "bg-deep-blue/55"
              : p.tone === "warm"
              ? "bg-ink/35"
              : "bg-ink/30";
          return (
            <article key={i} className="relative h-[100svh] w-full overflow-hidden grain">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className={`absolute inset-0 ${overlay}`} />
              <div className="relative z-10 h-full w-full px-6 md:px-12 py-14 md:py-20 flex flex-col justify-between max-w-7xl mx-auto">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: "hsl(var(--background) / 0.7)" }}
                >
                  pillar 0{i + 1}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8">
                  <h3
                    className="md:col-span-7 font-display italic font-light text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] text-balance"
                    style={{ color: "hsl(var(--background))" }}
                  >
                    {p.title.toLowerCase()}
                  </h3>

                  <ul className="md:col-span-4 md:col-start-9 space-y-3">
                    {p.samples.map((s, j) => (
                      <li
                        key={j}
                        className="font-display italic text-[14px] md:text-[15px] leading-relaxed"
                        style={{ color: "hsl(var(--background) / 0.92)" }}
                      >
                        — {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* 7 — POSTS */}
      <section className="px-6 md:px-12 py-32 md:py-44 bg-sand/40">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-16">
            v. the first five posts
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
            {posts.map((p, i) => (
              <figure
                key={i}
                className={`space-y-4 ${i % 2 === 1 ? "lg:translate-y-12" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden grain-soft bg-ink/5 shadow-[0_30px_60px_-30px_rgba(38,33,28,0.35)]">
                  <img
                    src={p.img}
                    alt={p.hook}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/55" />
                  <p className="absolute left-5 right-5 bottom-5 font-display italic font-light text-[clamp(1.05rem,1.6vw,1.5rem)] leading-[1.15] text-background drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
                    {p.hook}
                  </p>
                </div>
                <figcaption className="space-y-1 px-1">
                  <p className="font-display italic text-[13px] leading-snug text-ink/85">
                    {p.hook}
                  </p>
                  <p className="font-display italic text-[13px] leading-snug text-ink/55">
                    {p.payoff}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — WHAT THIS IS NOT */}
      <section className="px-6 md:px-12 py-40 md:py-56">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-20">
            vi. what this is not
          </p>

          <ul className="space-y-14 md:space-y-20">
            {[
              "not a dubai real estate creator.",
              "not anti-dubai.",
              "not soft wellness.",
              "not grwm.",
              "not a teacher.",
            ].map((line, i) => (
              <li
                key={i}
                className="flex items-baseline gap-6 md:gap-8 font-display italic font-light text-[clamp(1.5rem,3vw,2.25rem)] leading-snug"
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-ink/40 not-italic font-body translate-y-[-2px]">
                  {["i", "ii", "iii", "iv", "v"][i]}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9 — CLOSING */}
      <section className="relative h-[100svh] w-full overflow-hidden grain">
        <img
          src={closing}
          alt="A woman's silhouette at a sunlit window, single bracelet on her wrist"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-between py-14 px-6 max-w-5xl mx-auto">
          <p
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "hsl(var(--background) / 0.7)" }}
          >
            vii. closing
          </p>

          <h2
            className="font-display italic font-light text-balance text-center text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.08]"
            style={{ color: "hsl(var(--background))" }}
          >
            one direction.
            <br />
            walking out, in real time.
          </h2>

          <p
            className="font-display italic text-[12px] tracking-wide"
            style={{ color: "hsl(var(--yellow))" }}
          >
            from callie.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
