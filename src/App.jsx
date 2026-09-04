import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent';
import LoadingComponent from './components/LoadingComponent';
import UserListComponent from './components/UserListComponent';
import './styles.css';

const filtrarUsuariosPorTermo = (termo) => (usuario) => {
    const termolower = termo.toLowerCase()

    return(
        usuario.name.toLowerCase().includes(termolower) || 
        usuario.username.toLowerCase().includes(termolower) ||
        usuario.email.toLowerCase().includes(termolower)
    )
} 

function App () {
    const [usuarios, setUsuarios] = useState([])
    const url = "https://jsonplaceholder.typicode.com"
    const [erro, setErro] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [busca, setBusca] = useState("")
    
    const usuariosFiltrados = usuarios.filter(filtrarUsuariosPorTermo(busca)) 

    async function buscarUsuarios() {
        try {

            setCarregando(true)

            const response = await axios.get(`${url}/users`)
            const data = response.data
            setUsuarios(data)
        } catch (error) {
            console.log('Erro ao buscar usuários', error)
            setErro(`Não foi possível carregar os usuários. Código: ${error.message}`)
            setUsuarios([])
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        buscarUsuarios()
    }, [])

    return (
        <div className="app-shell">
            <HeaderComponent busca={busca} onBuscaChange={setBusca} />

            <main className="content">
                <div className="content-bar">
                    <h2>Usuários cadastrados</h2>
                    <span className="result-count">{usuarios.length} no total</span>
                </div>

                {carregando && <LoadingComponent />}
                {erro && <p className="error-state">{erro}</p>}
            {!carregando && !erro && (
                    <>
                        <p className="result-count">{usuariosFiltrados.length} resultado(s) para a busca atual</p>
                        <UserListComponent usuarios={usuariosFiltrados} />
                    </>
            )}
            </main>
        </div>
    );
}

export default App;