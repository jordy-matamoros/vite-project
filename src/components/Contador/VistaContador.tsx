import { contador } from "./contador";

interface IVistaContadorProps {
    contador: number;
    setContador: React.Dispatch<React.SetStateAction<contador>>;
}

export const VistaContador = ({
    contador,
    setContador,
    }: IVistaContadorProps) => {
        const sumar = () => {
            setContador({valor: contador + 1});
        };

        const restar = () => {
            setContador({valor: contador - 1});
        }

        return <div>
            <h2>El contador es: {contador}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
            
    }
