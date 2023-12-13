export const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/produtos">Produtos</a>
                </li>
            </ul>
        </header>
    );
};

const Titulo = (props) => {
    return <h1 style={{ color: "#4c8b64" }}>{props.texto}</h1>;
};

export const ProdutosComponentes = ({ titulo, cor, children }) => {
    const produtos = [
        { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
        { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
    ];

    return (
        <div>
            <Titulo texto="Produtos" />
            {produtos.map(({ nome, propriedades }) => (
                <div key={nome} style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
                    <h3>{nome}</h3>
                    <ul>
                        {propriedades.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export const Home = () => {
    return (
        <div>
            <Titulo texto="Home" />
            <p>Essa é a home</p>
        </div>
    );
};
