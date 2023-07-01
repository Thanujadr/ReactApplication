import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Dogdetails = ()=>{

    let {breed} = useParams();

    let [dog,setDog] = useState(null);
    let [error,setError] = useState(null);

    useEffect(()=>{
        const url = `https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${breed}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cab0ab8cf2mshc991fe29cfc2910p1022b6jsn3abe8d7e77e5',
		'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
	}
};

fetch(url, options)
.then((response)=>{return (response.json()); })
.then((data)=>{console.log(data[0]); setDog(data[0])})
.catch((err)=>{setError(err.message) });
    },[breed]);

    return(
       <div>
         <Navbar/>
       {dog ?  <div className="dogdetails"> 
           <div className="images">
           <img src={dog.img} alt="" srcset="" />
           </div>
            <div className="details">
                  <h2>Breed : {dog.breed}</h2>
                  <h3>Origin : {dog.origin}</h3>
                  <h4>Colour : {dog.meta.colour}</h4>
                  <h4>Male Dog Height : {dog.meta.height.dogs}</h4>
                  <h4>Male Dog Weight : {dog.meta.weight.dogs}</h4>
                  <h4>Female Dog Height : {dog.meta.height.bitches}</h4>
                  <h4>Female Dog Weight : {dog.meta.weight.bitches}</h4>
                  <h4>Other names : {dog.meta.other_names}</h4>
                  <p>About : {dog.meta.notes}</p>
                  <p>Know more : <a href={dog.url}>{dog.url}</a> </p>
            </div>
         </div> 
         : <h1>{error}</h1>}

       </div>
    )
}
export default Dogdetails;