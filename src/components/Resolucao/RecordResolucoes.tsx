import { 
  ConversaoTemperatura, 
  CalculoIMC 
} from "./Resolucoes/index"

export const RecordResolucoes: Record<string, React.ReactNode> = {
  ConversaoTemperatura: <ConversaoTemperatura />,
  CalculoIMC: <CalculoIMC />
}