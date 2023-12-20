import TextField from '../TextField';
import Select from '../Select'
import './Form.scss'
import Button from '../Button';
import { useState } from 'react';


function Form() {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const onSave = (ev) => {
        ev.preventDefault()
        console.log("Form foi submetido => ", name, job, image, team)
    }

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('Programação')

    return (
        <section className='card-form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <TextField
                    valueName = "Nome"
                    valueDesc = "Digite seu nome"
                    value = {name}
                    onChangeTxt = {value => setName(value)}
                />

                <TextField
                    valueName = "Cargo"
                    valueDesc = "Digite seu cargo"
                    value = {job}
                    onChangeTxt = {value => setJob(value)}
                />

                <TextField
                    valueName = "Imagem"
                    valueDesc = "Informe o endereço da imagem"
                    value = {image}
                    onChangeTxt = {value => setImage(value)}
                />

                <Select 
                    itens = {teams} 
                    valueName = "Time"
                    value = {team}
                    onChangeTxt = {value => setTeam(value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form;