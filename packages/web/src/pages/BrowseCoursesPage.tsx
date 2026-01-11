import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const courses = [
    { id: 1, icon: 'code_blocks', category: 'Development', categoryColor: 'primary', level: 'Beginner', levelIcon: 'signal_cellular_alt', title: 'Complete React Developer in 2024', instructor: 'Andrei Neagoie', lessons: 342, price: '$84.99' },
    { id: 2, icon: 'brush', category: 'Design', categoryColor: 'blue', level: 'Intermediate', levelIcon: 'signal_cellular_alt_2_bar', title: 'UI/UX Design Masterclass: Figma to Webflow', instructor: 'Sarah Jenkins', lessons: 86, price: '$69.00' },
    { id: 3, icon: 'database', category: 'Data Science', categoryColor: 'green', level: 'All Levels', levelIcon: 'signal_cellular_alt_1_bar', title: 'Python for Financial Analysis and Algorithmic Trading', instructor: 'Jose Portilla', lessons: 120, price: '$99.99' },
    { id: 4, icon: 'campaign', category: 'Marketing', categoryColor: 'purple', level: 'Beginner', levelIcon: 'signal_cellular_alt', title: 'Digital Marketing Strategy: The Complete Course', instructor: 'Anton Voroni', lessons: 55, price: 'Free', isFree: true },
    { id: 5, icon: 'smartphone', category: 'Mobile', categoryColor: 'primary', level: 'Intermediate', levelIcon: 'signal_cellular_alt_2_bar', title: 'Flutter & Dart - The Complete Guide (2024 Edition)', instructor: 'Maximilian Schwarzmüller', lessons: 240, price: '$74.99' },
    { id: 6, icon: 'rocket_launch', category: 'Business', categoryColor: 'orange', level: 'Beginner', levelIcon: 'signal_cellular_alt', title: 'Startup Masterclass: How to Raise Capital', instructor: 'Brad Feld', lessons: 28, price: '$49.00' },
    { id: 7, icon: 'cloud', category: 'DevOps', categoryColor: 'teal', level: 'Intermediate', levelIcon: 'signal_cellular_alt_2_bar', title: 'AWS Certified Solutions Architect - Associate 2024', instructor: 'Stephane Maarek', lessons: 390, price: '$129.99' },
    { id: 8, icon: 'psychology', category: 'Soft Skills', categoryColor: 'indigo', level: 'All Levels', levelIcon: 'signal_cellular_alt_1_bar', title: 'Mastering Communication & Leadership', instructor: 'Vanessa Van Edwards', lessons: 45, price: 'Free', isFree: true },
]

const categoryColors: Record<string, string> = {
    primary: 'text-primary bg-primary/10',
    blue: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20',
    green: 'text-green-600 bg-green-50 dark:bg-green-900/20',
    purple: 'text-purple-600 bg-purple-50 dark:bg-purple-900/20',
    orange: 'text-orange-600 bg-orange-50 dark:bg-orange-900/20',
    teal: 'text-teal-600 bg-teal-50 dark:bg-teal-900/20',
    indigo: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20',
}

export default function BrowseCoursesPage() {
    const navigate = useNavigate()
    const { cartCount } = useCart()
    const [activeFilter, setActiveFilter] = useState('All')
    const filters = ['All', 'Development', 'Design', 'Business', 'Marketing', 'Data Science']

    const handleLogout = () => navigate('/login')

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
                    <Link className="flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#181111] dark:hover:text-white rounded-[1000px] transition-colors" to="#">
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
                        <Link to="/cart" className="relative text-gray-500 hover:text-[#181111] dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white border-2 border-white dark:border-[#211112]">{cartCount}</span>
                            )}
                        </Link>
                        <button className="relative text-gray-500 hover:text-[#181111] dark:hover:text-white transition-colors">
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
                    <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
                        {/* Header */}
                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-bold tracking-tight text-[#181111] dark:text-white">Browse New Courses</h1>
                            <p className="text-gray-500 dark:text-gray-400">Discover new skills, master trending technologies, and advance your career.</p>
                        </div>

                        {/* Search & Filters */}
                        <div className="flex flex-col gap-5 bg-white dark:bg-[#211112] p-6 rounded-[20px] border border-[#e5dcdc] dark:border-gray-800">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="relative flex-1">
                                    <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-[22px]">search</span>
                                    <input className="w-full h-14 pl-14 pr-6 rounded-[1000px] border border-[#e5dcdc] dark:border-gray-700 bg-gray-50 dark:bg-white/5 text-[#181111] dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary text-base transition-colors focus:outline-none" placeholder="Search for courses, instructors, or topics..." type="text" />
                                </div>
                                <div className="flex gap-3">
                                    <button className="h-14 px-6 rounded-[1000px] border border-[#e5dcdc] dark:border-gray-700 bg-white dark:bg-[#211112] text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors flex items-center gap-2 font-medium">
                                        <span className="material-symbols-outlined">tune</span>
                                        <span>Filters</span>
                                    </button>
                                    <div className="relative h-14">
                                        <select className="h-full w-full pl-6 pr-12 rounded-[1000px] border border-[#e5dcdc] dark:border-gray-700 bg-white dark:bg-[#211112] text-gray-600 dark:text-gray-300 hover:border-primary focus:border-primary appearance-none font-medium cursor-pointer transition-colors focus:outline-none focus:ring-0">
                                            <option value="popular">Sort by: Popular</option>
                                            <option value="newest">Newest</option>
                                            <option value="price-low">Price: Low to High</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[20px]">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-sm font-medium text-gray-500 mr-2">Popular Topics:</span>
                                {filters.map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`px-5 py-2 rounded-[1000px] text-sm font-medium transition-colors ${activeFilter === filter
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-50 dark:bg-white/5 border border-[#e5dcdc] dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary hover:border-primary hover:bg-primary/5'
                                            }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Course Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {courses.map((course) => (
                                <Link key={course.id} to={`/course/${course.id}`} className="bg-white dark:bg-[#211112] rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 p-5 flex flex-col gap-4 group hover:border-primary/50 transition-all cursor-pointer">
                                    <div className="aspect-video w-full bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-gray-300 dark:text-gray-600 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-6xl">{course.icon}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={`text-[10px] font-bold px-2 py-1 rounded-[1000px] uppercase tracking-wide ${categoryColors[course.categoryColor]}`}>
                                                {course.category}
                                            </span>
                                            <span className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-1">
                                                <span className="material-symbols-outlined text-[14px]">{course.levelIcon}</span> {course.level}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">by <span className="text-[#181111] dark:text-white font-medium">{course.instructor}</span></p>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-[#e5dcdc] dark:border-gray-800 pt-4 mt-auto">
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">play_lesson</span> {course.lessons} Lessons</span>
                                        <span className={`font-bold text-sm ${course.isFree ? 'text-primary' : 'text-[#181111] dark:text-white'}`}>{course.price}</span>
                                    </div>
                                    <span className="w-full h-10 rounded-[1000px] border border-primary text-primary hover:bg-primary hover:text-white font-medium text-sm transition-colors flex items-center justify-center gap-2">
                                        Detail Course
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
