import { TCardMembro } from "../../types/TCardMembro"

export const CardMembro = ({ email, funcao, nome }: TCardMembro) => {
  return (
    <div className="bg-slate-400 flex flex-col items-center justify-center text-black p-2 rounded-lg flex-1 text-center">
      <h4>{nome}</h4>
      <span>{funcao}</span>
      <address>{email}</address>
    </div>
  )
}