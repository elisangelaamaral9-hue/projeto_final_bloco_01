import { Acessorio } from "../model/Acessorio";

export class ProdutoController {
  private listaProdutos: Acessorio[] = [];

  // Cadastrar produto
  public cadastrar(produto: Acessorio): void {
    const existente = this.listaProdutos.find(p => p.etiqueta === produto.etiqueta);
    if (existente) {
      console.log(`\n Já existe um produto com a etiqueta ${produto.etiqueta}.`);
      return;
    }else{
        this.listaProdutos.push(produto);
        console.log("\n Produto cadastrado com sucesso!");
    }
  }

  // Listar todos
  public listarTodos(): void {
    if (this.listaProdutos.length === 0) {
      console.log("\n Nenhum produto cadastrado ainda.");
      return;
    }

    console.log("\nLista de Produtos:");
    this.listaProdutos.forEach(produto => produto.visualizar());
  }

  // Buscar por etiqueta
  public buscar(etiqueta: number): Acessorio | undefined {
    return this.listaProdutos.find(produto => produto.etiqueta === etiqueta);
  }

  // Atualizar produto
  public atualizar(marca: string, etiqueta: number, nome: string, preco: number, quantidade: number): void {
    const produto = this.buscar(etiqueta);

    if (produto) {
      produto.nome = nome;
      produto.etiqueta = etiqueta
      produto.preco = preco;
      produto.quantidade = quantidade;
      produto.marca = marca;
      console.log("\nProduto atualizado com sucesso!");
    } else {
      console.log("\nProduto não encontrado!");
    }
  }

  // Deletar produto
  public deletar(etiqueta: number): void {
    const index = this.listaProdutos.findIndex(produto => produto.etiqueta === etiqueta);

    if (index !== -1) {
      this.listaProdutos.splice(index, 1);
      console.log("\n Produto removido com sucesso!");
    } else {
      console.log("\nProduto não encontrado!");
    }
  }
}
