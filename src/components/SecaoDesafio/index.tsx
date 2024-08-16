import { ReactNode } from "react"

type Props = {
  title: string,
  children: ReactNode
}

export const SecaoDesafio = ({ children, title }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}