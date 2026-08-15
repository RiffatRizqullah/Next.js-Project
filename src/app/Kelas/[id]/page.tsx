'use client';

import { useParams } from "next/navigation";
import type { CSSProperties } from "react";

const stagger = (ms: number) => ({ "--vh-delay": `${ms}ms` }) as CSSProperties;

export default function KelasPage() {
    const { id } = useParams();
    return (
        <div className="flex flex-1 flex-col gap-8 px-8 py-10">
            <header className="vh-stagger" style={stagger(60)}>
                <p className="text-xs font-medium tracking-widest text-white/50 uppercase">Kelas</p>
                <h1 className="mt-1 text-3xl font-bold tracking-tight">Kelas {id}</h1>
                <p className="mt-2 max-w-md text-sm text-white/50">Kelola data siswa dalam kelas ini.</p>
            </header>

            <div className="vh-stagger vh-card flex flex-1 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-16" style={stagger(160)}>
                <p className="text-sm text-white/40">test kelas {id} — konten akan segera hadir</p>
            </div>
        </div>
    );
}
