import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartPage() {
    const navigate = useNavigate()
    const { cartItems, removeFromCart, cartCount, subtotal, tax, total } = useCart()

    const handleLogout = () => navigate('/login')

    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 >= 0.5

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="material-symbols-outlined text-sm fill-1">star</span>)
        }
        if (hasHalfStar) {
            stars.push(<span key="half" className="material-symbols-outlined text-sm fill-1">star_half</span>)
        }
        return stars
    }

    return (
        <div className="font-display bg-white dark:bg-[#120a0a] text-[#181111] dark:text-white antialiased flex h-screen overflow-hidden">
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
                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-gray-500">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <Link className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium" to="/browse-courses">
                            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                            Continue Shopping
                        </Link>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <Link to="/cart" className="relative text-primary hover:text-primary transition-colors flex items-center justify-center">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white border-2 border-white dark:border-[#211112]">{cartCount}</span>
                            )}
                        </Link>
                        <button className="relative text-gray-500 hover:text-[#181111] dark:hover:text-white transition-colors flex items-center justify-center">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary border-2 border-white dark:border-[#211112]"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-[20px] border-l border-[#e5dcdc] dark:border-gray-800">
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
                <main className="flex-1 overflow-y-auto">
                    <div className="max-w-[1200px] mx-auto p-8">
                        <h1 className="text-3xl font-extrabold tracking-tight text-[#181111] dark:text-white mb-8">Your Cart</h1>

                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Cart Items */}
                            <div className="flex-1 space-y-5">
                                {cartItems.length > 0 ? (
                                    cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-6 p-5 border border-[#e5dcdc] dark:border-gray-800 rounded-2xl bg-white dark:bg-[#211112] transition-colors hover:border-gray-300 dark:hover:border-gray-700">
                                            <div className="w-48 h-28 rounded-xl overflow-hidden shrink-0 bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-5xl text-gray-300 dark:text-gray-600">{item.icon}</span>
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div className="space-y-1">
                                                    <Link to={`/course/${item.id}`} className="hover:text-primary transition-colors">
                                                        <h3 className="font-bold text-lg text-[#181111] dark:text-white line-clamp-1">{item.title}</h3>
                                                    </Link>
                                                    <p className="text-sm text-gray-500">By {item.instructor}</p>
                                                    <div className="flex items-center gap-1.5 pt-1">
                                                        <span className="text-sm font-bold text-amber-500">{item.rating}</span>
                                                        <div className="flex text-amber-500">
                                                            {renderStars(item.rating)}
                                                        </div>
                                                        <span className="text-xs text-gray-400">({item.reviews.toLocaleString()} ratings)</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between mt-4">
                                                    <button onClick={() => removeFromCart(item.id)} className="text-sm font-medium text-gray-400 hover:text-primary flex items-center gap-1 transition-colors">
                                                        <span className="material-symbols-outlined text-lg">delete</span>
                                                        Remove
                                                    </button>
                                                    <p className="text-xl font-black text-[#181111] dark:text-white">${item.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-16">
                                        <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block">shopping_cart</span>
                                        <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400">Your cart is empty</h3>
                                        <p className="text-gray-400 mt-2">Browse our courses and add something!</p>
                                        <Link to="/browse-courses" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
                                            Browse Courses
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Order Summary */}
                            {cartItems.length > 0 && (
                                <div className="w-full lg:w-[380px] shrink-0">
                                    <div className="sticky top-8 space-y-5">
                                        <div className="bg-white dark:bg-[#211112] rounded-[24px] border border-[#e5dcdc] dark:border-gray-800 p-8 flex flex-col gap-6">
                                            <h2 className="text-xl font-bold text-[#181111] dark:text-white">Order Summary</h2>

                                            <div className="space-y-4">
                                                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                                    <span>Subtotal ({cartCount} {cartCount === 1 ? 'course' : 'courses'})</span>
                                                    <span className="font-medium text-[#181111] dark:text-white">${subtotal.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                                    <span>Estimated Tax</span>
                                                    <span className="font-medium text-[#181111] dark:text-white">${tax.toFixed(2)}</span>
                                                </div>
                                                <div className="pt-4 border-t border-[#e5dcdc] dark:border-gray-800 flex justify-between items-baseline">
                                                    <span className="font-bold text-[#181111] dark:text-white">Total</span>
                                                    <span className="text-3xl font-black text-[#181111] dark:text-white">${total.toFixed(2)}</span>
                                                </div>
                                            </div>

                                            <Link to="/enroll/checkout" className="w-full h-14 rounded-[1000px] bg-primary text-white font-bold text-base hover:bg-primary/90 transition-colors flex items-center justify-center">
                                                Checkout
                                            </Link>
                                        </div>

                                        <div className="flex items-center justify-center gap-3 py-4 text-gray-400">
                                            <span className="material-symbols-outlined text-lg">verified_user</span>
                                            <span className="text-xs font-medium uppercase tracking-widest">Secure Checkout</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
