import { Link, useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// Course data - in a real app this would come from an API
const coursesData: Record<string, CourseType> = {
    '1': {
        id: '1',
        title: 'Complete React Developer in 2024: Zero to Mastery (Hooks, Context, Redux)',
        subtitle: 'Master React 18, Hooks, Redux, React Router, Next.js, and more from scratch. Built by industry experts.',
        category: 'Development',
        tags: ['Development', 'React'],
        icon: 'code_blocks',
        instructor: 'Andrei Neagoie',
        instructorTitle: 'Founder of Zero To Mastery Academy',
        instructorBio: 'Andrei is the instructor of the highest rated development courses on the platform. He has been a Senior Software Developer in Silicon Valley and Toronto for many years, and is now taking all that he has learned, to teach programming skills and to help you discover the amazing career opportunities that being a developer allows.',
        rating: 4.8,
        students: 82401,
        price: '$84.99',
        originalPrice: '$129.99',
        discount: '35% off',
        lessons: 342,
        duration: '42h 15m',
        level: 'Beginner',
        lastUpdated: 'Jan 2024',
        language: 'English',
        subtitles: 'Yes',
        learnings: [
            'Build enterprise level React applications and deploy to production',
            'Learn the latest React 18 features including Hooks and Context API',
            'Master Redux, Redux Toolkit, and asynchronous actions',
            'Build a massive E-commerce application like Shopify',
            'Handle authentication with Firebase and GraphQL',
            'Use Stripe API for handling payments in your apps'
        ],
        description: 'This is the ultimate React developer course. We\'re going to take you from a complete beginner to a professional developer, starting from the ground up and building multiple massive real-world projects.',
        sections: [
            { title: 'Section 1: Introduction & Basic Setup', lessons: 5, duration: '45m' },
            { title: 'Section 2: React Key Concepts', lessons: 12, duration: '2h 10m' },
            { title: 'Section 3: Project Intro - Monsters Rolodex', lessons: 8, duration: '1h 35m' },
        ]
    },
    '2': {
        id: '2',
        title: 'UI/UX Design Masterclass: Figma to Webflow',
        subtitle: 'Learn to design beautiful interfaces and build them with no code.',
        category: 'Design',
        tags: ['Design', 'Figma'],
        icon: 'brush',
        instructor: 'Sarah Jenkins',
        instructorTitle: 'Senior UI/UX Designer at Google',
        instructorBio: 'Sarah has over 10 years of experience in UI/UX design, working with top tech companies including Google and Apple.',
        rating: 4.7,
        students: 45230,
        price: '$69.00',
        originalPrice: '$99.00',
        discount: '30% off',
        lessons: 86,
        duration: '18h 30m',
        level: 'Intermediate',
        lastUpdated: 'Dec 2023',
        language: 'English',
        subtitles: 'Yes',
        learnings: [
            'Master Figma from beginner to advanced',
            'Create stunning UI designs with best practices',
            'Build responsive websites with Webflow',
            'Understand user experience principles',
            'Create design systems and components',
            'Prototype and test your designs'
        ],
        description: 'This comprehensive course takes you from design novice to professional UI/UX designer.',
        sections: [
            { title: 'Section 1: Getting Started with Figma', lessons: 8, duration: '1h 20m' },
            { title: 'Section 2: Design Fundamentals', lessons: 15, duration: '3h 45m' },
        ]
    },
    '3': {
        id: '3',
        title: 'Python for Financial Analysis and Algorithmic Trading',
        subtitle: 'Master Python libraries like Pandas and NumPy for financial data analysis.',
        category: 'Data Science',
        tags: ['Data Science', 'Python'],
        icon: 'database',
        instructor: 'Jose Portilla',
        instructorTitle: 'Data Science Instructor',
        instructorBio: 'Jose is a data science expert with experience in the financial industry.',
        rating: 4.6,
        students: 67800,
        price: '$99.99',
        originalPrice: '$149.99',
        discount: '33% off',
        lessons: 120,
        duration: '25h 0m',
        level: 'All Levels',
        lastUpdated: 'Feb 2024',
        language: 'English',
        subtitles: 'Yes',
        learnings: [
            'Use Python for financial analysis',
            'Master Pandas and NumPy',
            'Build algorithmic trading strategies',
            'Analyze stock market data',
            'Create financial visualizations',
            'Implement risk management techniques'
        ],
        description: 'Learn to use Python for financial analysis and algorithmic trading.',
        sections: [
            { title: 'Section 1: Python Basics', lessons: 10, duration: '2h' },
            { title: 'Section 2: Pandas for Finance', lessons: 20, duration: '5h' },
        ]
    },
    '4': {
        id: '4',
        title: 'Digital Marketing Strategy: The Complete Course',
        subtitle: 'Introduction to SEO, SEM, and social media strategies.',
        category: 'Marketing',
        tags: ['Marketing', 'SEO'],
        icon: 'campaign',
        instructor: 'Anton Voroni',
        instructorTitle: 'Digital Marketing Expert',
        instructorBio: 'Anton has helped hundreds of businesses grow their online presence.',
        rating: 4.5,
        students: 32100,
        price: 'Free',
        originalPrice: '',
        discount: '',
        lessons: 55,
        duration: '12h 0m',
        level: 'Beginner',
        lastUpdated: 'Nov 2023',
        language: 'English',
        subtitles: 'Yes',
        learnings: [
            'Understand digital marketing fundamentals',
            'Master SEO techniques',
            'Create effective social media strategies',
            'Run successful ad campaigns',
            'Analyze marketing metrics',
            'Build a marketing plan'
        ],
        description: 'Complete guide to digital marketing for beginners.',
        sections: [
            { title: 'Section 1: Marketing Fundamentals', lessons: 8, duration: '1h 30m' },
            { title: 'Section 2: SEO Mastery', lessons: 15, duration: '3h' },
        ]
    },
    '5': {
        id: '5',
        title: 'Flutter & Dart - The Complete Guide (2024 Edition)',
        subtitle: 'Build beautiful native mobile apps with Flutter.',
        category: 'Mobile',
        tags: ['Mobile', 'Flutter'],
        icon: 'smartphone',
        instructor: 'Maximilian Schwarzmüller',
        instructorTitle: 'Professional Developer & Instructor',
        instructorBio: 'Max is a professional developer with extensive experience in mobile development.',
        rating: 4.9,
        students: 125000,
        price: '$74.99',
        originalPrice: '$119.99',
        discount: '37% off',
        lessons: 240,
        duration: '35h 0m',
        level: 'Intermediate',
        lastUpdated: 'Jan 2024',
        language: 'English',
        subtitles: 'Yes',
        learnings: [
            'Build iOS and Android apps with one codebase',
            'Master Dart programming language',
            'Create beautiful UI with Flutter widgets',
            'Handle state management',
            'Connect to backend services',
            'Deploy apps to app stores'
        ],
        description: 'The complete guide to building beautiful mobile apps with Flutter and Dart.',
        sections: [
            { title: 'Section 1: Dart Basics', lessons: 20, duration: '4h' },
            { title: 'Section 2: Flutter Fundamentals', lessons: 30, duration: '6h' },
        ]
    },
    '6': {
        id: '6',
        title: 'Startup Masterclass: How to Raise Capital',
        subtitle: 'Learn how to fund your startup from investors.',
        category: 'Business',
        tags: ['Business', 'Startup'],
        icon: 'rocket_launch',
        instructor: 'Brad Feld',
        instructorTitle: 'Venture Capitalist & Author',
        instructorBio: 'Brad is a successful VC who has invested in hundreds of startups.',
        rating: 4.4,
        students: 18500,
        price: '$49.00',
        originalPrice: '$79.00',
        discount: '38% off',
        lessons: 28,
        duration: '6h 0m',
        level: 'Beginner',
        lastUpdated: 'Oct 2023',
        language: 'English',
        subtitles: 'Yes',
        learnings: [
            'Understand venture capital',
            'Create a winning pitch deck',
            'Navigate term sheets',
            'Build investor relationships',
            'Negotiate funding terms',
            'Scale your startup'
        ],
        description: 'Everything you need to know about raising capital for your startup.',
        sections: [
            { title: 'Section 1: Fundraising Basics', lessons: 5, duration: '1h' },
            { title: 'Section 2: Pitch Perfect', lessons: 8, duration: '2h' },
        ]
    },
    '7': {
        id: '7',
        title: 'AWS Certified Solutions Architect - Associate 2024',
        subtitle: 'Pass the AWS certification exam with confidence.',
        category: 'DevOps',
        tags: ['DevOps', 'AWS'],
        icon: 'cloud',
        instructor: 'Stephane Maarek',
        instructorTitle: 'AWS Hero & Instructor',
        instructorBio: 'Stephane is an AWS certified expert who has helped thousands pass their certifications.',
        rating: 4.8,
        students: 210000,
        price: '$129.99',
        originalPrice: '$199.99',
        discount: '35% off',
        lessons: 390,
        duration: '50h 0m',
        level: 'Intermediate',
        lastUpdated: 'Feb 2024',
        language: 'English',
        subtitles: 'Yes',
        learnings: [
            'Pass the AWS Solutions Architect exam',
            'Master AWS core services',
            'Design scalable architectures',
            'Implement security best practices',
            'Optimize costs on AWS',
            'Build highly available systems'
        ],
        description: 'The most comprehensive AWS certification course available.',
        sections: [
            { title: 'Section 1: AWS Fundamentals', lessons: 25, duration: '5h' },
            { title: 'Section 2: Compute Services', lessons: 40, duration: '8h' },
        ]
    },
    '8': {
        id: '8',
        title: 'Mastering Communication & Leadership',
        subtitle: 'Become a better communicator and leader.',
        category: 'Soft Skills',
        tags: ['Soft Skills', 'Leadership'],
        icon: 'psychology',
        instructor: 'Vanessa Van Edwards',
        instructorTitle: 'Behavioral Investigator & Author',
        instructorBio: 'Vanessa is a bestselling author and lead investigator at Science of People.',
        rating: 4.7,
        students: 28900,
        price: 'Free',
        originalPrice: '',
        discount: '',
        lessons: 45,
        duration: '10h 0m',
        level: 'All Levels',
        lastUpdated: 'Dec 2023',
        language: 'English',
        subtitles: 'Yes',
        learnings: [
            'Communicate with confidence',
            'Lead teams effectively',
            'Build strong relationships',
            'Master body language',
            'Handle difficult conversations',
            'Develop executive presence'
        ],
        description: 'Learn the science of communication and leadership.',
        sections: [
            { title: 'Section 1: Communication Basics', lessons: 10, duration: '2h' },
            { title: 'Section 2: Leadership Skills', lessons: 15, duration: '3h' },
        ]
    },
}

interface CourseType {
    id: string
    title: string
    subtitle: string
    category: string
    tags: string[]
    icon: string
    instructor: string
    instructorTitle: string
    instructorBio: string
    rating: number
    students: number
    price: string
    originalPrice: string
    discount: string
    lessons: number
    duration: string
    level: string
    lastUpdated: string
    language: string
    subtitles: string
    learnings: string[]
    description: string
    sections: { title: string; lessons: number; duration: string }[]
}

export default function CourseDetailPage() {
    const { courseId } = useParams<{ courseId: string }>()
    const navigate = useNavigate()
    const { addToCart, isInCart, cartCount } = useCart()
    const course = coursesData[courseId || '1']

    const handleLogout = () => navigate('/login')

    const handleAddToCart = () => {
        if (course) {
            const priceNum = course.price === 'Free' ? 0 : parseFloat(course.price.replace('$', ''))
            addToCart({
                id: parseInt(course.id),
                title: course.title,
                instructor: course.instructor,
                rating: course.rating,
                reviews: 10000,
                price: priceNum,
                icon: course.icon
            })
        }
    }

    if (!course) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Course not found</h1>
                    <Link to="/browse-courses" className="text-primary hover:underline">
                        Back to courses
                    </Link>
                </div>
            </div>
        )
    }

    const isFree = course.price === 'Free'

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
                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-gray-500">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <Link className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium" to="/browse-courses">
                            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                            Back to Courses
                        </Link>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <Link to="/cart" className="relative text-gray-500 hover:text-[#181111] dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white border-2 border-white dark:border-[#211112]">{cartCount}</span>
                            )}
                        </Link>
                        <button className="relative text-gray-500 hover:text-[#181111] dark:hover:text-white transition-colors">
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
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Left Content */}
                            <div className="flex-1 space-y-10">
                                {/* Course Header */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            {course.tags.map((tag, index) => (
                                                <span key={index} className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${index === 0 ? 'text-primary bg-primary/10' : 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'}`}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h1 className="text-4xl font-extrabold tracking-tight text-[#181111] dark:text-white leading-tight">{course.title}</h1>
                                        <p className="text-lg text-gray-500 dark:text-gray-400">{course.subtitle}</p>
                                    </div>

                                    {/* Video Preview */}
                                    <div className="aspect-video w-full bg-gray-100 dark:bg-white/5 rounded-2xl overflow-hidden relative group">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-8xl text-gray-300 dark:text-gray-600">{course.icon}</span>
                                        </div>
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <button className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-4xl">play_arrow</span>
                                            </button>
                                        </div>
                                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-medium">
                                            Preview Course Content
                                        </div>
                                    </div>
                                </div>

                                {/* What you'll learn */}
                                <div className="bg-white dark:bg-[#211112] p-8 rounded-[20px] border border-[#e5dcdc] dark:border-gray-800">
                                    <h2 className="text-xl font-bold mb-6">What you'll learn</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                        {course.learnings.map((learning, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{learning}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* About */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold">About this course</h2>
                                    <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                                        <p>{course.description}</p>
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold">Course Content</h2>
                                        <div className="text-sm text-gray-500 font-medium">{course.sections.length} sections • {course.lessons} lessons • {course.duration} total length</div>
                                    </div>
                                    <div className="space-y-3">
                                        {course.sections.map((section, index) => (
                                            <div key={index} className="border border-[#e5dcdc] dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-[#211112]">
                                                <button className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                    <div className="flex items-center gap-4">
                                                        <span className="material-symbols-outlined text-gray-400">expand_more</span>
                                                        <span className="font-bold">{section.title}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-400">{section.lessons} lessons • {section.duration}</span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Instructor */}
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold">Instructor</h2>
                                    <div className="bg-white dark:bg-[#211112] p-8 rounded-[20px] border border-[#e5dcdc] dark:border-gray-800 flex flex-col md:flex-row gap-8">
                                        <div className="shrink-0 flex flex-col items-center gap-3">
                                            <div className="h-28 w-28 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-500 border-2 border-primary/20">
                                                {course.instructor.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div className="text-center">
                                                <div className="flex items-center justify-center gap-1 text-primary">
                                                    <span className="material-symbols-outlined text-[16px]">star</span>
                                                    <span className="text-sm font-bold">{course.rating} Rating</span>
                                                </div>
                                                <p className="text-xs text-gray-500">{course.students.toLocaleString()} Students</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-bold">{course.instructor}</h3>
                                            <p className="text-sm text-primary font-medium">{course.instructorTitle}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{course.instructorBio}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Sidebar - Pricing Card */}
                            <div className="w-full lg:w-[380px] shrink-0">
                                <div className="sticky top-8 flex flex-col gap-5">
                                    <div className="bg-white dark:bg-[#211112] rounded-[24px] border border-[#e5dcdc] dark:border-gray-800 p-8 flex flex-col gap-6">
                                        {/* Price */}
                                        <div className="space-y-1">
                                            <div className="flex items-baseline gap-2">
                                                <span className={`text-4xl font-black leading-none ${isFree ? 'text-primary' : 'text-[#181111] dark:text-white'}`}>{course.price}</span>
                                                {course.originalPrice && <span className="text-lg text-gray-400 line-through leading-none">{course.originalPrice}</span>}
                                            </div>
                                            {course.discount && <p className="text-sm font-medium text-primary">{course.discount} • 2 days left at this price!</p>}
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col gap-3">
                                            <Link to={`/enroll/${course.id}`} className="w-full h-14 rounded-full bg-primary text-white font-bold text-base hover:bg-primary/90 transition-colors flex items-center justify-center">
                                                {isFree ? 'Enroll for Free' : 'Enroll Now'}
                                            </Link>
                                            {!isFree && (
                                                isInCart(parseInt(course.id)) ? (
                                                    <Link to="/cart" className="w-full h-14 rounded-full border border-green-500 text-green-600 font-bold text-base hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center justify-center gap-2">
                                                        <span className="material-symbols-outlined">check_circle</span>
                                                        View Cart
                                                    </Link>
                                                ) : (
                                                    <button onClick={handleAddToCart} className="w-full h-14 rounded-full border border-[#e5dcdc] dark:border-gray-700 text-[#181111] dark:text-white font-bold text-base hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center">
                                                        Add to Cart
                                                    </button>
                                                )
                                            )}
                                        </div>

                                        {/* Includes */}
                                        <div className="pt-4 border-t border-[#e5dcdc] dark:border-gray-800 space-y-4">
                                            <p className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">This course includes:</p>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                    <span className="material-symbols-outlined text-[20px] text-gray-400">schedule</span>
                                                    <span>{course.duration} on-demand video</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                    <span className="material-symbols-outlined text-[20px] text-gray-400">play_lesson</span>
                                                    <span>{course.lessons} downloadable lessons</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                    <span className="material-symbols-outlined text-[20px] text-gray-400">signal_cellular_alt</span>
                                                    <span>Full Lifetime Access</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                    <span className="material-symbols-outlined text-[20px] text-gray-400">smartphone</span>
                                                    <span>Access on mobile and TV</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                                    <span className="material-symbols-outlined text-[20px] text-gray-400">workspace_premium</span>
                                                    <span className="font-medium text-primary">Certificate of Completion</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Share & Wishlist */}
                                        <div className="flex items-center justify-center gap-8 pt-4">
                                            <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">
                                                <span className="material-symbols-outlined text-[18px]">share</span> Share
                                            </button>
                                            <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-primary transition-colors uppercase tracking-widest">
                                                <span className="material-symbols-outlined text-[18px]">favorite</span> Wishlist
                                            </button>
                                        </div>
                                    </div>

                                    {/* Course Facts */}
                                    <div className="bg-primary/5 rounded-[20px] p-6 border border-primary/10">
                                        <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wider">Course Facts</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Difficulty</p>
                                                <p className="text-sm font-bold">{course.level}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Last Updated</p>
                                                <p className="text-sm font-bold">{course.lastUpdated}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Language</p>
                                                <p className="text-sm font-bold">{course.language}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">Subtitles</p>
                                                <p className="text-sm font-bold">{course.subtitles}</p>
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
