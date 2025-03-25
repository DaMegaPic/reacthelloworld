import "./css/Tree.css";

function Tree(props) {
    return (
        <section className="tree">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img src={props.img}></img>
        </section>
    );
}

export default Tree;