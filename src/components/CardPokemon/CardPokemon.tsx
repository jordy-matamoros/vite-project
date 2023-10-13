import { IPokemon } from "../../constants/PokemonList";
import { NameStyles, cardContainerStyles } from "./Styles/CardPokemonStyles";


export const CardPokemon = ({name, id, img_url, types}: IPokemon) => {
    console.log(types);

    return (
    <div style={{...cardContainerStyles, 
        backgroundColor: types.includes("grass") ? "green": ""}}>
        <img
        style={{
            backgroundColor: "#f2f2f2", 
            borderRadius: "10px 10px 0px 0px",
        }}
        src={img_url}/>
        
        <div style={NameStyles}>
            <p>{id}</p>
            <h3>{name}</h3>
        </div>
        
    </div>
    );
};

