// Importa uma instância da API criada em utils/api para realizar chamadas HTTP
import api from '../../../utils/api'

// Importa o hook useState do React, que permite adicionar estados locais ao componente
import { useState } from 'react'

// Importa o hook useNavigate do react-router-dom, usado para navegar entre as páginas
import { useNavigate } from 'react-router-dom'

import styles from './AddPet.module.css'

// Importa o componente PetForm, que contém o formulário para cadastro de pets
import PetForm from '../../form/PetForm'

// Importa o hook personalizado useFlashMessage, que exibe mensagens de feedback para o usuário
import useFlashMessage from '../../../hooks/useFlashMessages'

// Define o componente AddPet, responsável pela tela de cadastro de pets
function AddPet() {
  // Define um estado local `token` com o valor do token armazenado no localStorage, ou uma string vazia se o token não existir
  const [token] = useState(localStorage.getItem('token') || '')

  // Obtém a função `setFlashMessage` do hook useFlashMessage para exibir mensagens de feedback ao usuário
  const { setFlashMessage } = useFlashMessage()

  // Obtém a função navigate, usada para redirecionar o usuário para outras páginas
  const navigate = useNavigate()

  // Função assíncrona que registra um novo pet com os dados fornecidos no formulário
  async function registerPet(pet) {
    // Define o tipo de mensagem como 'success' (sucesso) por padrão
    let msgType = 'success'

    // Cria um novo objeto FormData, necessário para enviar arquivos e dados de formulários via HTTP
    const formData = new FormData()

    // Transforma o objeto `pet` em um formato adequado para envio via FormData
    // Percorre cada chave do objeto `pet` para adicionar os dados no FormData
    const petFormData = await Object.keys(pet).forEach((key) => {
      // Se a chave atual for `images`, adiciona cada imagem separadamente ao FormData
      if (key === 'images') {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append(`images`, pet[key][i])
        }
      } else {
        // Caso contrário, adiciona o valor do campo ao FormData normalmente
        formData.append(key, pet[key])
      }
    })

    // Adiciona o objeto pet completo ao FormData, mesmo que já esteja separado (provavelmente redundante)
    formData.append('pet', petFormData)

    // Realiza uma chamada POST para a API com o endpoint `pets/create`, passando o FormData como payload
    const data = await api
      .post(`pets/create`, formData, {
        headers: {
          // Passa o token de autorização no cabeçalho da requisição
          Authorization: `Bearer ${JSON.parse(token)}`,
          // Especifica o tipo de conteúdo como multipart/form-data para envio de arquivos
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        // Em caso de sucesso, exibe os dados da resposta no console e retorna os dados
        console.log(response.data)
        return response.data
      })
      .catch((err) => {
        // Em caso de erro, exibe o erro no console, altera o tipo de mensagem para 'error' e retorna a mensagem de erro
        console.log(err)
        msgType = 'error'
        return err.response.data
      })

    // Define a mensagem flash para exibir o feedback ao usuário com base no sucesso ou falha da operação
    setFlashMessage(data.message, msgType)
    // Redireciona o usuário para a página de seus pets cadastrados
    navigate('/pet/mypets')
  }

  // Renderiza o conteúdo do componente AddPet
  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Cadastre um Pet</h1>
        <p>Depois ele ficará disponível para adoção</p>
      </div>
      <PetForm handleSubmit={registerPet} btnText="Cadastrar" />
    </section>
  )
}

export default AddPet
