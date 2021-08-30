import './Heading.css'

const Heading = (props) => {

    return <h2 className={props.text}>{props.text}</h2>;
}

export default Heading;