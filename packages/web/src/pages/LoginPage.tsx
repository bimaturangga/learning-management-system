import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Login attempt:', { email, password, rememberMe })
        // Navigate to dashboard
        navigate('/dashboard')
    }

    return (
        <div className="font-display bg-gray-50 dark:bg-[#120a0a] text-[#181111] dark:text-white antialiased min-h-screen">
            <div className="flex min-h-screen w-full flex-row overflow-hidden p-5 gap-5">
                {/* Left Panel - Login Form */}
                <div className="flex w-full flex-col justify-center relative px-6 py-12 lg:w-1/2 lg:px-24 xl:px-32 z-10 rounded-[20px] overflow-hidden shadow-sm">
                    {/* Background with overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Background texture"
                            className="h-full w-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs3nUBQdQuNG0yEgzwJiyP08CnKO8oWpWc-jQUhBvoYnLOeCpLsaTuFB83-M7r6xWYStqTZ8buDYGIn7ZtAsSFkzp4qJ3uJ09O5oLX211AgKBj4_HTDsPE3PDywXxsHYnw9XNVMvxDIvjn6T6JN0c-mZhAdgOPyM9Nbwvcac7VTBs578ZZ7eDsVqsM0EHNCXHicoQ8o1uC17uB791ufUV9pd9QM-ic7KS33A8x8KLf90HU9RoTE57RECLTlYGrc2URMPhtcJNGCLA"
                        />
                        <div className="absolute inset-0 bg-white/95 dark:bg-[#211112]/95 backdrop-blur-sm"></div>
                    </div>

                    {/* Form Content */}
                    <div className="w-full max-w-md mx-auto relative z-10">
                        {/* Logo and Header */}
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
                                Welcome Back!
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base text-center">
                                Please enter your details to access your dashboard.
                            </p>
                        </div>

                        {/* Login Form */}
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            {/* Email Field */}
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none text-[#181111] dark:text-gray-200"
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

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none text-[#181111] dark:text-gray-200"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        className="flex h-12 w-full rounded-[1000px] border border-[#e5dcdc] dark:border-gray-700 bg-white dark:bg-white/5 px-6 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 pr-12 text-[#181111] dark:text-white transition-colors"
                                        id="password"
                                        placeholder="Enter your password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        className="absolute right-2 top-1/2 -translate-y-1/2 px-3 flex items-center justify-center hover:bg-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full"
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <input
                                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20 dark:border-gray-600 dark:bg-white/5 dark:ring-offset-gray-900"
                                        id="remember"
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <label
                                        className="text-sm font-medium leading-none text-gray-600 dark:text-gray-400 select-none cursor-pointer"
                                        htmlFor="remember"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    className="text-sm font-medium text-primary hover:text-primary/80 hover:underline underline-offset-4"
                                    to="/forgot-password"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                className="inline-flex items-center justify-center rounded-[1000px] text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-12 w-full mt-2"
                                type="submit"
                            >
                                Log In
                            </button>

                            {/* Register Link */}
                            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                                Don't have an account?
                                <Link
                                    className="font-semibold text-primary hover:text-primary/80 hover:underline underline-offset-4 ml-1"
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="absolute bottom-6 left-0 w-full text-center z-10">
                        <p className="text-xs text-gray-400">
                            © 2024 EduLearn Inc. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Right Panel - Illustration */}
                <div className="hidden lg:flex lg:w-1/2 relative bg-white dark:bg-gray-900 rounded-[20px] overflow-hidden">
                    <div className="relative w-full h-full overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img
                                alt="Group of diverse students studying together in a modern library"
                                className="h-full w-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs3nUBQdQuNG0yEgzwJiyP08CnKO8oWpWc-jQUhBvoYnLOeCpLsaTuFB83-M7r6xWYStqTZ8buDYGIn7ZtAsSFkzp4qJ3uJ09O5oLX211AgKBj4_HTDsPE3PDywXxsHYnw9XNVMvxDIvjn6T6JN0c-mZhAdgOPyM9Nbwvcac7VTBs578ZZ7eDsVqsM0EHNCXHicoQ8o1uC17uB791ufUV9pd9QM-ic7KS33A8x8KLf90HU9RoTE57RECLTlYGrc2URMPhtcJNGCLA"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
