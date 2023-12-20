import './Select.scss'

function Select(props) {
    
    const onChangeTxt = (ev) => {
        props.onChangeTxt(ev.target.value)
    }

    return (
        <div className='select'>
            <label>{props.valueName}</label>
            <select value={props.value} onChange={onChangeTxt}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Select;