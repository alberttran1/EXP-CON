import { Link } from "react-router-dom";

export const Button = () => {
    return (
        <Link to="/Pricing" style={{ textDecoration: 'none' }}><div className="main-button">
            <div className="main-button-text">
                TRY IT NOW
            </div>
        </div></Link>
    )
}