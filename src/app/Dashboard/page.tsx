import type { CSSProperties } from "react";
import {Eye,EyeOff,User,Lock,Mail,ArrowLeft,Check,GraduationCap,ClipboardList,BarChart3,ShieldCheck,Gamepad2, Laptop} from "lucide-react";
const stagger = (ms: number) => ({ "--vh-delay": `${ms}ms` }) as CSSProperties;

export default function DashboardPage() {
    return (
        <div className="flex flex-1 flex-col gap-8 px-8 py-10">
            <header className="vh-stagger" style={stagger(60)}>
                <p className="text-xs font-medium tracking-widest text-white/50 uppercase">Overview</p>
                <h1 className="mt-1 text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="mt-2 max-w-md text-sm text-white/50">Ringkasan data siswa, kelas, dan nilai dalam satu tempat.</p>
            </header>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { label: "Total Siswa", value: "—" },
                    { label: "Total Kelas", value: "—" },
                    { label: "Rata-rata Nilai", value: "—" },
                    { label: "Kehadiran", value: "—" },
                ].map((stat, i) => (
                    <div
                        key={stat.label}
                        className="vh-card vh-stagger rounded-xl border border-white/10 bg-white/[0.03] p-5"
                        style={stagger(140 + i * 80)}
                    >
                        <p className="text-xs font-medium tracking-widest text-white/50 uppercase">{stat.label}</p>
                        <p className="mt-3 text-3xl font-bold tracking-tight">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="vh-stagger vh-card flex flex-1 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-16" style={stagger(480)}>
                <p className="text-sm text-white/40">test dashboard — konten akan segera hadir</p>
            </div>
        </div>
    );
}
