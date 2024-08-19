import { HTMLAttributes, ReactNode } from "react";
import { IconBaseProps } from "react-icons";

export type TInfoWithIcon = {
  text: string,
  icon: IconBaseProps | ReactNode,
  directionPrimay?: boolean
} & HTMLAttributes<HTMLDivElement>;