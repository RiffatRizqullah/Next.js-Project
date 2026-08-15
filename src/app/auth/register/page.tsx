'use client';

import {useState} from "react";
import { useRouter } from "next/navigation";
import {Eye,EyeOff,User,Lock,Mail,ArrowLeft,Check,GraduationCap,ClipboardList,BarChart3,ShieldCheck} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function KelasPage() {
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
            return {text: "", color: ""};
        } else if (password.length < 6) {
            return {text: "lemah", color: "text-red-500"};
        } else if (password.length < 10) {
            return {text: "sedang", color: "text-yellow-500"};
        } else {
            return {text: "kuat", color: "text-green-500"};
        }
    }

    const passwordStrength = getpasswordstrength(formdata.password);
    const strengthLevel =
        passwordStrength.text === "lemah" ? 1 : passwordStrength.text === "sedang" ? 2 : passwordStrength.text === "kuat" ? 3 : 0;
    const strengthBarColor =
        passwordStrength.text === "lemah"
            ? "bg-red-500"
            : passwordStrength.text === "sedang"
              ? "bg-yellow-500"
              : passwordStrength.text === "kuat"
                ? "bg-green-500"
                : "bg-white/10";

    const isformvalid = formdata.name && formdata.email && formdata.password && formdata.confirmPassword && acceptedterms;

    const inputClass =
        "h-11! w-full rounded-xl! border border-white/10! bg-white/[0.04]! pl-10! pr-10! text-sm! text-white! placeholder:text-white/30! focus-visible:border-indigo-400/60! focus-visible:ring-3! focus-visible:ring-indigo-400/20!";

    return (
        <div className="register-page relative flex min-h-screen w-full overflow-hidden bg-[#09090b] text-white">
            {/* Left decorations */}
            <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-indigo-600/30 blur-3xl" />
                    <div className="absolute top-1/2 -right-24 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-blue-600/25 blur-3xl" />
                    <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
                    <div
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
                </div>
            <div className="relative hidden w-1/2 overflow-hidden lg:block">
                

                <div className="relative z-10 flex h-full flex-col justify-center px-12 py-12 xl:px-16">
                    <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-xl shadow-indigo-500/40">
                        <GraduationCap className="size-7 text-white" />
                    </div>
                    <h1 className="text-4xl leading-tight font-bold tracking-tight">
                        Riffat Manajemen{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                            Siswa
                        </span>
                    </h1>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-white/60">
                        Kelola data siswa, kelas, dan nilai dalam satu platform yang modern dan mudah digunakan.
                    </p>
                    <ul className="mt-10 space-y-4">
                        <li className="flex items-center gap-3 text-white/75">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                                <ClipboardList className="size-4 text-indigo-300" />
                            </span>
                            Kelola data siswa dan kelas secara terpusat
                        </li>
                        <li className="flex items-center gap-3 text-white/75">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                                <BarChart3 className="size-4 text-indigo-300" />
                            </span>
                            Pantau progres dan laporan nilai otomatis
                        </li>
                        <li className="flex items-center gap-3 text-white/75">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                                <ShieldCheck className="size-4 text-indigo-300" />
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
                    className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                    <ArrowLeft className="size-4" />
                    Kembali ke halaman login
                </button>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg shadow-indigo-500/40">
                            <User className="size-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
                        <p className="mt-1.5 text-sm text-white/50">Join us today — it only takes a minute.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
                                Name
                            </label>
                            <div className="relative">
                                <User className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/40" />
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
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
                            {formdata.password && (
                                <div className="mt-2">
                                    <div className="flex gap-1.5">
                                        {[0, 1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className={`h-1 flex-1 rounded-full transition-colors ${
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
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/40" />
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showconfirmPassword ? "text" : "password"}
                                    placeholder="Re-enter your password"
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
                                className={`mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                                    acceptedterms
                                        ? "border-indigo-400 bg-indigo-500"
                                        : "border-white/20 bg-white/5 hover:border-white/40"
                                }`}
                            >
                                {acceptedterms && <Check className="size-3.5 text-white" strokeWidth={3} />}
                            </button>
                            <p
                                onClick={() => setAcceptedTerms(!acceptedterms)}
                                className="cursor-pointer text-sm leading-relaxed text-white/60 select-none"
                            >
                                I accept the{" "}
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="font-medium text-indigo-400 hover:underline"
                                >
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="font-medium text-indigo-400 hover:underline"
                                >
                                    Privacy Policy
                                </a>
                            </p>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            size="lg"
                            disabled={!isformvalid}
                            className="h-11! w-full rounded-xl! bg-gradient-to-r from-indigo-500 to-blue-600 text-sm! font-semibold! text-white! shadow-lg shadow-indigo-500/30 transition-all hover:from-indigo-400 hover:to-blue-500 hover:shadow-indigo-500/50 disabled:from-zinc-600 disabled:to-zinc-600 disabled:text-white/50 disabled:shadow-none"
                        >
                            Create Account
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-white/50">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={() => router.push("/auth/login")}
                            className="font-medium text-indigo-400 transition-colors hover:underline"
                        >
                            Sign in
                        </button>
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}