import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// Mock orders data
const ordersData = [
    {
        id: 'INV-2405-XA',
        courseName: 'Complete React Developer in 2024',
        courseIcon: 'code_blocks',
        orderDate: 'Jan 11, 2026',
        amount: 84.99,
        status: 'pending',
    },
    {
        id: 'INV-2404-BK',
        courseName: 'UI/UX Design Masterclass',
        courseIcon: 'brush',
        orderDate: 'Jan 10, 2026',
        amount: 69.00,
        status: 'verified',
    },
    {
        id: 'INV-2403-CD',
        courseName: 'Python for Financial Analysis',
        courseIcon: 'database',
        orderDate: 'Jan 8, 2026',
        amount: 99.99,
        status: 'completed',
    },
    {
        id: 'INV-2402-EF',
        courseName: 'Flutter & Dart Complete Guide',
        courseIcon: 'smartphone',
        orderDate: 'Jan 5, 2026',
        amount: 74.99,
        status: 'rejected',
    },
]

const statusConfig: Record<string, { label: string; bgColor: string; textColor: string }> = {
    pending: { label: 'Pending', bgColor: 'bg-amber-100 dark:bg-amber-900/20', textColor: 'text-amber-600' },
    verified: { label: 'Verified', bgColor: 'bg-blue-100 dark:bg-blue-900/20', textColor: 'text-blue-600' },
    completed: { label: 'Completed', bgColor: 'bg-green-100 dark:bg-green-900/20', textColor: 'text-green-600' },
    rejected: { label: 'Rejected', bgColor: 'bg-red-100 dark:bg-red-900/20', textColor: 'text-red-600' },
}

export default function MyOrdersPage() {
    const navigate = useNavigate()
    const { cartCount } = useCart()

    const handleLogout = () => navigate('/login')

    // Stats
    const pendingCount = ordersData.filter(o => o.status === 'pending').length
    const completedCount = ordersData.filter(o => o.status === 'completed').length
    const totalOrders = ordersData.length

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
                    <Link className="flex items-center gap-3 px-4 py-3 text-primary bg-primary/5 dark:bg-primary/10 dark:text-primary rounded-[1000px] transition-colors" to="/my-orders">
                        <span className="material-symbols-outlined">receipt_long</span>
                        <span className="font-medium text-sm">My Orders</span>
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
                        <input className="flex h-12 w-full rounded-[1000px] border border-[#e5dcdc] dark:border-gray-700 bg-gray-50 dark:bg-white/5 pl-12 pr-6 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[#181111] dark:text-white transition-colors" placeholder="Search orders..." type="text" />
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
                    <div className="max-w-6xl mx-auto flex flex-col gap-6">
                        {/* Header */}
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-[#181111] dark:text-white mb-1">My Orders</h1>
                            <p className="text-gray-500 dark:text-gray-400">Track your course purchases and payment status.</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-5 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-amber-600">pending</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Pending Verification</p>
                                    <p className="text-2xl font-bold text-[#181111] dark:text-white">{pendingCount}</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-5 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-green-600">check_circle</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Completed</p>
                                    <p className="text-2xl font-bold text-[#181111] dark:text-white">{completedCount}</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-5 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-blue-600">receipt_long</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Total Orders</p>
                                    <p className="text-2xl font-bold text-[#181111] dark:text-white">{totalOrders}</p>
                                </div>
                            </div>
                        </div>

                        {/* Orders Table */}
                        <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 overflow-hidden">
                            <div className="p-5 border-b border-[#e5dcdc] dark:border-gray-800 flex items-center justify-between">
                                <h2 className="font-bold text-lg text-[#181111] dark:text-white">Recent Orders</h2>
                                <button className="flex items-center gap-2 px-4 py-2 border border-[#e5dcdc] dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="material-symbols-outlined text-sm">filter_list</span>
                                    Filter by Status
                                </button>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-[#e5dcdc] dark:border-gray-800">
                                            <th className="px-5 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                                            <th className="px-5 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Course Name</th>
                                            <th className="px-5 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Order Date</th>
                                            <th className="px-5 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                                            <th className="px-5 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-5 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ordersData.map((order) => (
                                            <tr key={order.id} className="border-b border-[#e5dcdc] dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                <td className="px-5 py-4">
                                                    <span className="font-mono font-medium text-[#181111] dark:text-white">{order.id}</span>
                                                </td>
                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-400 shrink-0">
                                                            <span className="material-symbols-outlined">{order.courseIcon}</span>
                                                        </div>
                                                        <span className="font-medium text-[#181111] dark:text-white line-clamp-1">{order.courseName}</span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-4">
                                                    <span className="text-gray-600 dark:text-gray-300">{order.orderDate}</span>
                                                </td>
                                                <td className="px-5 py-4">
                                                    <span className="font-bold text-[#181111] dark:text-white">${order.amount.toFixed(2)}</span>
                                                </td>
                                                <td className="px-5 py-4">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${statusConfig[order.status].bgColor} ${statusConfig[order.status].textColor}`}>
                                                        {statusConfig[order.status].label}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-4">
                                                    {order.status === 'pending' ? (
                                                        <Link to={`/enroll/${order.id}`} className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">
                                                            Upload Proof
                                                        </Link>
                                                    ) : order.status === 'completed' ? (
                                                        <Link to="/browse-courses" className="inline-flex items-center gap-1 px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-lg hover:bg-green-600 transition-colors">
                                                            Start Learning
                                                        </Link>
                                                    ) : (
                                                        <button className="inline-flex items-center gap-1 px-4 py-2 border border-[#e5dcdc] dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                            View Details
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="p-5 border-t border-[#e5dcdc] dark:border-gray-800 flex items-center justify-between">
                                <p className="text-sm text-gray-500">Showing 1 to {ordersData.length} of {ordersData.length} orders</p>
                                <div className="flex items-center gap-2">
                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg border border-[#e5dcdc] dark:border-gray-700 text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                                    </button>
                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">1</button>
                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg border border-[#e5dcdc] dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm">2</button>
                                    <button className="h-8 w-8 flex items-center justify-center rounded-lg border border-[#e5dcdc] dark:border-gray-700 text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
