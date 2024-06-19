import { Usuario } from "@prisma/client";

const usuarios: Usuario[] = [
    {
        id: "1",
        email: "ana@empresa.com.br",
        nome: "Ana Silva",
        senha: "123456"
    },
    {
        id: "2",
        email: "carlos@empresa.com.br",
        nome: "Carlos José",
        senha: "123456"
    },
    {
        id: "3",
        email: "lucia@empresa.com.br",
        nome: "Lucia Fagundes",
        senha: "123456"
    },
    {
        id: "4",
        email: "pedro@empresa.com.br",
        nome: "Pedro Santos",
        senha: "123456"
    },
]

export default usuarios