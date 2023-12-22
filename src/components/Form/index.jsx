import TextField from '../TextField';
import Select from '../Select'
import './Form.scss'
import Button from '../Button';
import { useState } from 'react';


function Form(props) {

    const onSave = (ev) => {
        ev.preventDefault()
        console.log("Form foi submetido => ", name, job, image, team)

        setName("")
        setJob("")
        setImage("")
        setTeam("Programação")

        const collaborator = {
            name,
            job,
            image,
            team
        }

        props.saveCollaborator(collaborator)
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
                    itens = {props.teams} 
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