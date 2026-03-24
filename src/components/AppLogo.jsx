import { Link } from "react-router-dom"
import '../assets/css/AppLogo.css'

export default function AppLogo() {
    return (
        <Link to="/" className="app-logo">Shop</Link>
    )
}