import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const SecaoDesafio = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  )
}