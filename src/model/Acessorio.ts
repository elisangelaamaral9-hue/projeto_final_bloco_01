// src/model/Acessorio.ts
import { Produto } from "./Produto"

export class Acessorio extends Produto {
  private _tipo: string

  constructor(
    id: number,
    nome: string,
    preco: number,
    quantidade: number,
    tipo: string
  ) {
    super(id, nome, preco, quantidade)
    this._tipo = tipo
  }

  public get tipo(): string {
    return this._tipo
  }

  public set tipo(tipo: string) {
    this._tipo = tipo
  }

  // Implementação do método abstrato
  public visualizar(): void {
    console.log("\n--------------------------------------")
    console.log("📦 Produto: Acessório")
    console.log(`ID: ${this.id}`)
    console.log(`Nome: ${this.nome}`)
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`)
    console.log(`Quantidade: ${this.quantidade}`)
    console.log(`Tipo: ${this.tipo}`)
    console.log("--------------------------------------")
  }
}
