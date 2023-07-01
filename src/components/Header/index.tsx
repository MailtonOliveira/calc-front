import Link from "../Link";
import "./styles.css";

function Header() {
    return (<header>
    <h1> Calc Storange </h1>
    <nav>
        <Link texto="Contato" redirect="/contato" />
        <Link texto="Star Atlas" redirect="https://play.staratlas.com/" />
        <Link texto="Faction Claims" redirect="https://play.staratlas.com/claims/" />
    </nav>
    </header>
   
    );
}

export default Header;