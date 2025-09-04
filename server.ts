import app from "./src/app";

const PORT: number = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escutando em http://localhost:${PORT}`);
});
