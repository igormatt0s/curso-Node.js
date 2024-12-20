import bus from '../utils/bus'

// emitir um evento que recebe a mensagem e o tipo
export default function userFlashMessage() {
    function setFlashMessage(msg, type) {
        bus.emit('flash', {
            message: msg,
            type: type,
        })
    }

    return {setFlashMessage}
}