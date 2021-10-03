import React,{useEffect, useState, useContext} from 'react';
import Data from './Data.json';
import ContentBody from './ContentBody'

export const ContextProvider = React.createContext(null);


const Main : React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const API = Data;
    
    useEffect(() => {
    let lastSlide = API.length - 1;
    if(index < 0){
        setIndex(lastSlide)
     }
    if(index > lastSlide){
        setIndex(0)
     }    
    },[index, API])
    
    useEffect(() => {
     let IndexInterval =  setTimeout(() => {
          setIndex(index + 1)
      },3000);
      return () => clearTimeout(IndexInterval)  
    },[index])

    return(
       <ContextProvider.Provider value={{index, API}}>
           <ContentBody/>
       </ContextProvider.Provider>          
    )
}

export default Main
