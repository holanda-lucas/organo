import './TextField.scss'


function TextField (props) {
    // Usando a função passada no props para alterar o valor (também passado no props)
    const onChangeTxt = (ev) => {
        props.onChangeTxt(ev.target.value)
    }


    return (
        <div className='text-field'>
            <label>{props.valueName}</label>
            <input value={props.value} onChange={onChangeTxt} type="text" placeholder={props.valueDesc}/>
        </div>
    )
}

export default TextField;