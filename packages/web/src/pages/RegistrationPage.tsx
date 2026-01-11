import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RegistrationPage() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Registration attempt:', { fullName, email, password, confirmPassword })
    }

    return (
        <div className="bg-[#f8f6f6] dark:bg-background-dark text-[#181111] dark:text-white h-screen w-screen overflow-hidden flex flex-col font-display">
            <div className="flex flex-1 h-full w-full p-5 gap-5">
                {/* Left Panel - Registration Form */}
                <div className="relative flex flex-col w-full lg:w-1/2 h-full rounded-[20px] overflow-hidden group/form-section">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8kTDN5Kq12zlD-FUZ_6l_FY6EKhkMI8Bbcdl3CnlVCpXXcfgS_CJ5URYYVSSNDvM-yYXcAiME4X6zgjttNTjIy0qP2KX5foNGT51R-o89UcCbCn90e0TmCYNIhdabo4WMaAIGATOeQOdam6v3TBbcwuXPRVDNgdumvSK-8rGkZG4MZvjgNxak1DUbbCWYBo6PQ4AH6VJ6ADJYb7mwoF9hjWkpXvbO0tVTh9rH2YOX9637KhaiA8HzPd--ttWwERKCLd7tJdhacNI')`
                        }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-sm z-0" />

                    {/* Form Content */}
                    <div className="relative z-10 flex flex-col h-full w-full max-w-[520px] mx-auto px-6 py-8 overflow-y-auto no-scrollbar">
                        <div className="flex-1" />

                        {/* Header */}
                        <div className="flex flex-col items-center text-center gap-3 mb-10">
                            <h1 className="text-[#181111] dark:text-white text-[32px] font-bold leading-tight tracking-tight">
                                Create Your Account
                            </h1>
                            <p className="text-[#6b7280] dark:text-[#9ca3af] text-[15px] font-normal max-w-[320px] leading-relaxed">
                                Start your learning journey today
                            </p>
                        </div>

                        {/* Form */}
                        <form
                            className="flex flex-col gap-5 w-full max-w-[400px] mx-auto"
                            onSubmit={handleSubmit}
                        >
                            {/* Full Name Field */}
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-xs font-bold text-[#181111] dark:text-white ml-1 mb-1">
                                    Full Name
                                </label>
                                <input
                                    className="form-input flex w-full h-12 px-4 bg-white dark:bg-[#2a2a2a] text-[#181111] dark:text-white placeholder:text-[#9ca3af] dark:placeholder:text-[#665] text-sm font-normal border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-xl transition-all outline-none"
                                    placeholder="John Doe"
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-xs font-bold text-[#181111] dark:text-white ml-1 mb-1">
                                    Email Address
                                </label>
                                <input
                                    className="form-input flex w-full h-12 px-4 bg-white dark:bg-[#2a2a2a] text-[#181111] dark:text-white placeholder:text-[#9ca3af] dark:placeholder:text-[#665] text-sm font-normal border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-xl transition-all outline-none"
                                    placeholder="name@example.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col gap-1 w-full relative">
                                <label className="text-xs font-bold text-[#181111] dark:text-white ml-1 mb-1">
                                    Password
                                </label>
                                <div className="flex w-full items-center bg-white dark:bg-[#2a2a2a] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                                    <input
                                        className="form-input flex-1 h-12 pl-4 pr-2 bg-transparent text-[#181111] dark:text-white placeholder:text-[#9ca3af] dark:placeholder:text-[#665] text-sm font-normal border-none focus:ring-0 focus:border-none outline-none"
                                        placeholder="Enter your password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        className="flex items-center justify-center h-12 pr-4 pl-2 text-[#9ca3af] hover:text-primary transition-colors cursor-pointer outline-none"
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div className="flex flex-col gap-1 w-full relative">
                                <label className="text-xs font-bold text-[#181111] dark:text-white ml-1 mb-1">
                                    Confirm Password
                                </label>
                                <div className="flex w-full items-center bg-white dark:bg-[#2a2a2a] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                                    <input
                                        className="form-input flex-1 h-12 pl-4 pr-2 bg-transparent text-[#181111] dark:text-white placeholder:text-[#9ca3af] dark:placeholder:text-[#665] text-sm font-normal border-none focus:ring-0 focus:border-none outline-none"
                                        placeholder="Confirm your password"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <button
                                        className="flex items-center justify-center h-12 pr-4 pl-2 text-[#9ca3af] hover:text-primary transition-colors cursor-pointer outline-none"
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                                            {showConfirmPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                className="mt-4 flex w-full items-center justify-center h-12 rounded-full bg-primary hover:bg-red-700 text-white text-sm font-semibold tracking-normal transition-colors cursor-pointer border-none outline-none shadow-none"
                                type="submit"
                            >
                                Register
                            </button>
                        </form>

                        {/* Login Link */}
                        <div className="mt-8 text-center">
                            <p className="text-[#6b7280] dark:text-[#a08080] text-sm font-medium">
                                Already have an account?
                                <Link
                                    className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>

                        <div className="flex-1" />

                        {/* Footer */}
                        <div className="mt-8 text-center pb-2">
                            <p className="text-[10px] text-[#9ca3af] dark:text-[#a08080]/60">
                                © 2024 Learning Platform. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Illustration */}
                <div className="hidden lg:flex flex-col justify-end w-1/2 h-full rounded-[20px] overflow-hidden relative group/image-section">
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvTezOw6JYHSOuicFMZXeUm69TICp9Q1yFwxI1FPHAzUimNU0M2aYM_wOtY3r_6EqHIODLxBcZKZrB1KUHqzDjAzQUQauJniF9r0lZlk0XG2rYz1OXN5-XQLzRsW2iJAbsAnJHLjZbBqkt9yy56WVnmjCS-qbBEAKGDVJG2KGK11jwyB8_TBBS188gp0UKgw-Ox7zk4QJ5Z7_IglysYzHkklQw3TxItMylugLgoVOBqyrP5qTFuMWlPqqLdBQTx9xd1Q6KFKsPxrg')`
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
