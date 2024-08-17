import { useEffect, useState } from "react";
import { motion } from "framer-motion"

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
    <motion.h2 
      className={`${sizeText} ${contrast ? "bg-slate-500" : "bg-transparent"} rounded-lg p-2`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.2 }}
    >{text}</motion.h2>
  )
}