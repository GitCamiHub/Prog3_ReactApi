import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";

export const DCHeroes = () => {

const[heroes, setHeroes] = useState<IHeroes[]>([]);

const handleGetHeroesDc = () =>{
  const result = heroesData.filter((hero) => hero.publisher === "DC Comics");
  setHeroes(result);
};

// useEffect con dependencias vacias. Cuando el componente se renderiza por primera vez trae los heroes
useEffect(()=>{  
  handleGetHeroesDc();
},[]);

  return <ListHeroes heroes={heroes} title="Heroes DC Comics"/>
};
