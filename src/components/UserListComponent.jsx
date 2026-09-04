import UserCardComponent from './UserCardComponent';

function UserListComponent({ usuarios }) {
    if (usuarios.length === 0) {
        return (
            <div className="empty-state">
                <span className="empty-icon" aria-hidden="true">○</span>
                <h2>Nenhum usuário encontrado</h2>
                <p>Tente buscar por outro nome, usuário ou e-mail.</p>
            </div>
        )
    }

    return (
        <ul className="user-list">
            {usuarios.map((usuario) => (
                <UserCardComponent key={usuario.id} usuario={usuario} />
            ))}
        </ul>
    )
}

export default UserListComponent;
