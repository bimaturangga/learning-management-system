import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function StudentDashboard() {
    const navigate = useNavigate()
    const { cartCount } = useCart()

    const handleLogout = () => {
        navigate('/login')
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
                    <Link className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-[1000px] transition-colors" to="/dashboard">
                        <span className="material-symbols-outlined text-[22px]">dashboard</span>
                        <span className="font-medium text-sm">Dashboard</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#181111] dark:hover:text-white rounded-[1000px] transition-colors" to="#">
                        <span className="material-symbols-outlined text-[22px]">menu_book</span>
                        <span className="font-medium text-sm">My Courses</span>
                    </Link>
                    <Link className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#181111] dark:hover:text-white rounded-[1000px] transition-colors" to="#">
                        <span className="material-symbols-outlined text-[22px]">assignment</span>
                        <span className="font-medium text-sm">Assignments</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-[#e5dcdc] dark:border-gray-800">
                    <Link className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:text-[#181111] dark:hover:text-white rounded-[1000px] transition-colors" to="#">
                        <span className="material-symbols-outlined text-[22px]">settings</span>
                        <span className="font-medium text-sm">Settings</span>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:text-primary rounded-[1000px] transition-colors mt-1"
                    >
                        <span className="material-symbols-outlined text-[22px]">logout</span>
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
                        <input
                            className="flex h-12 w-full rounded-[1000px] border border-[#e5dcdc] dark:border-gray-700 bg-gray-50 dark:bg-white/5 pl-12 pr-6 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-[#181111] dark:text-white transition-colors"
                            placeholder="Search courses, assignments..."
                            type="text"
                        />
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-5">
                            <Link to="/cart" className="relative text-gray-500 hover:text-[#181111] dark:hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white border-2 border-white dark:border-[#211112]">{cartCount}</span>
                                )}
                            </Link>
                            <button className="relative text-gray-500 hover:text-[#181111] dark:hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-[24px]">notifications</span>
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary border-2 border-white dark:border-[#211112]"></span>
                            </button>
                        </div>

                        <div className="flex items-center gap-3 pl-5 border-l border-[#e5dcdc] dark:border-gray-800">
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
                    <div className="max-w-[1600px] mx-auto flex flex-col gap-5">
                        {/* Header Section */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight text-[#181111] dark:text-white">Dashboard</h1>
                                <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, continue your learning journey.</p>
                            </div>
                            <Link
                                to="/browse-courses"
                                className="inline-flex items-center justify-center rounded-[1000px] px-6 h-12 text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
                            >
                                <span className="material-symbols-outlined mr-2 text-[20px]">add</span>
                                Browse New Courses
                            </Link>
                        </div>

                        {/* Featured Course & Progress */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Featured Course */}
                            <div className="lg:col-span-2 bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
                                <div className="absolute -right-10 -top-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                                <div className="h-full w-full md:w-48 shrink-0 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center aspect-video md:aspect-auto">
                                    <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600">code</span>
                                </div>
                                <div className="flex-1 w-full z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 rounded-[1000px] bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wide">In Progress</span>
                                        <span className="text-xs text-gray-400">Last accessed 2h ago</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#181111] dark:text-white mb-2">Advanced Web Development</h2>
                                    <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Chapter 4: Mastering CSS Grid &amp; Flexbox Layouts</p>
                                    <div className="space-y-2 mb-6">
                                        <div className="flex justify-between text-xs font-medium">
                                            <span className="text-[#181111] dark:text-white">75% Completed</span>
                                            <span className="text-gray-400">12/16 Lessons</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-3/4 rounded-full"></div>
                                        </div>
                                    </div>
                                    <button className="inline-flex items-center justify-center rounded-[1000px] h-10 px-6 text-sm font-medium bg-[#181111] dark:bg-white text-white dark:text-[#181111] hover:opacity-90 transition-opacity">
                                        Continue Lesson
                                        <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            {/* My Progress */}
                            <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-6 flex flex-col justify-between">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-[#181111] dark:text-white">My Progress</h3>
                                    <div className="p-2 rounded-full bg-gray-50 dark:bg-white/5">
                                        <span className="material-symbols-outlined text-gray-400 text-[20px]">bar_chart</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                            <span className="material-symbols-outlined">check_circle</span>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-[#181111] dark:text-white">12</p>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Courses Completed</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                                            <span className="material-symbols-outlined">timer</span>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-[#181111] dark:text-white">48h</p>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Hours Spent</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                                            <span className="material-symbols-outlined">workspace_premium</span>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-[#181111] dark:text-white">5</p>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Certificates Earned</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="mt-6 text-sm font-semibold text-primary hover:underline text-center" href="#">View Full Report</a>
                            </div>
                        </div>

                        {/* Enrolled Courses */}
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-[#181111] dark:text-white">Enrolled Courses</h3>
                                <a className="text-sm font-semibold text-primary hover:text-primary/80" href="#">View All</a>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {/* Course Card 1 */}
                                <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-5 flex flex-col group hover:border-primary/30 transition-colors cursor-pointer">
                                    <div className="h-40 w-full bg-gray-100 dark:bg-white/5 rounded-[12px] mb-4 flex items-center justify-center text-gray-300 dark:text-gray-600">
                                        <span className="material-symbols-outlined text-5xl">brush</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">DESIGN</span>
                                        <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                                        <span className="text-xs text-gray-400">14 Lessons</span>
                                    </div>
                                    <h4 className="text-base font-bold text-[#181111] dark:text-white mb-1 group-hover:text-primary transition-colors">UI/UX Design Fundamentals</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">Learn the basics of user interface design and user experience.</p>
                                    <div className="mt-auto pt-4 border-t border-[#e5dcdc] dark:border-gray-800 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            <div className="h-8 w-8 rounded-full border-2 border-white dark:border-[#211112] bg-gray-200 flex items-center justify-center text-[10px] font-bold">JD</div>
                                        </div>
                                        <span className="text-xs font-medium text-[#181111] dark:text-white bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-[1000px]">45%</span>
                                    </div>
                                </div>

                                {/* Course Card 2 */}
                                <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-5 flex flex-col group hover:border-primary/30 transition-colors cursor-pointer">
                                    <div className="h-40 w-full bg-gray-100 dark:bg-white/5 rounded-[12px] mb-4 flex items-center justify-center text-gray-300 dark:text-gray-600">
                                        <span className="material-symbols-outlined text-5xl">database</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">DATA SCIENCE</span>
                                        <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                                        <span className="text-xs text-gray-400">22 Lessons</span>
                                    </div>
                                    <h4 className="text-base font-bold text-[#181111] dark:text-white mb-1 group-hover:text-primary transition-colors">Python for Data Analysis</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">Master Python libraries like Pandas and NumPy for data.</p>
                                    <div className="mt-auto pt-4 border-t border-[#e5dcdc] dark:border-gray-800 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            <div className="h-8 w-8 rounded-full border-2 border-white dark:border-[#211112] bg-gray-200 flex items-center justify-center text-[10px] font-bold">AL</div>
                                        </div>
                                        <span className="text-xs font-medium text-[#181111] dark:text-white bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-[1000px]">10%</span>
                                    </div>
                                </div>

                                {/* Course Card 3 */}
                                <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-5 flex flex-col group hover:border-primary/30 transition-colors cursor-pointer">
                                    <div className="h-40 w-full bg-gray-100 dark:bg-white/5 rounded-[12px] mb-4 flex items-center justify-center text-gray-300 dark:text-gray-600">
                                        <span className="material-symbols-outlined text-5xl">campaign</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">MARKETING</span>
                                        <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                                        <span className="text-xs text-gray-400">8 Lessons</span>
                                    </div>
                                    <h4 className="text-base font-bold text-[#181111] dark:text-white mb-1 group-hover:text-primary transition-colors">Digital Marketing 101</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">Introduction to SEO, SEM, and social media strategies.</p>
                                    <div className="mt-auto pt-4 border-t border-[#e5dcdc] dark:border-gray-800 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            <div className="h-8 w-8 rounded-full border-2 border-white dark:border-[#211112] bg-gray-200 flex items-center justify-center text-[10px] font-bold">MK</div>
                                        </div>
                                        <span className="text-xs font-medium text-[#181111] dark:text-white bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-[1000px]">0%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Deadlines & Activity */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
                            {/* Upcoming Deadlines */}
                            <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold text-[#181111] dark:text-white">Upcoming Deadlines</h3>
                                    <a className="text-sm font-semibold text-primary hover:text-primary/80" href="#">View Calendar</a>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-[1000px] bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center shrink-0 border border-red-100 dark:border-red-900/30">
                                            <span className="text-xs font-bold text-center leading-tight">12<br />OCT</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-sm font-bold text-[#181111] dark:text-white">Research Paper Draft</h5>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Advanced Web Development</p>
                                        </div>
                                        <span className="text-xs font-medium text-red-600 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-[1000px]">Due Tomorrow</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-[1000px] bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 flex items-center justify-center shrink-0 border border-[#e5dcdc] dark:border-gray-700">
                                            <span className="text-xs font-bold text-center leading-tight">15<br />OCT</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-sm font-bold text-[#181111] dark:text-white">User Persona Quiz</h5>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">UI/UX Design Fundamentals</p>
                                        </div>
                                        <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-[1000px]">3 Days Left</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-[1000px] bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 flex items-center justify-center shrink-0 border border-[#e5dcdc] dark:border-gray-700">
                                            <span className="text-xs font-bold text-center leading-tight">20<br />OCT</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="text-sm font-bold text-[#181111] dark:text-white">Mid-term Project</h5>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Python for Data Analysis</p>
                                        </div>
                                        <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-[1000px]">8 Days Left</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold text-[#181111] dark:text-white">Recent Activity</h3>
                                </div>
                                <div className="relative pl-2">
                                    <div className="absolute top-2 bottom-4 left-[9px] w-[2px] bg-gray-100 dark:bg-gray-800"></div>
                                    <div className="space-y-6">
                                        <div className="relative flex items-start gap-4">
                                            <div className="h-5 w-5 rounded-full bg-primary border-[3px] border-white dark:border-[#211112] z-10 shrink-0"></div>
                                            <div>
                                                <p className="text-sm text-[#181111] dark:text-white">You completed lesson <span className="font-semibold">CSS Grid Layout</span></p>
                                                <span className="text-xs text-gray-400">2 hours ago</span>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start gap-4">
                                            <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-600 border-[3px] border-white dark:border-[#211112] z-10 shrink-0"></div>
                                            <div>
                                                <p className="text-sm text-[#181111] dark:text-white">New assignment uploaded in <span className="font-semibold">Data Science</span></p>
                                                <span className="text-xs text-gray-400">Yesterday</span>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start gap-4">
                                            <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-600 border-[3px] border-white dark:border-[#211112] z-10 shrink-0"></div>
                                            <div>
                                                <p className="text-sm text-[#181111] dark:text-white">Instructor commented on your <span className="font-semibold">Project Submission</span></p>
                                                <span className="text-xs text-gray-400">2 days ago</span>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start gap-4">
                                            <div className="h-5 w-5 rounded-full bg-gray-300 dark:bg-gray-600 border-[3px] border-white dark:border-[#211112] z-10 shrink-0"></div>
                                            <div>
                                                <p className="text-sm text-[#181111] dark:text-white">You enrolled in <span className="font-semibold">Digital Marketing 101</span></p>
                                                <span className="text-xs text-gray-400">3 days ago</span>
                                            </div>
                                        </div>
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
