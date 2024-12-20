import sytles from './Input.module.css'

// {...(multiple ? {multiple} : '')} para as imagens, se um multiple veio imprime o multiple, senão deixa vazio
function Input({type, text, name, placeholder, handleOnChange, value, multiple}) {
    return (
        <div className={sytles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} {...(multiple ? {multiple} : '')} />
        </div>
    )
}

export default Input