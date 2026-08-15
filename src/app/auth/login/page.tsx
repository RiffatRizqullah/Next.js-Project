'use client';

import {useState} from "react";
import { useRouter } from "next/navigation";
import {Eye,EyeOff,User,Lock,Mail,ArrowLeft,Check,GraduationCap,ClipboardList,BarChart3,ShieldCheck} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formdata, setFormData] = useState({
        email: "",
        password: "",
    });
    const router = useRouter();
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formdata,
            [name]: value,
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formdata.password) {
            alert("Password is required");
            return;
        }

        console.log("Form Data:", formdata);
        router.push("/dashboard");
    }
    const isformvalid = formdata.email && formdata.password;

    const inputClass =
        "h-11! w-full rounded-xl! border border-white/10! bg-white/[0.04]! pl-10! pr-10! text-sm! text-white! placeholder:text-white/30! focus-visible:border-white/70! focus-visible:ring-3! focus-visible:ring-white/15!";

    const stagger = (ms: number) => ({ "--vh-delay": `${ms}ms` }) as CSSProperties;

    return (
        <div className="register-page relative flex min-h-screen w-full overflow-hidden bg-black text-white">
            {/* Left decorations */}
            <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-white/[0.04] blur-3xl" />
                    <div className="absolute top-1/2 -right-24 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />
                    <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />
                    <div
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
            <div className="relative hidden w-1/2 overflow-hidden lg:block">
                

                <div className="relative z-10 flex h-full flex-col justify-center px-12 py-12 xl:px-16">
                    <div className="vh-stagger mb-8 flex size-14 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/60" style={stagger(60)}>
                        <GraduationCap className="size-7 text-black" />
                    </div>
                    <h1 className="vh-stagger text-4xl leading-tight font-bold tracking-tight" style={stagger(140)}>
                        Riffat Manajemen{" "}
                        <span className="text-white/80">
                            Siswa
                        </span>
                    </h1>
                    <p className="vh-stagger mt-4 max-w-md text-lg leading-relaxed text-white/60" style={stagger(220)}>
                        Kelola data siswa, kelas, dan nilai dalam satu platform yang modern dan mudah digunakan.
                    </p>
                    <ul className="mt-10 space-y-4">
                        <li className="vh-stagger flex items-center gap-3 text-white/75" style={stagger(300)}>
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/30">
                                <ClipboardList className="size-4 text-white/80" />
                            </span>
                            Kelola data siswa dan kelas secara terpusat
                        </li>
                        <li className="vh-stagger flex items-center gap-3 text-white/75" style={stagger(380)}>
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/30">
                                <BarChart3 className="size-4 text-white/80" />
                            </span>
                            Pantau progres dan laporan nilai otomatis
                        </li>
                        <li className="vh-stagger flex items-center gap-3 text-white/75" style={stagger(460)}>
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/30">
                                <ShieldCheck className="size-4 text-white/80" />
                            </span>
                            Data tetap aman dan hanya untuk Anda
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right: register panel */}
            <div className="relative flex w-full items-center justify-center px-4 py-10 lg:w-1/2">
                <div className="w-full max-w-md">
                <div className="vh-stagger rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl" style={stagger(140)}>
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/60">
                            <User className="size-6 text-black" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
                        <p className="mt-1.5 text-sm text-white/50">Join us today — it only takes a minute.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/40" />
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    value={formdata.email}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-white/80">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/40" />
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    autoComplete="new-password"
                                    value={formdata.password}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 text-white/40 transition-colors hover:text-white"
                                >
                                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                </button>
                            </div>
                            
                        </div>
                        {/* Submit */}
                        <Button
                            type="submit"
                            size="lg"
                            disabled={!isformvalid}
                            className="h-11! w-full rounded-xl! bg-white text-sm! font-semibold! text-black! shadow-lg shadow-black/50 transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-black/60 disabled:bg-white/10 disabled:text-white/40 disabled:shadow-none"
                        >
                            Login
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-white/50">
                        Belum punya akun?{" "}
                        <button
                            type="button"
                            onClick={() => router.push("/auth/register")}
                            className="vh-underline font-medium text-white transition-colors hover:text-white"
                        >
                            Daftar sekarang
                        </button>
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}
