function LoadingComponent() {
    return (
        <div className="loading-state" role="status" aria-live="polite">
            <span className="loading-spinner" aria-hidden="true" />
            <span>Carregando usuários...</span>
        </div>
    )
}

export default LoadingComponent;
