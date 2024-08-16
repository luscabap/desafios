import { useEffect, useState } from "react"

type TTitleSection = {
  text: string,
  size?: "small" | "normal" | "large"
  contrast?: boolean
}

export const TitleSection = ({ text, contrast = false, size = "normal" }:TTitleSection) => {

  const [sizeText, setSizeText] = useState("text-base")

  useEffect(() => {
    switch (size) {
      case "small":
        return (
          setSizeText("text-sm")
        )
      case "normal":
        return (
          setSizeText("text-base")
        )
      case "large":
        return (
          setSizeText("text-2xl")
        )
      default:
        break;
    }
  }, [size])

  
  return (
    <h2 className={`${sizeText} ${contrast ? "bg-slate-500" : "bg-transparent"} rounded-lg p-2`}>{text}</h2>
  )
}