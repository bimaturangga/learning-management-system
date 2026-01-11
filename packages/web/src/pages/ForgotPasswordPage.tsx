import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Password reset requested for:', email)
    }

    return (
        <div className="font-display bg-gray-50 dark:bg-[#120a0a] text-[#181111] dark:text-white antialiased">
            <div className="flex min-h-screen w-full items-center justify-center p-4">
                <div className="relative w-full max-w-lg rounded-[20px] overflow-hidden bg-white dark:bg-[#211112]">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Background texture"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs3nUBQdQuNG0yEgzwJiyP08CnKO8oWpWc-jQUhBvoYnLOeCpLsaTuFB83-M7r6xWYStqTZ8buDYGIn7ZtAsSFkzp4qJ3uJ09O5oLX211AgKBj4_HTDsPE3PDywXxsHYnw9XNVMvxDIvjn6T6JN0c-mZhAdgOPyM9Nbwvcac7VTBs578ZZ7eDsVqsM0EHNCXHicoQ8o1uC17uB791ufUV9pd9QM-ic7KS33A8x8KLf90HU9RoTE57RECLTlYGrc2URMPhtcJNGCLA"
                        />
                        <div className="absolute inset-0 bg-white/95 dark:bg-[#211112]/95 backdrop-blur-sm"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full px-6 py-12 md:px-10 md:py-14">
                        <div className="mx-auto w-full max-w-md">
                            {/* Header */}
                            <div className="mb-10 text-center">
                                <div className="flex items-center justify-center gap-2 mb-8">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                                        <span className="material-symbols-outlined">school</span>
                                    </div>
                                    <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        EduLearn
                                    </span>
                                </div>
                                <h1 className="text-4xl font-bold tracking-tight text-[#181111] dark:text-white mb-3 text-center">
                                    Forgot Password?
                                </h1>
                                <p className="text-gray-500 dark:text-gray-400 text-base text-center">
                                    Enter your email address and we'll send you a link to reset your password.
                                </p>
                            </div>

                            {/* Form */}
                            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none text-[#181111] dark:text-gray-200 ml-1"
                                        htmlFor="email"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        className="flex h-12 w-full rounded-[1000px] border border-[#e5dcdc] dark:border-gray-700 bg-white dark:bg-white/5 px-6 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 text-[#181111] dark:text-white transition-colors"
                                        id="email"
                                        placeholder="name@example.com"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <button
                                    className="inline-flex items-center justify-center rounded-[1000px] text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-12 w-full mt-2"
                                    type="submit"
                                >
                                    Send Reset Link
                                </button>

                                <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                                    Remember your password?
                                    <Link
                                        className="font-semibold text-primary hover:text-primary/80 hover:underline underline-offset-4 ml-1"
                                        to="/login"
                                    >
                                        Log In
                                    </Link>
                                </div>
                            </form>

                            {/* Footer */}
                            <div className="mt-12 text-center">
                                <p className="text-xs text-gray-400">
                                    © 2024 EduLearn Inc. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
