import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import SetNewPasswordPage from './pages/SetNewPasswordPage'
import StudentDashboard from './pages/StudentDashboard'
import BrowseCoursesPage from './pages/BrowseCoursesPage'
import CourseDetailPage from './pages/CourseDetailPage'
import CartPage from './pages/CartPage'
import EnrollPage from './pages/EnrollPage'
import PaymentConfirmationPage from './pages/PaymentConfirmationPage'
import MyOrdersPage from './pages/MyOrdersPage'

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/set-new-password" element={<SetNewPasswordPage />} />
                    <Route path="/dashboard" element={<StudentDashboard />} />
                    <Route path="/browse-courses" element={<BrowseCoursesPage />} />
                    <Route path="/course/:courseId" element={<CourseDetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/enroll/:courseId" element={<EnrollPage />} />
                    <Route path="/payment-confirmation" element={<PaymentConfirmationPage />} />
                    <Route path="/my-orders" element={<MyOrdersPage />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}

export default App







