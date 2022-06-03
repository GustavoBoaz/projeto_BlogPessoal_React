interface Usuario {
    id: number;
    nome?: string| null;
    email?: string| null;
    senha?: string| null;
    foto?: string| null;
    tipo?: string| null;
}

export default Usuario;