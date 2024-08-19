import { HTMLAttributes, ReactNode } from "react";
import { IconBaseProps } from "react-icons"

type TInfoWithIcon = {
  text: string,
  icon: IconBaseProps | ReactNode,
  directionPrimay?: boolean
} & HTMLAttributes<HTMLDivElement>;

export const InfoWithIcon = ({ text, icon, directionPrimay = true, ...rest }: TInfoWithIcon) => {
  return (
    <div { ...rest } className={`flex items-center justify-center gap-2 ${directionPrimay ? "flex-row" : "flex-row-reverse"}`}>
      <>{icon}</>
      {text}
    </div>
  )
}