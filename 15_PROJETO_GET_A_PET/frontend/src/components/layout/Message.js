import {useState, useEffect} from 'react'
import bus from '../../utils/bus'

import styles from './Message.module.css'

function Message() {
    const [visibility, setVisibility] = useState(false)
    const [message, setMessage] = useState("")
    const [type, setType] = useState("")

    // para evitar o loop de observação de eventos
    useEffect(() => {
        bus.addListener('flash', ({message, type}) => {
            setVisibility(true)
            setMessage(message)
            setType(type)

            // a mensagem de erro ou sucesso só aparecerá por 4s
            setTimeout(() => {
                setVisibility(false)
            }, 4000)
        })
    }, [])

    useEffect(() => {
        if (document.querySelector(".close") !== null) {
          document
            .querySelector(".close")
            .addEventListener("click", () => setVisibility(false));
        }
      });

    // type é adicionado para ser dinamico
    return (
        // condicional visibility para a mensagem aparecer
        visibility && (
            <div className={`${styles.message} ${styles[type]}`}>{message}</div>
        )
    )
}

export default Message