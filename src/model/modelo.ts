import { Acessorio } from "./Acessorio";
import { ProdutoController } from "../Controller/ProdutoController";

// Cadastrar produto
export const controller = new ProdutoController();

// Produtos Cadastrados
const pulseira = new Acessorio("Vivara",124586, "Pulseira de diamante", 5.000, 3) 
const relogio = new Acessorio("Vivara", 953465, "Relógio Feminino", 2.000, 5) 
  
controller.cadastrar(pulseira);
controller.cadastrar(relogio);

// Listar todos
controller.listarTodos();

// Buscar produto
const produtoEncontrado = controller.buscar(1);
if (produtoEncontrado) produtoEncontrado.visualizar();

// Atualizar
export const pulseiraAtualizado = new Acessorio("Vivara", 1455258, "Colar de diamantes", 15000, 4);
// Deletar
controller.deletar(2);

// Listar novamente
controller.listarTodos();


// Atualizar
controller.atualizar( 15254, "Colar de diamantes", 15000, 4, "Vivara");
