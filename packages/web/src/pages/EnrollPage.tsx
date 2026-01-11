import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// Simple course data for display
const coursesData: Record<string, { title: string; instructor: string; icon: string; price: number }> = {
    '1': { title: 'Complete React Developer in 2024', instructor: 'Andrei Neagoie', icon: 'code_blocks', price: 84.99 },
    '2': { title: 'UI/UX Design Masterclass: Figma to Webflow', instructor: 'Sarah Jenkins', icon: 'brush', price: 69.00 },
    '3': { title: 'Python for Financial Analysis', instructor: 'Jose Portilla', icon: 'database', price: 99.99 },
    '4': { title: 'Digital Marketing Strategy', instructor: 'Anton Voroni', icon: 'campaign', price: 0 },
    '5': { title: 'Flutter & Dart - The Complete Guide', instructor: 'Maximilian Schwarzmüller', icon: 'smartphone', price: 74.99 },
    '6': { title: 'Startup Masterclass: How to Raise Capital', instructor: 'Brad Feld', icon: 'rocket_launch', price: 49.00 },
    '7': { title: 'AWS Certified Solutions Architect', instructor: 'Stephane Maarek', icon: 'cloud', price: 129.99 },
    '8': { title: 'Mastering Communication & Leadership', instructor: 'Vanessa Van Edwards', icon: 'psychology', price: 0 },
}

export default function EnrollPage() {
    const { courseId } = useParams<{ courseId: string }>()
    const navigate = useNavigate()
    const { cartItems, cartCount, subtotal, tax } = useCart()

    // 24-hour countdown timer (in seconds)
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds
    const [isExpired, setIsExpired] = useState(false)

    // File upload state
    const [uploadedFile, setUploadedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setUploadedFile(file)
            if (file.type.startsWith('image/')) {
                const url = URL.createObjectURL(file)
                setPreviewUrl(url)
            } else {
                setPreviewUrl(null)
            }
        }
    }

    const handleRemoveFile = () => {
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl)
        }
        setUploadedFile(null)
        setPreviewUrl(null)
    }

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + ' B'
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
    }

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsExpired(true)
            return
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsExpired(true)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft])

    // Format time as HH:MM:SS
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const isCheckout = courseId === 'checkout'
    const course = !isCheckout ? coursesData[courseId || '1'] : null

    const handleLogout = () => navigate('/login')

    // For single course enrollment
    const singleCoursePrice = course?.price || 0
    const singlePlatformFee = 2.00
    const singleDiscount = singleCoursePrice * 0.10
    const singleTotal = singleCoursePrice + singlePlatformFee - singleDiscount

    // For checkout (cart items)
    const checkoutPlatformFee = cartCount * 2.00
    const checkoutDiscount = subtotal * 0.10
    const checkoutTotal = subtotal + checkoutPlatformFee - checkoutDiscount + tax

    // If expired, show expired state
    if (isExpired) {
        return (
            <div className="font-display bg-gray-50 dark:bg-[#120a0a] text-[#181111] dark:text-white antialiased flex h-screen items-center justify-center">
                <div className="text-center max-w-md p-8">
                    <div className="h-20 w-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-4xl text-red-500">timer_off</span>
                    </div>
                    <h1 className="text-2xl font-bold text-[#181111] dark:text-white mb-3">Payment Time Expired</h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                        Your payment session has expired after 24 hours. Please start a new checkout process to continue.
                    </p>
                    <Link to="/browse-courses" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Back to Courses
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="font-display bg-gray-50 dark:bg-[#120a0a] text-[#181111] dark:text-white antialiased flex h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="w-72 bg-white dark:bg-[#211112] border-r border-[#e5dcdc] dark:border-gray-800 hidden md:flex flex-col z-20">
                <div className="h-20 flex items-center px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">EduLearn</span>
                    </div>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    <Link className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#181111] dark:hover:text-white rounded-[1000px] transition-colors" to="/dashboard">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="font-medium text-sm">Dashboard</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#181111] dark:hover:text-white rounded-[1000px] transition-colors" to="/browse-courses">
                        <span className="material-symbols-outlined">menu_book</span>
                        <span className="font-medium text-sm">My Courses</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#181111] dark:hover:text-white rounded-[1000px] transition-colors" to="#">
                        <span className="material-symbols-outlined">assignment</span>
                        <span className="font-medium text-sm">Assignments</span>
                    </Link>
                </nav>
                <div className="p-4 border-t border-[#e5dcdc] dark:border-gray-800">
                    <Link className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:text-[#181111] dark:hover:text-white rounded-[1000px] transition-colors" to="#">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="font-medium text-sm">Settings</span>
                    </Link>
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:text-primary rounded-[1000px] transition-colors mt-1">
                        <span className="material-symbols-outlined">logout</span>
                        <span className="font-medium text-sm">Log Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Header */}
                <header className="h-20 bg-white dark:bg-[#211112] border-b border-[#e5dcdc] dark:border-gray-800 flex items-center justify-between px-8 shrink-0">
                    <button className="md:hidden text-gray-500">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <div className="hidden md:flex relative w-96">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">search</span>
                        <input className="flex h-12 w-full rounded-[1000px] border border-[#e5dcdc] dark:border-gray-700 bg-gray-50 dark:bg-white/5 pl-12 pr-6 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[#181111] dark:text-white transition-colors" placeholder="Search across platform..." type="text" />
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <Link to="/cart" className="relative text-gray-500 hover:text-[#181111] dark:hover:text-white transition-colors flex items-center">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white border-2 border-white dark:border-[#211112]">{cartCount}</span>
                            )}
                        </Link>
                        <button className="relative text-gray-500 hover:text-[#181111] dark:hover:text-white transition-colors flex items-center">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary border-2 border-white dark:border-[#211112]"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-[#e5dcdc] dark:border-gray-800">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-[#181111] dark:text-white leading-none">Alex Morgan</p>
                                <p className="text-xs text-gray-500 mt-1">Computer Science</p>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-[#e5dcdc] dark:border-gray-600">
                                <div className="h-full w-full flex items-center justify-center bg-primary/10 text-primary font-bold">AM</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main */}
                <main className="flex-1 overflow-y-auto p-5 md:p-8">
                    <div className="max-w-4xl mx-auto flex flex-col gap-6">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Link className="hover:text-primary transition-colors" to="/browse-courses">Browse Courses</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-[#181111] dark:text-white font-medium">Payment</span>
                        </div>

                        {/* Header */}
                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-bold tracking-tight text-[#181111] dark:text-white">
                                {isCheckout ? `Checkout (${cartCount} ${cartCount === 1 ? 'course' : 'courses'})` : `Enroll in ${course?.title}`}
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400">Complete the payment process to secure your spot.</p>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Column */}
                            <div className="lg:col-span-2 flex flex-col gap-6">
                                {/* Bank Transfer Instructions */}
                                <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-3 pb-4 border-b border-[#e5dcdc] dark:border-gray-800">
                                        <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                                            <span className="material-symbols-outlined">account_balance</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#181111] dark:text-white">Bank Transfer Instructions</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Please transfer the exact amount to the account below.</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-[#e5dcdc] dark:border-gray-800">
                                                <span className="text-xs text-gray-500 block mb-1">Bank Name</span>
                                                <span className="font-medium text-[#181111] dark:text-white">Global City Bank</span>
                                            </div>
                                            <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-[#e5dcdc] dark:border-gray-800">
                                                <span className="text-xs text-gray-500 block mb-1">Account Number</span>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-[#181111] dark:text-white font-mono">1234 5678 9012</span>
                                                    <button className="text-gray-400 hover:text-primary transition-colors">
                                                        <span className="material-symbols-outlined text-sm">content_copy</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-[#e5dcdc] dark:border-gray-800">
                                                <span className="text-xs text-gray-500 block mb-1">Account Holder</span>
                                                <span className="font-medium text-[#181111] dark:text-white">EduLearn Inc.</span>
                                            </div>
                                            <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-[#e5dcdc] dark:border-gray-800">
                                                <span className="text-xs text-gray-500 block mb-1">Transfer Reference</span>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-[#181111] dark:text-white font-mono">INV-2405-XA</span>
                                                    <button className="text-gray-400 hover:text-primary transition-colors">
                                                        <span className="material-symbols-outlined text-sm">content_copy</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Important with Countdown */}
                                        <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 flex flex-col gap-3">
                                            <div className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-primary text-xl mt-0.5">timer</span>
                                                <div className="flex-1">
                                                    <span className="font-bold text-primary block mb-1">Important - Payment Deadline</span>
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                                        Complete your payment within the time limit below. After the countdown expires, this payment session will be void.
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center gap-2 py-3 bg-white dark:bg-[#211112] rounded-lg border border-primary/20">
                                                <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                                                <span className="text-2xl font-mono font-bold text-primary tracking-wider">{formatTime(timeLeft)}</span>
                                                <span className="text-sm text-gray-500 ml-2">remaining</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Upload Payment Proof */}
                                <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-3 pb-4 border-b border-[#e5dcdc] dark:border-gray-800">
                                        <div className="h-10 w-10 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
                                            <span className="material-symbols-outlined">upload_file</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#181111] dark:text-white">Upload Payment Proof</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Upload a screenshot or photo of your transaction receipt.</p>
                                        </div>
                                    </div>

                                    {!uploadedFile ? (
                                        // Upload dropzone
                                        <div className="border-2 border-dashed border-[#e5dcdc] dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-[20px] p-8 flex flex-col items-center justify-center text-center transition-colors bg-gray-50 dark:bg-white/5 cursor-pointer group h-64 relative">
                                            <input accept="image/*,.pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file" onChange={handleFileChange} />
                                            <div className="h-16 w-16 bg-white dark:bg-[#211112] rounded-full border border-[#e5dcdc] dark:border-gray-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-primary">cloud_upload</span>
                                            </div>
                                            <p className="font-medium text-[#181111] dark:text-white mb-1">Click to upload or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or PDF (max. 3MB)</p>
                                        </div>
                                    ) : (
                                        // File preview
                                        <div className="border border-[#e5dcdc] dark:border-gray-700 rounded-[20px] p-4 bg-gray-50 dark:bg-white/5">
                                            <div className="flex gap-4">
                                                {/* Preview */}
                                                <div className="w-32 h-32 rounded-xl overflow-hidden bg-white dark:bg-[#211112] border border-[#e5dcdc] dark:border-gray-700 flex items-center justify-center shrink-0">
                                                    {previewUrl ? (
                                                        <img src={previewUrl} alt="Payment proof preview" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="material-symbols-outlined text-4xl text-red-500">picture_as_pdf</span>
                                                    )}
                                                </div>
                                                {/* File info */}
                                                <div className="flex-1 flex flex-col justify-between py-1">
                                                    <div>
                                                        <p className="font-medium text-[#181111] dark:text-white line-clamp-2 mb-1">{uploadedFile.name}</p>
                                                        <p className="text-sm text-gray-500">{formatFileSize(uploadedFile.size)}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="flex items-center gap-1 text-sm text-green-600">
                                                            <span className="material-symbols-outlined text-lg">check_circle</span>
                                                            Ready to submit
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* Remove button */}
                                                <button onClick={handleRemoveFile} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 transition-colors self-start">
                                                    <span className="material-symbols-outlined text-lg">close</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="pt-2">
                                        <button onClick={() => uploadedFile && navigate('/payment-confirmation')} disabled={!uploadedFile} className={`w-full h-12 rounded-[1000px] font-bold transition-colors flex items-center justify-center gap-2 ${uploadedFile ? 'bg-primary text-white hover:bg-primary/90' : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'}`}>
                                            <span>Submit Payment Proof</span>
                                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-6 flex flex-col gap-5 sticky top-6">
                                    <h3 className="font-bold text-[#181111] dark:text-white text-lg">Order Summary</h3>

                                    {/* Course(s) Display */}
                                    <div className="flex flex-col gap-4">
                                        {isCheckout ? (
                                            // Checkout: show cart items
                                            cartItems.map((item) => (
                                                <div key={item.id} className="flex gap-3">
                                                    <div className="w-16 h-12 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center text-gray-300 dark:text-gray-600 shrink-0">
                                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-sm text-[#181111] dark:text-white leading-tight line-clamp-1">{item.title}</h4>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">by {item.instructor}</p>
                                                        <p className="text-sm font-bold text-[#181111] dark:text-white mt-1">${item.price.toFixed(2)}</p>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            // Single course enrollment
                                            <>
                                                <div className="aspect-video w-full bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-gray-300 dark:text-gray-600">
                                                    <span className="material-symbols-outlined text-5xl">{course?.icon}</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-[#181111] dark:text-white leading-tight mb-1">{course?.title}</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">by <span className="text-[#181111] dark:text-white font-medium">{course?.instructor}</span></p>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="border-t border-[#e5dcdc] dark:border-gray-800 my-1"></div>

                                    {/* Price Breakdown */}
                                    <div className="flex flex-col gap-2 text-sm">
                                        {isCheckout ? (
                                            <>
                                                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                                                    <span>Subtotal ({cartCount} {cartCount === 1 ? 'course' : 'courses'})</span>
                                                    <span className="font-medium text-[#181111] dark:text-white">${subtotal.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                                                    <span>Platform Fee</span>
                                                    <span className="font-medium text-[#181111] dark:text-white">${checkoutPlatformFee.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                                                    <span>Tax</span>
                                                    <span className="font-medium text-[#181111] dark:text-white">${tax.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between text-green-600 font-medium">
                                                    <span>Discount (10%)</span>
                                                    <span>-${checkoutDiscount.toFixed(2)}</span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                                                    <span>Course Price</span>
                                                    <span className="font-medium text-[#181111] dark:text-white">${singleCoursePrice.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                                                    <span>Platform Fee</span>
                                                    <span className="font-medium text-[#181111] dark:text-white">${singlePlatformFee.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between text-green-600 font-medium">
                                                    <span>Discount (10%)</span>
                                                    <span>-${singleDiscount.toFixed(2)}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="border-t border-[#e5dcdc] dark:border-gray-800 my-1"></div>

                                    <div className="flex justify-between items-end">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Amount</span>
                                        <span className="text-2xl font-bold text-[#181111] dark:text-white">
                                            ${isCheckout ? checkoutTotal.toFixed(2) : singleTotal.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl text-xs text-gray-500 dark:text-gray-400 leading-relaxed border border-[#e5dcdc] dark:border-gray-800">
                                        By proceeding with the payment, you agree to our <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

