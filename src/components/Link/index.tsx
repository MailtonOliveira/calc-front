import "./styles.css";

interface LinkProps {
    texto: string;
    redirect: string;
}

function Link(props: LinkProps) {
    return (
        <a href={props.redirect} target="_blank" rel="noreferrer">{props.texto}</a>
    );
}

export default Link;