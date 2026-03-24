import '../assets/css/Button.css'

export default function Button({ type, children, action }) {
    return (
        <button className={`app-btn ${type} mt-4`} onClick={action}>
            {children}
        </button>
    )
}