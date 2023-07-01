import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = ()=>{

    let [dogs,setDogs] = useState(null);
    let [error,setError]=useState(null);
    
 useEffect(()=>{
    const url = 'https://dog-breeds2.p.rapidapi.com/dog_breeds';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cab0ab8cf2mshc991fe29cfc2910p1022b6jsn3abe8d7e77e5',
		'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
	}
};

fetch(url, options)
.then((response)=>{return (response.json());})
.then((data)=>{console.log(data); setDogs(data)})
.catch((err)=>{setError(err.message) });

 },[]);
  

    return (
     <div>
       <Navbar/>   
        <div className="home">

           {dogs &&
                    <div className="doglist">
                                    {dogs.map((dog)=>{ return (

                                            <div className="dog">

                                                <Link to={`/dogdetails/${dog.breed}`} id="detaillink">   
                                                            <img src={dog.img} width="200px" height="200px" />
                                                            <h2> {dog.breed}</h2>
                                                            <h3>{dog.origin}.</h3>
                                                </Link> 

                                            </div>

                                    )})}
                                </div>
          }
          
         </div>
    </div>     
           )
}

export default Home;