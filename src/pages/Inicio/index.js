import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import videos from 'json/db.json';
import style from './inicio.module.css'

function Inicio() {
    return (
        <>

            <Banner imagem="home" />
            <Titulo>
                <h1>Este é o titulo da pagina</h1>
            </Titulo>

            <section className={style.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>




        </>

    )
}

export default Inicio;