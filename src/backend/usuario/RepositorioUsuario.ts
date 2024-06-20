import { Usuario } from "@/core/model/Usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
  private static db: PrismaClient = new PrismaClient()

  static async listar () {
    return await this.db.usuario.findMany()

  }

  static async salvar (usuario: Usuario): Promise<Usuario>{
    const salvarUsuario = await this.db.usuario.upsert({
      where: {id: usuario.id},
      update: usuario,
      create: usuario
    })
    
    return salvarUsuario as Usuario


  }

  static async obterTodos ():Promise<Usuario[]> {
    const user = await this.db.usuario.findMany()
    return  user as Usuario[]

  }

  static async obterPorId (id: string): Promise<Usuario> {
    const usuario = await this.db.usuario.findUnique({where: {id}})

    return usuario as Usuario

  }
}