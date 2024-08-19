import { 
  ConversaoTemperatura, 
  CalculoIMC,
  FigurasPlanas
} from "./Resolucoes/index"

export const RecordResolucoes: Record<string, React.ReactNode> = {
  ConversaoTemperatura: <ConversaoTemperatura />,
  CalculoIMC: <CalculoIMC />,
  FigurasPlanas: <FigurasPlanas />
}