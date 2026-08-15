'use client';

import {useState} from "react";
import { useRouter } from "next/navigation";
import {Eye,EyeOff,User,Lock,Mail,ArrowLeft,Check,GraduationCap,ClipboardList,BarChart3,ShieldCheck,Gamepad2, Laptop} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";
export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptedterms, setAcceptedTerms] = useState(false);
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
        if (!formdata.password ||formdata.password !== formdata.confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }
        if (!acceptedterms) {
            alert("You must accept the terms and conditions");
            return;
        }

        console.log("Form Data:", formdata);
        router.push("/auth/login");
    }


    const getpasswordstrength = (password: string) => {
        if(!password){
            return {text: "", color: "text-white/40"};
        } else if (password.length < 6) {
            return {text: "lemah", color: "text-white/40"};
        } else if (password.length < 10) {
            return {text: "sedang", color: "text-white/70"};
        } else {
            return {text: "kuat", color: "text-white"};
        }
    }

    const passwordStrength = getpasswordstrength(formdata.password);
    const strengthLevel =
        passwordStrength.text === "lemah" ? 1 : passwordStrength.text === "sedang" ? 2 : passwordStrength.text === "kuat" ? 3 : 0;
    const strengthBarColor =
        passwordStrength.text === "lemah"
            ? "bg-white/30"
            : passwordStrength.text === "sedang"
              ? "bg-white/60"
              : passwordStrength.text === "kuat"
                ? "bg-white"
                : "bg-white/10";

    const isformvalid = formdata.name && formdata.email && formdata.password && formdata.confirmPassword && acceptedterms;

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
                        <span className="text-white/85">
                            Muhammad
                        </span>
                        {""} Riffat {" "}
                        <span className="text-white/85">
                            Rizqullah
                        </span>
                    </h1>
                    <p className="vh-stagger mt-4 max-w-md text-lg leading-relaxed text-white/60" style={stagger(220)}>
                        Menyediakan Software Tools untuk Windows dan Android, dan Permainan Video yang dapat dimainkan dengan gratis.
                    </p>
                    <ul className="mt-10 space-y-4">
                        <li className="vh-stagger flex items-center gap-3 text-white/75" style={stagger(300)}>
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/30">
                                <Laptop className="size-4 text-white/80" />
                            </span>
                            Unduh software dan gunakan secara online maupun offline
                        </li>
                        <li className="vh-stagger flex items-center gap-3 text-white/75" style={stagger(300)}>
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/30">
                                <Gamepad2 className="size-4 text-white/80" />
                            </span>
                            Unduh permainan video dan dapat dimainkan kapan saja
                        </li>
                        <li className="vh-stagger flex items-center gap-3 text-white/75" style={stagger(380)}>
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-200 hover:border-white/30">
                                <BarChart3 className="size-4 text-white/80" />
                            </span>
                            Dapatkan update fitur terbaru secara otomatis dan gratis
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
                <button
                    type="button"
                    onClick={() => router.push("/auth/login")}
                    className="vh-stagger group mb-6 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                    style={stagger(60)}
                >
                    <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                    Kembali ke halaman login
                </button>

                <div className="vh-stagger rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl" style={stagger(140)}>
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/60">
                            <User className="size-6 text-black" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight">Buat akun baru</h1>
                        <p className="mt-1.5 text-sm text-white/50">Gabung sekarang — cuma butuh semenit.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
                                Nama
                            </label>
                            <div className="relative">
                                <User className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/40" />
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Masukkan nama lengkap Anda"
                                    autoComplete="name"
                                    value={formdata.name}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>

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
                                    placeholder="Buat password"
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
                            {formdata.password && (
                                <div className="mt-2">
                                    <div className="flex gap-1.5">
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                                                    i < strengthLevel ? strengthBarColor : "bg-white/10"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <p className={`mt-1 text-xs font-medium ${passwordStrength.color}`}>
                                         Password {passwordStrength.text}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-white/80">
                                Konfirmasi Password
                            </label>
                            <div className="relative">
                                <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/40" />
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showconfirmPassword ? "text" : "password"}
                                    placeholder="Konfirmasi password"
                                    autoComplete="new-password"
                                    value={formdata.confirmPassword}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showconfirmPassword)}
                                    aria-label={showconfirmPassword ? "Hide confirm password" : "Show confirm password"}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 text-white/40 transition-colors hover:text-white"
                                >
                                    {showconfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Terms checkbox */}
                        <div className="flex items-start gap-3">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked={acceptedterms}
                                onClick={() => setAcceptedTerms(!acceptedterms)}
                                className={`mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-md border transition-all duration-200 ${
                                    acceptedterms
                                        ? "scale-105 border-white bg-white"
                                        : "border-white/20 bg-white/5 hover:scale-105 hover:border-white/40"
                                }`}
                            >
                                {acceptedterms && <Check className="size-3.5 text-black" strokeWidth={3} />}
                            </button>
                            <p
                                onClick={() => setAcceptedTerms(!acceptedterms)}
                                className="cursor-pointer text-sm leading-relaxed text-white/60 select-none"
                            >
                                Aku telah menyetujui{" "}
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="vh-underline font-medium text-white hover:text-white"
                                >
                                    Syarat & Ketentuan Layanan
                                </a>{" "}
                                dan{" "}
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="vh-underline font-medium text-white hover:text-white"
                                >
                                    Kebijakan Privasi
                                </a>
                            </p>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            size="lg"
                            disabled={!isformvalid}
                            className="h-11! w-full rounded-xl! bg-white text-sm! font-semibold! text-black! shadow-lg shadow-black/50 transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-black/60 disabled:bg-white/10 disabled:text-white/40 disabled:shadow-none"
                        >
                            Create Account
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-white/50">
                        Sudah punya akun?{" "}
                        <button
                            type="button"
                            onClick={() => router.push("/auth/login")}
                            className="vh-underline font-medium text-white transition-colors hover:text-white"
                        >
                            Login
                        </button>
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}
