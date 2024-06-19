import { Usuario } from "@/core/model/Usuario";
import Image from "next/image";

export interface LinhaUsuarioProps {
  usuario: Usuario
}
export default function LinhaUsuario(props: LinhaUsuarioProps) {
  return (
    <div className="flex bg-zinc-900 p-4 rounded-md items-center gap-5">
      <Image className="rounded-full"
        src="https://source.github.com/tricia-sz.png"
        width={80}
        height={80}
        alt="Avatar"
       />
      <div className="flex flex-col w-screen">
        <span className="text-xl font-black">{props.usuario.nome}</span>
        <span className="text-sm text-zinc-400">{props.usuario.email}</span>
      </div>
    </div>
  )
 
}