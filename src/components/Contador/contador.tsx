import { useState, useEffect } from "react";
import { VistaContador } from "./VistaContador";

export interface contador {
    valor: number
}

export const Contador = () => {
    const [contador, setContador] = useState<contador>({valor: 0});
    useEffect(() => {
        console.log("Contador ", contador);
    }, [contador]);

    return <div>
        <div style={{border: "1px solid black", backgroundColor: "#f2f2f2"}}>
            <VistaContador contador={contador.valor} setContador={setContador}></VistaContador>
        </div>
    </div>;
}