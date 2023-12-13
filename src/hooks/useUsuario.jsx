import { useCallback, useState } from "react";
import { forms } from "../constant";

export const useUsuario = () => {
    const [form, setForm] = useState(forms);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const postUsuario = useCallback(async () => {
        let response = {};

        try {
            setError(null);
            setLoading(true);
            response = await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            }).then((response) => {
                return response;
            });
        } catch (error) {
            setError(error.message || "ocorreu algum erro!");
        } finally {
            setLoading(false);
            return response;
        }
    }, [form]);

    return { postUsuario, form, setForm, error, loading };
};
