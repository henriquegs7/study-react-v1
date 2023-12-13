import { useEffect, useState } from "react";

const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
        { nome: "Notebook", preco: "R$ 2500" },
        { nome: "Geladeira", preco: "R$ 3000" },
        { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
};

const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
        { nome: "Notebook", preco: "R$ 2500" },
        { nome: "Geladeira", preco: "R$ 3000" },
        { nome: "Smartphone", preco: "R$ 1500" },
        { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
};

const RealizaSoma = (cliente) => cliente.compras.map(({ preco }) => Number(preco.replace("R$ ", ""))).reduce((a, b) => a + b);

export const Luana = () => {
    const [cliente, setCliente] = useState(luana);
    const [somaCompras, setSomaCompras] = useState(RealizaSoma(luana));
    const [isTroca, setIsTroca] = useState(true);

    useEffect(() => {
        const TrocarCliente = () => {
            setCliente(isTroca ? luana : mario);
            setSomaCompras(RealizaSoma(cliente));
        };
        TrocarCliente();
    }, [cliente, isTroca]);

    return (
        <div>
            <p>Nome: {cliente.cliente}</p>
            <p>Idade: {cliente.idade}</p>
            <p>
                Situação: <span style={{ color: cliente.ativa ? "green" : "red" }}>{cliente.ativa ? "Ativo" : "Inativo"}</span>
            </p>
            <p>Total gasto: R$ {somaCompras}</p>
            {somaCompras > 10000 && <p>Você esta gastando muito</p>}
            <button onClick={() => setIsTroca(!isTroca)}>Trocar de Cliente</button>
        </div>
    );
};
