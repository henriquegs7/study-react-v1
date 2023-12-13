import React from "react";
import { Header, Home, Luana, Produtos, Titulo, ProdutosComponentes, Formulario } from "./components";

function App() {
    const { pathname } = window.location;
    let Component;

    if (pathname === "/produtos") {
        Component = ProdutosComponentes;
    } else {
        Component = Home;
    }

    return (
        <>
            {/* <Titulo titulo="esse é meu titulo 1" cor="blue" />
            <Titulo titulo="esse é meu titulo 2" cor="red">
                esse é meu children
            </Titulo> */}

            {/* <Header />
            <Component /> */}

            <Formulario />
        </>
    );
}

export default App;
