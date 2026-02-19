import Image from "next/image";

export default function Home() {
  return(
    <main className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/*NAVBAR*/}
        <header className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">
            Siddhkumar Gathani
          </div>

          <nav className="flex gap-6 text-sm text-zinc-400">
            <a className="transition hover:text-purple-400" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-purple-400" href="#about">
              About
            </a>
            <a className="transition hover:text-purple-400" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        {/*HERO*/}

        <section className="pt-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/*Left: Text*/}
            <div>
              <p className="text-sm text-zinc-400">
                University of Waterloo • Computer Science + Economics
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                Siddhkumar{" "}
                <span className="bg-linear-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
                  Gathani
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-zinc-400">
                Systems-focused CS student building performant software and
                clean, intentional interfaces.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                {["Systems", "Machine Learning", "Embedded Software", "Quantitative Development"].map(
                  (t) => (
                    <span 
                    key = {t}
                    className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-zinc-300">
                      {t}
                    </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-purple-500 shadow-lg shadow-purple-900/30"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-purple-500 hover:bg-purple-900/20"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/*Right: Headshot*/}
            <div className="relative mx-auto w-full max-w-[320px]">
              {/*Purple glow*/}
              <div className="absolute -inset-6 rounded-3xl bg-purple-950 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800/30">
                <Image
                  src="/headshot.png"
                  alt="Siddhkumar Gathani headshot"
                  width={900}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/*PROJECTS*/}
        <section id="projects" className="pt-32">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="text-sm text-zinc-500">Hover a card →</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Face Recognition System", desc: "Gender/age recogntion with OpenCV + TensorFlow", tag: "ML • Vision" },
              { title: "Trading Research", desc: "Model-driven portfolio thinking and backtesting.", tag: "Quant" },
              { title: "Systems Projects", desc: "Low-level work in C/C++ focused on performance.", tag: "C++" },
              { title: "Web Apps", desc: "Next.js + TypeScript apps with clean UI and structure.", tag: "Next.js" },
            ].map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border text-purple-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition
                 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-900"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <span className="rounded-full bg-purple-900/20 px-2.5 py-1 text-xs text-purple-300 border border-purple-900/40">
                    {p.tag}
                  </span>
                </div>

                <p className="mt-3 text-sm text-zinc-400">{p.desc}</p>

                <div className="mt-4 text-sm text-purple-400 opacity-0 transition group-hover:opacity-100">
                  View details →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*ABOUT*/}
        <section id="about" className="pt-32">
          <h2 className="text-2xl font-semibold">About</h2>

          <p className="mt-6 max-w-2xl text-zinc-400">
            I’m a Waterloo CS student who loves problem-solving and building things end-to-end.
            I care about clarity, performance, and making software feel intentional.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {["TypeScript", "Next.js", "Tailwind", "C++", "Python", "TensorFlow"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-zinc-300">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/*CONTACT*/}
        <section id="contact" className="pt-32 pb-30">
          <h2 className="text-2xl font-semibold">Contact</h2>

          <p className="mt-4 text-zinc-400">
            Want to chat or collaborate? Reach out.
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            <a className="text-purple-400 transition hover:text-purple-300" href="mailto:smgathan@uwaterloo.ca">
              Email
            </a>
            <a className="text-purple-400 transition hover:text-purple-300" href="https://www.linkedin.com/in/sgathani/">
              LinkedIn
            </a>
            <a className="text-purple-400 transition hover:text-purple-300" href="#">
              GitHub
            </a>
          </div>

          <footer className="mt-16 text-sm text-zinc-600">
            © {new Date().getFullYear()} Siddhkumar Gathani
          </footer>
        </section>

      </div>
    </main>
  );
}
