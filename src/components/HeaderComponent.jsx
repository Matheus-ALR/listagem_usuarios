function HeaderComponent({ busca, onBuscaChange }) {
    return (
        <header className="app-header">
            <div className="brand-mark" aria-hidden="true">U</div>
            <div className="header-copy">
                <p className="eyebrow">Diretório digital</p>
                <h1>Catálogo de usuários</h1>
                <p className="header-description">
                    Encontre rapidamente as pessoas cadastradas na sua rede.
                </p>
            </div>
            <label className="search-field">
                <span className="search-icon" aria-hidden="true">⌕</span>
                <span className="sr-only">Filtrar usuários</span>
                <input
                    type="search"
                    value={busca}
                    placeholder="Buscar por nome, usuário ou e-mail"
                    onChange={(evento) => onBuscaChange(evento.target.value)}
                />
            </label>
        </header>
    )
}

export default HeaderComponent;
