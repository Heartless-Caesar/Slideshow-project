import React, { useContext } from 'react'
import { ContextProvider } from './main';

const Content : React.FC = () => {
const {index, API, setIndex} = useContext(ContextProvider)


          return(<div className="content-div">
              {API.map((item, itemIndex)=>{
              const {id, imageUrl, firstName, lastName} = item;
              
              let slideClass = "nextSlide"; 
              if(itemIndex === index){
                  slideClass = "currentSlide";
              }
              if(itemIndex === 0 || (itemIndex === 0 && itemIndex === API.length - 1)){
                slideClass = "prevSlide";  
              }

              return(
               <article key={id} className={slideClass}>   
                <img src={imageUrl} alt="image" className="image"/>
                 <p className="text-div">
                     <h1>{firstName}</h1>
                     <h2>{lastName}</h2>
                 </p>
               </article>   
              )
              })}
              <button type="button" className="prev" onClick={() => setIndex(index - 1)}>Left</button>
              <button type="button" className="next" onClick={() => setIndex(index + 1)}>Right</button> 
          </div>)}

export default Content          