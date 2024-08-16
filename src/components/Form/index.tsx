import { ChangeEvent, useState } from "react"
import { TForm } from "../../types/TForm";

export const Form = ({ name, username }:TForm<string>) => {
  const [data, setData] = useState<TForm<string> | null>(() => ({ name, username }));

  function handleValue(e: ChangeEvent<HTMLInputElement>){
    console.log("name do input " + e.target.name + " valor inserido " + e.target.value);
    
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <form action="" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input type="text" value={data?.name} onChange={handleValue} name="name"/>
      <input type="text" value={data?.username} onChange={handleValue} name="username"/>
    </form>
  )
}