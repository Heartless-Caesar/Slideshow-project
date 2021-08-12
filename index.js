import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {data} from './data';
import './index.css'

const DataContext = React.createContext();


const Index = () => {
    const [concepts, setConcepts] = useState(data);
    const [index, setIndex] = useState(0);

    return(
        <DataContext.Provider value={{concepts, index, setIndex}}>
          <Content/>
        </DataContext.Provider>
    )
}

const Content = () => {
    const {concepts, index, setIndex} = useContext(DataContext)

    return(
       <>
        <section className="section">
         <div className="section-center">
          {concepts.map(( concept, conceptIndex )=>{
            const {id, image, name, desc} = concept;

            let position = 'nextSlide'
            if(conceptIndex === index){
                position = 'activeSlide'
            }
            if(conceptIndex === index - 1 || (index === 0 && conceptIndex === concepts.length - 1)){
                position='lastSlide'
            }
            return(
                <article className={position} key={id}>
                   <img src={image} alt="image" className="image"/>
                   <h1 className="title">{name}</h1>
                   <span className="description">{desc}</span>
                </article>)
               })
           }
           <button className="prev" type="button" onClick={()=> setIndex(index -1 )}><i className="fas fa-chevron-left"></i></button>
           <button className="next" type="button" onClick={()=> setIndex(index + 1)}><i className="fas fa-chevron-right"></i></button>
          </div>
         </section>
        </>
    )
}

const App = () => {
    return(
     <>
      <Index/>
     </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
