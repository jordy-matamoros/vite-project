import './App.css'
import { CardPokemon } from './components/CardPokemon/CardPokemon';
import { Contador } from './components/Contador/contador';
import { IPokemon, PokemonList } from './constants/PokemonList';


function App() {
  return (
  <>
  <h1>useState hook</h1>
    <Contador></Contador>

  <div style={{marginBottom: 2000}}></div>


  <h1>Pokemon list - clase 3</h1>
    {PokemonList.map((pokemon: IPokemon) => (
      <CardPokemon 
    id={pokemon.id} 
    name={pokemon.name} 
    types={pokemon.types} 
    img_url={pokemon.img_url}/>
    ))
    };
  </>  
  );
}

export default App
