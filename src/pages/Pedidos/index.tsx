import React, { useState } from "react";

import {
    CardapioContainer,
    CardapioItem,
    Container,
    PedidoAtual,
    PedidoItem,
    PedidosContainer,
    QuantityControls,
    ButtonAddQuantity,
    ButtonRemoveQuantity,
    QuantitySelect
} from "./styles";

const data = [
    { id: 1, nome: "X-Burguer", preco: 15.00 },
    { id: 2, nome: "X-Salada", preco: 12.00 },
    { id: 3, nome: "X-Tudo", preco: 19.00 },
    { id: 4, nome: "X-Bacon", preco: 17.00 },
    { id: 5, nome: "Coca-Cola", preco: 5.00 },
    { id: 6, nome: "Suco Natural", preco: 7.00 }
];

interface Item {
    id: number;
    nome: string;
    preco: number;
}

interface PedidoItem {
    item: Item;
    quantidade: number;
}

const Pedidos = () => {
    const [pedido, setPedido] = useState<PedidoItem[]>([]);

    const adicionarItem = (item: Item) => {
        setPedido((prevPedido) => {
            const itemExistente = prevPedido.find((pedidoItem) => pedidoItem.item.id === item.id);
            
            if (itemExistente) {
                return prevPedido.map((pedidoItem) => 
                    pedidoItem.item.id === item.id
                        ? { ...pedidoItem, quantidade: pedidoItem.quantidade + 1 }
                        : pedidoItem
                );
            } else {
                return [...prevPedido, { item, quantidade: 1 }];
            }
        });
    };

    const alterarQuantidade = (itemId: number, quantidade: number) => {
        setPedido((prevPedido) => 
            prevPedido
                .map((pedidoItem) =>
                    pedidoItem.item.id === itemId
                        ? { ...pedidoItem, quantidade: Math.max(1, pedidoItem.quantidade + quantidade) }
                        : pedidoItem
                )
                .filter((pedidoItem) => pedidoItem.quantidade > 0)
        );
    };

    const totalCompra = pedido.reduce((acc, pedidoItem) => acc + (pedidoItem.item.preco * pedidoItem.quantidade), 0);

    return (
        <Container>
            <h1>Novo Pedido</h1>
            <PedidosContainer>
                <CardapioContainer>
                    <h2>Cardápio</h2>
                    {data.map((item) => (
                        <CardapioItem key={item.id} onClick={() => adicionarItem(item)}>
                            <span>{item.nome}</span>
                            <span>R$ {item.preco.toFixed(2)}</span>
                        </CardapioItem>
                    ))}
                </CardapioContainer>

                <PedidoAtual>
                    <h2>Pedido Atual</h2>
                    {pedido.length === 0 ? (
                        <span>Nenhum item adicionado</span>
                    ) : (
                        <span>Total: R$ {totalCompra.toFixed(2)}</span>
                    )}

                    {pedido.map(({ item, quantidade }) => (
                        <PedidoItem key={item.id}>
                            <span>{item.nome}</span>
                            <span>R$ {(item.preco * quantidade).toFixed(2)}</span>
                            <QuantityControls>
                                <ButtonRemoveQuantity onClick={() => alterarQuantidade(item.id, -1)}>-</ButtonRemoveQuantity>
                                <QuantitySelect type="number" readOnly value={quantidade} />
                                <ButtonAddQuantity onClick={() => alterarQuantidade(item.id, 1)}>+</ButtonAddQuantity>
                            </QuantityControls>
                        </PedidoItem>
                    ))}
                </PedidoAtual>
            </PedidosContainer>
        </Container>
    );
};

export default Pedidos;
