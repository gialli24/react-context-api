import '../assets/css/Banner.css'

export default function Banner(props) {
    return (
        <div id="banner">
            <div className="app-container py-1">
                {props.children}
            </div>
        </div>
    );
}