import type { CSSProperties } from "react";

const stagger = (ms: number) => ({ "--vh-delay": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <div className="flex min-h-svh flex-1 flex-col items-center justify-center bg-black px-6 font-sans text-white">
      <main className="vh-grid relative flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-8 overflow-hidden rounded-none px-16 py-32 text-center sm:items-start sm:text-left">
        <p
          className="vh-stagger rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-white/60 uppercase"
          style={stagger(60)}
        >
          Sistem Informasi Manajemen Siswa
        </p>
        <h1 className="vh-stagger max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl" style={stagger(140)}>
          Saya Muhammad Riffat Rizqullah <span className="text-white/60">Dari Kelas XIC</span>
        </h1>
        <p className="vh-stagger max-w-md text-lg leading-8 text-white/60" style={stagger(220)}>
          lagi belajar next.js, dengan bikin projek Sistem Manajemen Siswa.
        </p>
        <div className="vh-stagger mt-4 flex flex-col gap-4 text-base font-medium sm:flex-row" style={stagger(300)}>
          <a
            className="vh-card flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-black md:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="vh-card flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 text-white hover:border-white/50 hover:bg-white/5 md:w-auto"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
