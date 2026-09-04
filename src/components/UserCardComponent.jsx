function UserCardComponent({ usuario }) {
    return (
        <li className="user-card">
            <div className="user-avatar" aria-hidden="true">
                {usuario.name.charAt(0)}
            </div>
            <div className="user-details">
                <h3>{usuario.name}</h3>
                <p>@{usuario.username}</p>
                <a href={`mailto:${usuario.email}`}>{usuario.email}</a>
            </div>
            <span className="card-arrow" aria-hidden="true">↗</span>
        </li>
    )
}

export default UserCardComponent;
