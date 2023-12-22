import './Team.scss'
import Card from '../Card'

function Team(props) {

    const cssBackground = { backgroundColor: props.secondaryColor }
    const cssH3 = { borderColor: props.primaryColor }

    // Renderização condicional
    return (
        (props.collaborators.length > 0) && <section className='team' style={cssBackground}>
            <h3 style={cssH3}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Card key={collaborator.name} color={props.primaryColor} name={collaborator.name} job={collaborator.job} image={collaborator.image}/>)}
            </div>
        </section>
    )
}

export default Team