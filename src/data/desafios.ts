import { v4 as uuidv4 } from "uuid"
import { TDesafio } from "../types/TDesafio"

export const desafios: TDesafio[] = [
  {
    id: uuidv4(),
    nome: "Conversão de Temperatura (C° -> °F)",
    slug: "conversao-temperatura",
    enunciado: "Crie um código que converta graus Celsius para Fahrenheit e vice-versa.",
    resolucao: "ConversaoTemperatura",
  },
  {
    id: uuidv4(),
    nome: "Calculadora IMC",
    slug: "calculadora-imc",
    enunciado: "Crie um código que faça o cálculo do IMC de uma pessoa.",
    resolucao: "ConversaoTemperatura",
  }
]