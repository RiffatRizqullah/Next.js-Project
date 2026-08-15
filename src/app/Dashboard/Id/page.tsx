import type { CSSProperties } from "react";

const stagger = (ms: number) => ({ "--vh-delay": `${ms}ms` }) as CSSProperties;

export default function Id() {
    return (
        <div className="flex flex-1 flex-col gap-8 px-8 py-10">
            <header className="vh-stagger" style={stagger(60)}>
                <p className="text-xs font-medium tracking-widest text-white/50 uppercase">Detail</p>
                <h1 className="mt-1 text-3xl font-bold tracking-tight">Detail ID</h1>
                <p className="mt-2 max-w-md text-sm text-white/50">Halaman detail untuk data yang dipilih.</p>
            </header>

            <div className="vh-stagger vh-card flex flex-1 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-16" style={stagger(160)}>
                <p className="text-sm text-white/40">test ID — konten akan segera hadir</p>
            </div>
        </div>
    );
}
