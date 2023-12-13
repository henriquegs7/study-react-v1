export const Titulo = ({ titulo, cor,children }) => {
    return (
        <div style={{ color: cor }}>
            <h1>{titulo}</h1>
            <p>{children}</p>
        </div>
    );
};
