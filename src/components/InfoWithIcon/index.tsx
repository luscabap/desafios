import { TInfoWithIcon } from "../../types/TInfoWithIcon"

export const InfoWithIcon = ({ text, icon, directionPrimay = true, ...rest }: TInfoWithIcon) => {
  return (
    <div { ...rest } className={`flex items-center justify-center gap-2 ${directionPrimay ? "flex-row" : "flex-row-reverse"}`}>
      <>{icon}</>
      {text}
    </div>
  )
}