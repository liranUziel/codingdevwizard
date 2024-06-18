import "./Blogcard.scss";
function Blogcard({ title, date, category, description, img }) {
    const API_URL = import.meta.env.REACT_APP_STRAPI_API_URL;
    return (
        <div className="Blogcard__wrapper">
            <img src={`${API_URL}${img}`} alt="" />
            <h1>{title}</h1>
            <div className="Blogcard__info">
                <span>{date}</span>
                <span>|</span>
                <span>Design, Pattern</span>
            </div>
            <p>{description}</p>
        </div>
    );
}

export default Blogcard;
