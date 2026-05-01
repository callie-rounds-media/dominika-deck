import coverDiptych from "@/assets/cover-diptych.jpg";
import closingSilhouette from "@/assets/closing-sauna.jpg";
import feedTropicalEarth from "@/assets/feed-tropical-earth.jpg";
import feedWellnessNatural from "@/assets/feed-wellness-natural.jpg";
import feedWellnessEditorial from "@/assets/feed-wellness-editorial.jpg";
import feedEditorialDark from "@/assets/feed-editorial-dark.jpg";
import feedRivieraLuxury from "@/assets/feed-riviera-luxury.jpg";
import feedEuropeanFilm from "@/assets/feed-european-film.jpg";
import feedEarthyMoodboard from "@/assets/feed-earthy-moodboard.jpg";
import feedCleanPilates from "@/assets/feed-clean-pilates.jpg";
import paletteReference from "@/assets/palette-reference.jpg";
import strategyBrain from "@/assets/strategy-brain.jpg";
import niche1Intro from "@/assets/niche-1-intro.jpg";
import niche2Direction from "@/assets/niche-2-direction.jpg";
import niche3Life from "@/assets/niche-3-life.jpg";
import niche4Vision from "@/assets/niche-4-vision.jpg";
import niche5Future from "@/assets/niche-5-future.jpg";
import typoBgFraunces from "@/assets/typography-bg-fraunces.jpg";
import typoBgCormorant from "@/assets/typography-bg-cormorant.jpg";
import typoBgPlayfair from "@/assets/typography-bg-playfair.jpg";

const typographyOptions = [
  {
    n: "01",
    name: "Fraunces",
    family: "'Fraunces', Georgia, serif",
    classification: "modern editorial serif",
    feel: "literary, italic-driven, lived-in.",
    img: typoBgFraunces,
  },
  {
    n: "02",
    name: "Cormorant",
    family: "'Cormorant Garamond', 'Georgia', serif",
    classification: "classical refined serif",
    feel: "delicate, fashion house, vogue.",
    img: typoBgCormorant,
  },
  {
    n: "03",
    name: "Playfair",
    family: "'Playfair Display', 'Georgia', serif",
    classification: "dramatic display serif",
    feel: "magazine cover, art directed, bold.",
    img: typoBgPlayfair,
  },
];

const feedConcepts = [
  {
    n: "01",
    name: "tropical earth.",
    img: feedTropicalEarth,
    note: "greens, water, gold, deep green. bohemian, grounded.",
  },
  {
    n: "02",
    name: "wellness natural.",
    img: feedWellnessNatural,
    note: "morning yoga, soft wood, sage, bone. slow living energy.",
  },
  {
    n: "03",
    name: "wellness editorial.",
    img: feedWellnessEditorial,
    note: "wellness with magazine polish. terracotta, sage, structured.",
  },
  {
    n: "04",
    name: "editorial dark.",
    img: feedEditorialDark,
    note: "badass and intentional. black, gold, metallic, dramatic shadow.",
  },
  {
    n: "05",
    name: "riviera luxury.",
    img: feedRivieraLuxury,
    note: "soft whites, sea blue, sunset gold, warm marble. mediterranean.",
  },
  {
    n: "06",
    name: "european film.",
    img: feedEuropeanFilm,
    note: "black, white, charcoal, soft sepia. monochrome.",
  },
  {
    n: "07",
    name: "earthy moodboard.",
    img: feedEarthyMoodboard,
    note: "browns, sand, sage, cream. earthy and grounded.",
  },
  {
    n: "08",
    name: "clean pilates.",
    img: feedCleanPilates,
    note: "cream, white, beige, soft taupe. neutral and quiet.",
  },
];

const postIdeas = [
  {
    n: "01",
    title: "a natural day in the life.",
    refShortcodes: ["DWJPs4qE_PC"],
    capture: [
      "a wellness scene. pilates, yoga, sauna, or a slow walk.",
      "a nature spot most people wouldn't know about.",
      "a good coffee or matcha place. local, not chain.",
      "a selfie. one shot, mid-moment, to keep the personal connection.",
      "a sunset shot from somewhere quiet.",
      "a night shot, but soft. lamp light, not nightlife.",
    ],
    avoid: [
      "overly fancy restaurants.",
      "bars or nightlife.",
      "chain spots and well-known names. starbucks, mainstream cafes, anywhere most of your city already posts. saves come from hidden gems, not from familiar ground.",
    ],
    leanInto:
      "morning scenes, nature, the wellness side. if a place feels more natural to you than what is listed, follow that instead.",
    bRoll:
      "at every location, take a few short videos. .5x on the rear camera with you in frame is ideal. these become reels and b-roll for everything we make in the next ninety days.",
  },
  {
    n: "02",
    title: "a reel from your existing footage.",
    refShortcodes: ["DIdmEKypEfv", "DTQxSmwjAp1", "DQzU3DXCYRH"],
    yourRole:
      "send me the vertical videos you already have. travel, wellness, anything you've shot in 9:16. you don't need to capture anything new for this one.",
    myRole:
      "i'll cut your footage into a reel that matches one of these references. travel, wellness, or whatever matches best to the existing content you have.",
  },
  {
    n: "03",
    title: "a nature moment near dubai.",
    refShortcodes: [
      "DGITfELB2Qq",
      "DGNqyx-qYiN",
      "DW_lu_ZDDaT",
      "DWnzLt2CINB",
      "DWoi6pHCILN",
    ],
    capture:
      "shots that feel natural. mostly the landscape. nothing prescribed, just whatever catches your eye in the moment.",
    note:
      "you mentioned things are quieter right now. that's a real edge. nature locations without other people in the frame always feel more cinematic. prioritize grabbing this footage while it's still empty.",
    leanInto:
      "nature, outdoorsy, grounded, free spirit. a morning drive somewhere near dubai. the first two references share the same location, that's the top pick. otherwise any of the next three works, or anywhere else outdoors that feels true to you.",
    bRoll:
      "include a human element whenever you can. posts with a person in the frame consistently outperform posts without one. if you can bring a friend to shoot, amazing. if not, flip the back camera to .5x and record yourself that way. blending between .5x and 1x shots also looks great.",
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
          style={{
            filter:
              "sepia(0.45) saturate(1.1) brightness(0.93) contrast(1.05) hue-rotate(-6deg)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(178,100,73,0.18) 0%, rgba(38,33,28,0.35) 100%)",
            mixBlendMode: "multiply",
          }}
        />
        <div className="absolute inset-0 bg-ink/15" />
        <div className="absolute inset-0 flex flex-col items-center justify-between py-10 md:py-14 px-6 z-10">
          <p
            className="text-[10px] md:text-[11px] tracking-[0.32em] uppercase fade-up"
            style={{ color: "hsl(var(--yellow))", animationDelay: "0.2s" }}
          >
            for Dominika · visual direction
          </p>

          <h1
            className="font-headline font-normal text-balance text-center max-w-4xl text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] fade-up"
            style={{ color: "hsl(var(--background))", animationDelay: "0.6s" }}
          >
            redefining success,
            <br />
            while still inside it
          </h1>

          <p
            className="text-[10px] tracking-[0.32em] uppercase fade-up"
            style={{ color: "hsl(var(--background) / 0.7)", animationDelay: "1s" }}
          >
            brand voice & niche
          </p>
        </div>
      </section>

      {/* I — NICHE DIRECTION */}
      <section className="px-6 md:px-12 py-32 md:py-48">
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-6 md:mb-8 text-center">
            i.
          </p>
          <h2 className="font-headline font-normal text-center mx-auto text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.05] text-balance text-ink mb-6 md:mb-8">
            niche direction.
          </h2>
          <p className="font-headline font-normal text-center mx-auto max-w-[52ch] text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.4] text-ink/70 mb-16 md:mb-20">
            this is the version of you i see when i read everything you've
            shared. a niche built around what makes you, you. the goal isn't to
            be louder than everyone else. it's to be unmistakably you :)
          </p>

          <div className="space-y-20 md:space-y-28 max-w-6xl mx-auto">
            {/* INTRO · image left, text right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-12 items-center">
              <div className="md:col-span-4 md:col-start-1">
                <div
                  className="w-full overflow-hidden grain-soft ring-1 ring-ink/10"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <img
                    src={niche1Intro}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7 md:col-start-6 space-y-4">
                <p className="text-[15.5px] leading-[1.75] text-ink/85">
                  i want your niche to feel relatable, where people actually
                  connect with your lifestyle. but not so broad that you're
                  lost in the wellness or lifestyle creator pile. a space that
                  feels distinct, intentional, and consistent. yours.
                </p>
              </div>
            </div>

            {/* DIRECTION · image right, text left */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-12 items-center">
              <div className="md:col-span-7 md:col-start-1 space-y-4 md:order-1 order-2">
                <p className="uppercase tracking-[0.22em] text-[10px] text-ink/50">
                  the direction · first 12 months
                </p>
                <p className="text-[15.5px] leading-[1.75] text-ink/85">
                  a modern soft strength lifestyle, where wellness, ambition,
                  and adventure all coexist. you inspire people to live with
                  intention, rethink what success looks like, and build a life
                  on their own terms.
                </p>
              </div>
              <div className="md:col-span-4 md:col-start-9 md:order-2 order-1">
                <div
                  className="w-full overflow-hidden grain-soft ring-1 ring-ink/10"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <img
                    src={niche2Direction}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* LIFE · image left, text right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-12 items-center">
              <div className="md:col-span-4 md:col-start-1">
                <div
                  className="w-full overflow-hidden grain-soft ring-1 ring-ink/10"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <img
                    src={niche3Life}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7 md:col-start-6 space-y-4">
                <p className="uppercase tracking-[0.22em] text-[10px] text-ink/50">
                  how this comes to life
                </p>
                <p className="text-[15.5px] leading-[1.75] text-ink/85">
                  your content reflects you. the curiosity to explore the
                  world. the bravery to move through it independently. the
                  discipline to keep your strength. the work ethic and
                  resilience that built the life you have today. and the
                  wisdom to know when to slow down and just be present.
                </p>
              </div>
            </div>

            {/* VISION · image right, text left */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-12 items-center">
              <div className="md:col-span-7 md:col-start-1 space-y-4 md:order-1 order-2">
                <p className="uppercase tracking-[0.22em] text-[10px] text-ink/50">
                  long-term vision
                </p>
                <p className="text-[15.5px] leading-[1.75] text-ink/85">
                  as you evolve, this stretches beyond dubai. it becomes more
                  location-independent. a global, wellness-driven life rooted
                  in freedom and intentional living. with bali as the next
                  chapter when you're ready :)
                </p>
              </div>
              <div className="md:col-span-4 md:col-start-9 md:order-2 order-1">
                <div
                  className="w-full overflow-hidden grain-soft ring-1 ring-ink/10"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <img
                    src={niche4Vision}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CLOSING · image left, affirmation right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-12 items-center">
              <div className="md:col-span-4 md:col-start-1">
                <div
                  className="w-full overflow-hidden grain-soft ring-1 ring-ink/10"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <img
                    src={niche5Future}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="font-headline font-normal text-ink/90 text-[clamp(1.3rem,2vw,1.7rem)] leading-[1.35]">
                  your audience grows with you. nothing has to change in who
                  you are :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* II — FEED CONCEPTS */}
      <section className="px-6 md:px-12 py-32 md:py-48 bg-background">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-16 md:mb-20">
            ii. feed concepts
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {feedConcepts.map((f) => (
              <div key={f.n} className="space-y-4">
                <div className="relative w-full aspect-[3/5] overflow-hidden grain-soft bg-sand/30 ring-1 ring-ink/10">
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <p className="uppercase tracking-[0.24em] text-[10px] text-ink/55">
                  {f.n}
                </p>
                <h3 className="font-headline font-normal text-[clamp(1.3rem,1.9vw,1.7rem)] leading-[1.15]">
                  {f.name}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-ink/70 max-w-[28ch]">
                  {f.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* V — MY SUGGESTED COLOR PALETTE */}
      <section className="px-6 md:px-12 py-32 md:py-48 bg-sand/30">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-12 items-center">
          <div className="md:col-span-4 md:col-start-1 relative grain-soft overflow-hidden ring-1 ring-ink/10 bg-background">
            <img
              src={paletteReference}
              alt="suggested color palette: linen, water and stone, sand, deep green, bone"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50">
              iii. my suggested color palette
            </p>
            <p className="font-headline font-normal text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1] text-balance">
              the one i'd run with.
            </p>
            <p className="max-w-md text-ink/75 text-[15px] leading-[1.7]">
              warm neutrals, one deep green, one bronze. it sits naturally
              between dubai and bali, so when you move between the two, the
              transition on your feed reads smooth.
            </p>
          </div>
        </div>
      </section>

      {/* IV — TYPOGRAPHY OPTIONS */}
      <section className="px-6 md:px-12 py-32 md:py-48 bg-background">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-6 md:mb-8 text-center">
            iv.
          </p>
          <h2 className="font-headline font-normal text-center mx-auto text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.05] text-balance text-ink mb-6 md:mb-8">
            typography options.
          </h2>
          <p className="font-headline font-normal text-center mx-auto max-w-[44ch] text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.3] text-ink/65 mb-16 md:mb-20">
            three serifs, same minimalist feel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {typographyOptions.map((t) => (
              <div
                key={t.n}
                className="relative overflow-hidden ring-1 ring-ink/10 grain-soft"
                style={{ aspectRatio: "3 / 5" }}
              >
                <img
                  src={t.img}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/60" />

                <div className="relative z-10 h-full flex flex-col justify-between p-7 md:p-9 text-background">
                  {/* Top: name + classification */}
                  <div className="text-center space-y-3">
                    <h3
                      className="text-[clamp(2.4rem,3.6vw,3.4rem)] leading-[0.95] text-background"
                      style={{ fontFamily: t.family, fontWeight: 300 }}
                    >
                      {t.name}
                    </h3>
                    <p className="text-[9px] uppercase tracking-[0.32em] text-background/75">
                      {t.classification}
                    </p>
                  </div>

                  {/* Center: Aa + weights */}
                  <div className="flex items-center justify-center gap-5 md:gap-7">
                    <div
                      className="text-[clamp(3.5rem,5.5vw,4.6rem)] leading-none text-background"
                      style={{ fontFamily: t.family, fontWeight: 300 }}
                    >
                      Aa
                    </div>
                    <div
                      className="border-l border-background/40 pl-5 space-y-1.5"
                      style={{ fontFamily: t.family }}
                    >
                      <p
                        className="text-[14px] text-background leading-tight"
                        style={{ fontWeight: 300 }}
                      >
                        {t.name} Light
                      </p>
                      <p
                        className="text-[14px] text-background leading-tight"
                        style={{ fontWeight: 600 }}
                      >
                        {t.name} Bold
                      </p>
                      <p
                        className="text-[14px] text-background italic leading-tight"
                        style={{ fontWeight: 400 }}
                      >
                        {t.name} Italic
                      </p>
                    </div>
                  </div>

                  {/* Bottom: alphabet */}
                  <div
                    className="grid grid-cols-3 gap-3 text-[10.5px] leading-[1.55] text-background/90"
                    style={{ fontFamily: t.family }}
                  >
                    <p style={{ fontWeight: 300 }}>
                      abcdefghij
                      <br />
                      klmnopqrs
                      <br />
                      tuvwxyz
                      <br />
                      ABCDEFGH
                      <br />
                      IJKLMNOP
                      <br />
                      QRSTUVW
                      <br />
                      XYZ
                      <br />
                      1234567890!?
                    </p>
                    <p style={{ fontWeight: 600 }}>
                      abcdefghij
                      <br />
                      klmnopqrs
                      <br />
                      tuvwxyz
                      <br />
                      ABCDEFGH
                      <br />
                      IJKLMNOP
                      <br />
                      QRSTUVW
                      <br />
                      XYZ
                      <br />
                      1234567890!?
                    </p>
                    <p className="italic" style={{ fontWeight: 400 }}>
                      abcdefghij
                      <br />
                      klmnopqrs
                      <br />
                      tuvwxyz
                      <br />
                      ABCDEFGH
                      <br />
                      IJKLMNOP
                      <br />
                      QRSTUVW
                      <br />
                      XYZ
                      <br />
                      1234567890!?
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* V — STRATEGY NOTE */}
      <section className="px-6 md:px-12 py-32 md:py-48 bg-background">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-6 md:mb-8 text-center">
            v.
          </p>

          <h2 className="font-headline font-normal text-center mx-auto text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.05] text-balance text-ink mb-6 md:mb-8">
            strategy note.
          </h2>

          <p className="font-headline font-normal text-center mx-auto max-w-[40ch] text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.3] text-ink/65 mb-16 md:mb-20">
            your brain prefers what it has already seen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-16 items-start">
            {/* LEFT: brain image */}
            <div className="md:col-span-5 md:col-start-1 relative grain-soft overflow-hidden ring-1 ring-ink/10">
              <img
                src={strategyBrain}
                alt="An anatomical brain model and a small neuron model on a stone surface"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <p className="mt-4 uppercase tracking-[0.2em] text-[10px] text-ink/55">
                the mere-exposure effect.
              </p>
            </div>

            {/* RIGHT: long-form body text */}
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-[15.5px] leading-[1.75] text-ink/80">
              <p>
                the brain is not lazy. it is efficient. familiar shapes, sounds,
                and structures fire faster, with less cognitive load. that is
                why you stop scrolling for a song you half-recognize. why a face
                you keep seeing starts to feel like home.
              </p>
              <p>
                researchers call it the mere-exposure effect. the more often a
                person encounters something, the more they tend to like it.
                trust it. engage with it. it is one of the most replicated
                findings in social psychology.
              </p>
              <p>
                on instagram, this means your audience is not waiting for
                novelty. they are waiting for something that feels like a place
                they already want to be. trending audio works because of this.
                trending formats work because of this.
              </p>
              <p>
                the goal is not to invent. the goal is to recognize what is
                already pulling people in, and rebuild it with your story. take
                the format. swap in your subject, your caption, your light. that
                is not copying. that is craft.
              </p>
              <p className="font-headline font-normal text-ink/95 text-[clamp(1.15rem,1.6vw,1.35rem)] leading-[1.4] pt-2">
                no need to reinvent the wheel. riff on what is already working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* V — FIRST THREE POST IDEAS */}
      <section className="px-6 md:px-12 py-32 md:py-48 bg-background">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-16 md:mb-20">
            vi. first three post ideas
          </p>

          <div className="space-y-32 md:space-y-44">
            {postIdeas.map((p) => {
              const refs = p.refShortcodes || [];
              const refCount = refs.length;

              const refsBlock = (
                <div className="space-y-6">
                  <p className="uppercase tracking-[0.22em] text-[10px] text-ink/55">
                    {refCount > 1 ? `references (${refCount})` : "reference post"}
                  </p>
                  <div
                    className={
                      refCount === 1
                        ? "grid grid-cols-1"
                        : refCount === 2
                          ? "grid grid-cols-2 gap-3"
                          : "grid grid-cols-3 gap-2"
                    }
                  >
                    {refs.map((sc, i) => (
                      <div key={sc} className="space-y-2">
                        <div
                          className="relative w-full overflow-hidden bg-ink/5 ring-1 ring-ink/10"
                          style={{ aspectRatio: "9 / 16" }}
                        >
                          <iframe
                            src={`https://www.instagram.com/p/${sc}/embed/`}
                            style={{
                              position: "absolute",
                              top: "-35px",
                              left: "50%",
                              transform: "translateX(-50%) scale(0.65)",
                              transformOrigin: "top center",
                              width: "154%",
                              height: "calc(154% + 554px)",
                              border: 0,
                              pointerEvents: "auto",
                            }}
                            loading="lazy"
                            scrolling="no"
                            allowTransparency
                            title={`reference ${p.n}-${i + 1}`}
                          />
                        </div>
                        <a
                          href={`https://www.instagram.com/p/${sc}/`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block uppercase tracking-[0.22em] text-[9px] text-ink/45 hover:text-ink/80 underline-offset-4 hover:underline"
                        >
                          open on instagram →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );

              const titleBlock = (
                <div className="space-y-4">
                  <p className="uppercase tracking-[0.24em] text-[10px] text-ink/55">
                    post {p.n}
                  </p>
                  <h3 className="font-headline font-normal text-[clamp(1.9rem,3.5vw,2.7rem)] leading-[1.12] text-balance">
                    {p.title}
                  </h3>
                </div>
              );

              const detailsBlock = (
                <div className="space-y-8">
                  {p.capture && (
                    <div className="border-t border-ink/15 pt-5">
                      <p className="uppercase tracking-[0.22em] text-[10px] text-ink/50 mb-4">
                        what to capture
                      </p>
                      {Array.isArray(p.capture) ? (
                        <ul className="space-y-2.5">
                          {p.capture.map((c, i) => (
                            <li
                              key={i}
                              className="grid grid-cols-[28px_1fr] gap-3 items-baseline text-[14.5px] leading-[1.55] text-ink/85"
                            >
                              <span className="font-headline font-normal text-ink/45 text-[14px]">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[14.5px] leading-[1.65] text-ink/80 max-w-[50ch]">
                          {p.capture}
                        </p>
                      )}
                    </div>
                  )}

                  {p.note && (
                    <div className="border-t border-ink/15 pt-5">
                      <p className="uppercase tracking-[0.22em] text-[10px] text-ink/50 mb-2">
                        a note
                      </p>
                      <p className="text-[14.5px] leading-[1.65] text-ink/80 max-w-[50ch]">
                        {p.note}
                      </p>
                    </div>
                  )}

                  {p.avoid && (
                    <div className="border-t border-ink/15 pt-5">
                      <p className="uppercase tracking-[0.22em] text-[10px] text-ink/50 mb-3">
                        avoid
                      </p>
                      <ul className="space-y-1.5">
                        {p.avoid.map((a, i) => (
                          <li
                            key={i}
                            className="text-[14px] leading-[1.55] text-ink/70 italic font-display"
                          >
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {p.leanInto && (
                    <div className="border-t border-ink/15 pt-5">
                      <p className="uppercase tracking-[0.22em] text-[10px] text-ink/50 mb-2">
                        lean into
                      </p>
                      <p className="text-[14.5px] leading-[1.65] text-ink/80 max-w-[50ch]">
                        {p.leanInto}
                      </p>
                    </div>
                  )}

                  {p.bRoll && (
                    <div className="border-t border-ink/15 pt-5">
                      <p className="uppercase tracking-[0.22em] text-[10px] text-ink/50 mb-2">
                        b roll note
                      </p>
                      <p className="text-[14.5px] leading-[1.65] text-ink/80 max-w-[50ch]">
                        {p.bRoll}
                      </p>
                    </div>
                  )}

                  {p.yourRole && (
                    <div className="border-t border-ink/15 pt-5">
                      <p className="uppercase tracking-[0.22em] text-[10px] text-ink/50 mb-2">
                        what to send
                      </p>
                      <p className="text-[14.5px] leading-[1.65] text-ink/80 max-w-[50ch]">
                        {p.yourRole}
                      </p>
                    </div>
                  )}

                  {p.myRole && (
                    <div className="border-t border-ink/15 pt-5">
                      <p className="uppercase tracking-[0.22em] text-[10px] text-ink/50 mb-2">
                        what i'll do
                      </p>
                      <p className="text-[14.5px] leading-[1.65] text-ink/80 max-w-[50ch]">
                        {p.myRole}
                      </p>
                    </div>
                  )}
                </div>
              );

              return (
                <article key={p.n}>
                  {p.placeholder ? (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-12 items-start">
                      <div className="md:col-span-5">
                        <div className="w-full aspect-[4/5] bg-sand/40 grain-soft" />
                      </div>
                      <div className="md:col-span-7 space-y-6 md:pt-6">
                        <p className="uppercase tracking-[0.24em] text-[10px] text-ink/55">
                          post {p.n}
                        </p>
                        <h3 className="font-headline font-normal text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.15]">
                          {p.title}
                        </h3>
                        <p className="text-[14px] leading-[1.65] text-ink/55 max-w-[40ch]">
                          we'll write this one together once you pick your
                          mood, palette, and typography.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-12 items-start">
                      <div
                        className={
                          refCount > 1 ? "md:col-span-6" : "md:col-span-5"
                        }
                      >
                        {refsBlock}
                      </div>
                      <div
                        className={`${
                          refCount > 1 ? "md:col-span-6" : "md:col-span-7"
                        } md:pl-2 space-y-8`}
                      >
                        {titleBlock}
                        {detailsBlock}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* VII — A NOTE ON SHOOTING */}
      <section className="px-6 md:px-12 py-32 md:py-48 bg-sand/30">
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-ink/50 mb-6 md:mb-8 text-center">
            vii.
          </p>

          <h2 className="font-headline font-normal text-center mx-auto text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] text-balance text-ink mb-6 md:mb-8">
            a note on shooting.
          </h2>

          <p className="font-headline font-normal text-center mx-auto max-w-[44ch] text-[clamp(1.15rem,1.8vw,1.5rem)] leading-[1.3] text-ink/65 mb-16 md:mb-20">
            fun, authentic, light. that's the rule.
          </p>

          <div className="space-y-16 md:space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-10 md:col-start-2 space-y-6 text-[15.5px] leading-[1.75] text-ink/80">
                <p>
                  the goal here is to keep it fun, authentic, and light. don't
                  set yourself up with a specific shot list or anything too
                  staged. the best way to go about this is to show up at a
                  location and shoot whatever feels real in the moment. if
                  you're not feeling it that day, take a breath and don't
                  shoot. you don't want to turn this into experiencing life
                  only through the camera.
                </p>
                <p>
                  when you do feel like shooting, take both. iphone photos for
                  carousels and stills. iphone vertical video for reels and
                  b-roll. you never know what concept or idea this footage
                  might fit into later.
                </p>
                <p>
                  when you can, set the rear camera to .5x and put yourself in
                  the frame. .5x helps a lot for hooks, and whenever you're
                  somewhere alone, it becomes your best friend. a tripod works
                  too, but shooting on .5x with yourself in frame adds natural
                  movement, reads more authentic, and lifts engagement.
                </p>
              </div>
            </div>

            {/* Example refs */}
            <div className="space-y-4">
              <p className="uppercase tracking-[0.18em] text-[13px] md:text-[14px] text-ink/65 text-center">
                example of shots on .5 rear iphone camera
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["DL51qIVP4FN", "DXUyLJQjkY1", "DQzU3DXCYRH"].map((sc, i) => (
                  <div key={sc} className="space-y-2">
                    <div
                      className="relative w-full overflow-hidden bg-ink/5 ring-1 ring-ink/10"
                      style={{ aspectRatio: "9 / 16" }}
                    >
                      <iframe
                        src={`https://www.instagram.com/p/${sc}/embed/`}
                        style={{
                          position: "absolute",
                          top: "-35px",
                          left: "50%",
                          transform: "translateX(-50%) scale(0.65)",
                          transformOrigin: "top center",
                          width: "154%",
                          height: "calc(154% + 554px)",
                          border: 0,
                        }}
                        loading="lazy"
                        scrolling="no"
                        allowTransparency
                        title={`shoot example ${i + 1}`}
                      />
                    </div>
                    <a
                      href={`https://www.instagram.com/p/${sc}/`}
                      target="_blank"
                      rel="noreferrer"
                      className="block uppercase tracking-[0.22em] text-[9px] text-ink/45 hover:text-ink/80 underline-offset-4 hover:underline text-center"
                    >
                      open on instagram →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VII — WHAT'S NEXT */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden grain">
        <img
          src={closingSilhouette}
          alt="A warm-lit cedar sauna with cream towels, atmospheric and quiet"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 z-10">
          <div className="max-w-3xl space-y-10">
            <p
              className="text-[10px] tracking-[0.32em] uppercase"
              style={{ color: "hsl(var(--background) / 0.7)" }}
            >
              viii. what's next
            </p>

            <h2
              className="font-headline font-normal text-balance text-[clamp(2.2rem,5.5vw,4.4rem)] leading-[1.08]"
              style={{ color: "hsl(var(--background))" }}
            >
              the rest of the runway.
            </h2>

            <ul className="space-y-3 pt-4">
              {[
                { line: "day 7. voice and visual locked.", done: false },
                { line: "days 8 to 9. content pillars built together.", done: false },
                { line: "day 10. competitor and inspiration research.", done: true },
                { line: "day 11. first thirty day content calendar.", done: false },
              ].map(({ line, done }) => (
                <li
                  key={line}
                  className="uppercase tracking-[0.22em] text-[11px] flex items-baseline gap-3"
                  style={{ color: "hsl(var(--background) / 0.75)" }}
                >
                  <span
                    className="inline-block text-[12px]"
                    style={{
                      color: done
                        ? "hsl(var(--background))"
                        : "hsl(var(--background) / 0.35)",
                    }}
                  >
                    {done ? "✓" : "·"}
                  </span>
                  <span style={done ? { color: "hsl(var(--background) / 0.55)" } : undefined}>
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="font-headline font-normal text-[clamp(1.2rem,1.7vw,1.5rem)] pt-8"
              style={{ color: "hsl(var(--background))" }}
            >
              with love, callie.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
