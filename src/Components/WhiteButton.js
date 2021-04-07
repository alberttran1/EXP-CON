import { Link } from "react-router-dom";

export const WhiteButton = (link,text) => {
    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <div className="white-button">
                <div className="white-button-text">
                    {text}
                </div>
            </div>
        </Link>
    )
}