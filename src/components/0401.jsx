import { useState } from "react";
import { useUsuario } from "../hooks";
import { formFields } from "../constant";

export const Formulario = () => {
    const [resultado, setResultado] = useState(null);

    const { postUsuario, form, setForm, error, loading } = useUsuario();

    const handleChange = ({ target }) => {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await postUsuario(form);
        setResultado(response);
    };

    return (
        <form onSubmit={handleSubmit}>
            {formFields.map(({ id, label, type }, index) => (
                <div key={id + index}>
                    <label htmlFor={id}>{label}</label>
                    <input type={type} id={id} value={form[id]} onChange={handleChange} />
                </div>
            ))}
            {resultado && resultado.ok && <p>Usuário Criado</p>}
            <button>Enviar</button>
        </form>
    );
};
