import react,{useState} from "react";
import reactDom from "react-dom";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import './index';



const GiftexpertApp= () => {
    //const categories =['One Punch','Samurai X','Dragon Ball'];
   // const [categories,setCategories] = useState(['One Punch']);
    //useState(['One Punch','Samurai X','Dragon Ball']);
  
    //const handleAdd= () => {
        //setCategories([...categories,'El dia menos pensado']);
        //setCategories(['El dia menos pensado',...categories]);
       // setCategories(cats => [...cats,'el dia menos pensado']);
        //categories.push('El dia menos pensado');
    //} 
    //<button onClick={handleAdd}>Agregar</button>
    
        const [categories, setCategories] = useState(['One Punch']);
    
        return (
            <>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={ setCategories } />
                <hr />
    
                <ol>
                    {
                        categories.map( category  => (
                            <GifGrid 
                                key={ category }
                                category={ category }
                            />
                        ))
                    }
                </ol>
    
            </>
        )
    }
    export default GiftexpertApp;