import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";


export const MarvelHeroes = () => {

  const[heroes, setHeroes] = useState<IHeroes[]>([]);
  
  const handleGetHeroesMarvel = () =>{
    const result = heroesData.filter((hero) => hero.publisher === "Marvel Comics");
    setHeroes(result);
  };
  
  // useEffect con dependencias vacias. Cuando el componente se renderiza por primera vez trae los heroes
  useEffect(()=>{  
    handleGetHeroesMarvel();
  },[]);
  
    return <ListHeroes heroes={heroes} title="Heroes Marvel Comics"/>
  };
