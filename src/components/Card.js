
export default function Card(props) {
    return (<div id={props.id} className="card">
        <p className="card-big-number">{`${props.number} ${props.measurement ? props.measurement : ''}`}</p>
        <h3 className="card-title">{props.title}</h3>
    </div>)
}