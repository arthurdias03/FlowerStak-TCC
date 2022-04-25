import { ItensPedidos } from "./itensPedidos";

export class Pedidos {
    activeToggle: boolean;
    numeroPedido: string;
    produtos: Array<ItensPedidos>;
    dataPedido: string;
    valorFrete: string;
    valorTotalComFrete: string;
    FormaPagamento: string;
    valorTotalProdutos: string;

    constructor() {
        this.activeToggle = false;
        this.numeroPedido = '';
        this.dataPedido = '';
        this.valorFrete = '';
        this.valorTotalComFrete = '';
        this.FormaPagamento = '';
        this.produtos = new Array<ItensPedidos>();
        this.valorTotalProdutos = '';
    }
}