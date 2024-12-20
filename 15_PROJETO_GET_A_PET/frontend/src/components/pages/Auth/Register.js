import { useState, useContext } from 'react'

import Input from '../../form/Input'
import { Link } from 'react-router-dom'

import styles from '../../form/Form.module.css'

// Context
import {Context} from '../../../context/UserContext'

function Register() {
    // objeto para guardar o estado do usuário
    const [user, setUser] = useState({})
    const {register} = useContext(Context)

    // "e" é o evento
    function handleChange(e){
        // pega o objeto atual e modifica o nome de uma antiga propriedade com o nome da nova
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        // para a execução do formulário
        e.preventDefault()

        // enviar o usuário para o banco por meio do contexto
        register(user)
    }

    return (
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    handleOnChange={handleChange}
                />
                <Input 
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite o seu telefone"
                    handleOnChange={handleChange}
                />
                <Input 
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite o seu e-mail"
                    handleOnChange={handleChange}
                />
                <Input 
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite a sua senha"
                    handleOnChange={handleChange}
                />
                <Input 
                    text="Confirmação de senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a sua senha"
                    handleOnChange={handleChange}
                />
                <input type="submit" value="Cadastrar" />
            </form>
            <p>
                Já tem conta? <Link to="/login">Clique aqui.</Link>
            </p>
        </section>
    )
}

export default Register