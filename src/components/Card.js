export default function Card({ title, description, link, children }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>

            {/* single link support */}
            {link && (
                <a href={link} target="_blank" rel="noreferrer">
                    Visit
                </a>
            )}

            {/* extra custom content (multiple links, etc.) */}
            {children}
        </div>
    );
}