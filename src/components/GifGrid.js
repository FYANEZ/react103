import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
//import { getGifs } from '../helpers/getGifs';
//import { GifGridItem } from './GifGridItem'


export const GifGrid = ({ category }) => {

    const { data:images, loading }= useFetchGifs( category );
 
     //console.log(state);
    
   // ,{useState, useEffect}
 //const [images, setImages] = useState([]);
    
 //const [count, setCount] = useState(0)
//.then( imgs => setImages( imgs ));
 //useEffect ( ()=>{
 //   getGifs( category )
 //     .then( setImages);
 //},[ category ])
   //{ loading ? 'Cargando...' :'Data cargada'}
   

    return (
        <>
        <h3>{ category }</h3>
            
              { loading && <p>Loading</p>}  
          < div className="card-grid">  
            
            {
                  images.map( img => (
                      <GifGridItem 
                      key ={ img.id }
                       { ...img }
                       />
                  ))
              }

            
             
       </div>
        </>
    )
}

//{ loading ? 'Cargando...' :'Data cargada'}

//< div className="card-grid">
            
 //           <ol>
 //           {
 //                 images.map( img => (
 //                     <GifGridItem 
 //                     key ={img.id}
 //                      {...img }/>
 //                 ))
 //             }

 //           </ol>
             
 //     </div>




//images.map(({id, title})=>(
//    <li key={id}> {title}</li>
//images.map( img =>(
//    <li key={img.id}> {img.title}</li>
//))
//}
//<button onClick={()=> setCount( count + 1 )}></button>


//images.map( img => (
//    <GifGridItem 
//    key ={img.id}
//    img={ img }/>
//))
//}