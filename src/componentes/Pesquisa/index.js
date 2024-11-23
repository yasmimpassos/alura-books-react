import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultados = styled.div`  
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Resultado = styled.div`
    margin: 20px;
    transition: 0.4s all;

    &:hover {
        transform: scale(1.1)
    }
`

function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
    
    function fazPesquisa(evento) {
        const textoDigitado = evento.target.value
        const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
        setLivrosPesquisados(resultadoPesquisa)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => fazPesquisa(evento)}
            />
            <Resultados>
                { livrosPesquisados.map( livro => (
                    <Resultado>
                        <img src={livro.src}/>
                        <p>{livro.nome}</p>
                    </Resultado>
                )) }
            </Resultados>
        </PesquisaContainer>
    )
}

export default Pesquisa