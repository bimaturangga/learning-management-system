import { Link } from 'react-router-dom'

export default function PaymentConfirmationPage() {
    return (
        <div className="font-display bg-gray-50 dark:bg-[#120a0a] text-[#181111] dark:text-white antialiased min-h-screen flex items-center justify-center p-6">
            <div className="max-w-lg w-full">
                {/* Success Card */}
                <div className="bg-white dark:bg-[#211112] rounded-[24px] border border-[#e5dcdc] dark:border-gray-800 p-8 text-center">
                    {/* Success Icon */}
                    <div className="h-24 w-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-5xl text-green-500">check_circle</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-[#181111] dark:text-white mb-3">
                        Payment Proof Submitted!
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                        Your payment proof has been successfully submitted. Our team will verify your payment within <strong className="text-[#181111] dark:text-white">1-2 business hours</strong>.
                    </p>

                    {/* Order Status */}
                    <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 mb-6 border border-[#e5dcdc] dark:border-gray-800">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-500">Order Status</span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-600 text-xs font-bold">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                Pending Verification
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">Reference ID</span>
                            <span className="font-mono font-medium text-[#181111] dark:text-white">INV-2405-XA</span>
                        </div>
                    </div>

                    {/* What's Next */}
                    <div className="text-left mb-6">
                        <h3 className="font-bold text-[#181111] dark:text-white mb-3">What happens next?</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-xs font-bold">1</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Our team will review your payment proof
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-xs font-bold">2</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    You'll receive an email confirmation once verified
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-xs font-bold">3</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Course access will be granted to your account
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Notification Preference */}
                    <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 mb-6 border border-blue-100 dark:border-blue-900/20 flex items-start gap-3 text-left">
                        <span className="material-symbols-outlined text-blue-500 text-xl mt-0.5">mail</span>
                        <div>
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-1">Check your email</p>
                            <p className="text-xs text-blue-600 dark:text-blue-300">
                                We've sent a confirmation to your email with the order details.
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                        <Link to="/dashboard" className="w-full h-12 rounded-[1000px] bg-primary text-white font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-lg">dashboard</span>
                            Go to Dashboard
                        </Link>
                        <Link to="/browse-courses" className="w-full h-12 rounded-[1000px] border border-[#e5dcdc] dark:border-gray-700 text-[#181111] dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-lg">school</span>
                            Browse More Courses
                        </Link>
                    </div>
                </div>

                {/* Support Link */}
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500">
                        Need help? <a href="#" className="text-primary hover:underline font-medium">Contact Support</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
