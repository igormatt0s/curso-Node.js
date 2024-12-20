import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './AddPet.module.css'

import PetForm from '../../form/PetForm'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessages'

function EditPet() {
  const [pet, setPet] = useState({})
  const [token] = useState(localStorage.getItem('token') || '')
  const { id } = useParams()
  const { setFlashMessage } = useFlashMessage()

// useEffect é um hook que executa um efeito colateral, neste caso, uma chamada à API, sempre que um dos valores em sua lista de dependências (token ou id) for atualizado.
useEffect(() => {
    // Faz uma requisição GET para a API no endpoint específico do pet, usando o ID do pet
    api
      .get(`/pets/${id}`, {
        headers: {
          // Inclui o token de autorização no cabeçalho da requisição, necessário para autenticação
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        // Em caso de sucesso, atualiza o estado `pet` com os dados recebidos da API
        setPet(response.data.pet)
      })
  }, [token, id]) // Lista de dependências: o useEffect será executado sempre que `token` ou `id` mudarem  

  async function updatePet(pet) {
    let msgType = 'success'

    const formData = new FormData()

    const petFormData = await Object.keys(pet).forEach((key) => {
      if (key === 'images') {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append(`images`, pet[key][i])
        }
      } else {
        formData.append(key, pet[key])
      }
    })

    formData.append('pet', petFormData)

    const data = await api
      .patch(`pets/${pet._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((err) => {
        console.log(err)
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
  }

  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Editando o Pet: {pet.name}</h1>
        <p>Depois da edição os dados serão atualizados no sistema</p>
      </div>
      {pet.name && (
        <PetForm handleSubmit={updatePet} petData={pet} btnText="Editar" />
      )}
    </section>
  )
}

export default EditPet
