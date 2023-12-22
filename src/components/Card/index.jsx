import "./Card.scss"

function Card(props) {
    return (
        <div className="card">
            <div className="top" style={{backgroundColor: props.color}}>
                <img src={props.image} alt={props.name}></img>
            </div>
            <div className="bottom">
                <h4>{props.name}</h4>
                <h5>{props.job}</h5>
            </div>
        </div>
    )
}

export default Card