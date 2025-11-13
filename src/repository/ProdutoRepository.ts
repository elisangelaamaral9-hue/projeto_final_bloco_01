// src/repository/ProdutoRepository.ts
import { Produto } from "../model/Produto"

export interface ProdutoRepository {
  listarTodos(): void
  buscar(etiqueta: number): void
  cadastrar(produto: Produto): void
  atualizar(produto: Produto): void
  deletar(etiqueta: number): void
}
