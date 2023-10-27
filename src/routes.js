import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Favoritos from "pages/Favoritos";
import Rodape from "components/Rodape";
import FavoritosProvider from "contextos/Favoritos";

const { default: Inicio } = require("pages/Inicio");
const { BrowserRouter, Route, Routes } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho></Cabecalho>
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} ></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>

                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape></Rodape>
        </BrowserRouter >
    )
}

export default AppRoutes;