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
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Building Software
            </span>{" "}
            with precision and ambition
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Computer Science student at University of Waterloo. I build systems, design clean interfaces, and create technology that actually matters. 
          </p>

          <div className="mt-10 flex gap-4">
            <a href="#projects"
              className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-medium text-white
              transition hover:bg-purple-500 shadow-lg shadow-purple-900/30">
                View Projects
            </a>

            <a href="#contact"
              className="rounded-xl border border-purple-700 px-6 py-3 text-sm font-medium
              transition hover:bg-purple-900/20">
                Contact Me
            </a>
          </div>

          {/*PROJECTS*/}
          <section id="projects" className="pt-32">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="text-sm text-zinc-500">Hover a card →</p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {title: "Face Recognition System", desc:"Gender/age recogntion with OpenCV + TensorFlow", tag: "ML • Vision"},
                {title: "Trading Research", desc: "Model-driven portfolio thinking and backtesting.", tag: "Quant"},
                {title: "Systems Projects", desc: "Low-level work in C/C++ focused on performance.", tag: "C++"},
                {title: "Web Apps", desc: "Next.js + TypeScript apps with clean UI and structure.", tag: "Next.js"},
              ].map((p) => (
                <div 
                  key={p.title} 
                  className="group rounded-2xl border text-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition
                 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-900/30"
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

        </section>
      </div>
    </main>
  );
}
