import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';


const ComPoke = () => {
    const [poke, setPoke] = useState([])

    const [search, setSearch] = useState("")


    useEffect(() => {



        axios({
            method: 'GET',
            url: ("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")        })
            .then(res => {
                setPoke(res.data.results);
                // console.log(res.data);
            })
            // .then(res => {
            //     setSearch(res.search.results)
            //     console.warn(res.search);
            //   )  }
            .catch(err => console.log("error", err));
    }, [])

    const handleChange = (e) => {
        console.log("handleChange", e.target.value)
        setSearch(e.target.value)



    }


    return (
        <>
            {console.warn("SEARCH VALUE", search)}
            {console.warn("POKE", poke)}
            <div>Pokemon</div>

            <input onChange={(e) => handleChange(e)} placeholder="Search"></input>


            {search.length >= 1 
            ?
                (

                    poke.filter((item) => item?.name.startsWith(search)).map((item, i) => {
                        return (
                            <Card 
                            
                            key={item.name} 
                            item={item} 
                            handleChange={handleChange} />


                        )






                    })
                )
                :
                (
                    poke.map((item, i) => {


                        return (


                            <Card key={item.name} item={item} 

                            handleChange={handleChange}/>



                        )

                    }
                    )


                )
            }


        </>
    )
}

export default ComPoke