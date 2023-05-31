import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext_71 = React.createContext();

const AppProvider_71 = ({ children }) => {
  const [loading, settLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails,setCocktails] =useState([]);

  const fetchDrink = async () => {
   settLoading(true);
   try{
      const response =await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log('drink',data);
      const { drinks } = data; 
      if(drinks){
        const newCocktails = drinks.map((item)=>{
          const {idDrink,strAlcoholic,strDrink,strDrinkThumb,strGlass} = item;   
          return {
            id: idDrink,
            name : strDrink,
            image : strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails);
      }else{
       setCocktails([]);
      }
      settLoading(false);
   }catch(error){
     console.log(error);
     settLoading(false);
   }   
  }

  useEffect(()=>{
    fetchDrink();
  }, [searchTerm]);

  return (
    <AppContext_71.Provider value={{loading,cocktails,setSearchTerm,searchTerm}}>{children}</AppContext_71.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext_71);
};

export { AppContext_71, AppProvider_71 };
