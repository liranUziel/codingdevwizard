import "./Projectcard.scss";
function Projectcard({ title, year, description, tags, img }) {
    const API_URL = import.meta.env.REACT_APP_STRAPI_API_URL;
    return (
        <div className="projectcard__wrapper">
            <div className="projectcard__thumbnail">
                <img src={`${API_URL}${img}`} alt="" />
            </div>
            <div className="projectcard__info">
                <h1>{title}</h1>
                <div className="projectcard__info__short">
                    <div className="info__short__year">{year}</div>
                    <span className="info__short__subject">Dashboard</span>
                </div>
                <div className="summry">
                    <p>{description}</p>
                </div>
                <div className="taglist__wrapper">
                    <ul className="taglist">
                        {tags.map((tag) => {
                            return (
                                <li className="taglist__item" key={tag.id}>
                                    {tag.attributes.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projectcard;
