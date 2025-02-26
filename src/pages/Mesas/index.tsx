import React from "react";

import {
    Container,
    MesaCardLivre,
    MesaCardOcupada,
    MesasContainer
} from "./styles";

const mesas = [
    {
        id: 1,
        status: "Ocupada",
        tempo: "41 min"
    },
    {
        id: 2,
        status: "Livre"
    },
    {
        id: 3,
        status: "Livre",
        tempo: "15 min"
    },
    {
        id: 4,
        status: "Ocupada"
    },
    {
        id: 5,
        status: "Ocupada",
        tempo: "30 min"
    },
    {
        id: 6,
        status: "Livre"
    },
    {
        id: 7,
        status: "Livre",
        tempo: "10 min"
    },
    {
        id: 8,
        status: "Livre"
    },
    {
        id: 9,
        status: "Ocupada",
        tempo: "20 min"
    },
    {
        id: 10,
        status: "Livre"
    },
    {
        id: 11,
        status: "Ocupada",
        tempo: "25 min"
    },
    {
        id: 12,
        status: "Ocupada"
    },
]

const Mesas = () => {
    return (
        <Container>
            <h1>Mesas</h1>
            <MesasContainer>
                {mesas.map((mesa) => {
                    if (mesa.status === "Ocupada") {
                        return (
                            <MesaCardOcupada key={mesa.id}>
                                <span>Mesa {mesa.id}</span>
                                <span>{mesa.status}</span>
                                <span>{mesa.tempo}</span>
                            </MesaCardOcupada>
                        )
                    } else {
                        return (
                            <MesaCardLivre key={mesa.id}>
                                <span>Mesa {mesa.id}</span>
                                <span>{mesa.status}</span>
                            </MesaCardLivre>
                        )
                    }
                }
                )}
            </MesasContainer>
        </Container>
    )
};

export default Mesas;