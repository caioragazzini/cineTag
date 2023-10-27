import { Link } from "react-router-dom";
import logo from './logo.png';
import style from  './Cabecalho.module.css'
import CabecalhoLink from "components/CabecalhoLink";


function Cabecalho() {
    return (
        <header className={style.cabecalho}>
            <Link to="./">
                <img alt="Cabecalho do cinetag" src={logo}></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>

            </nav>
        </header>
    )
}

export default Cabecalho;