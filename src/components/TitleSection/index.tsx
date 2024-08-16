type TTitleSection = {
  text: string
}

export const TitleSection = ({ text }:TTitleSection) => {
  return (
    <h2>{text}</h2>
  )
}