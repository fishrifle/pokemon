import React, { useState, useEffect } from 'react'
import Counter from './Counter'
import axios from 'axios'

const Card = ({ item }) => {

  const [pokemon, setPokemon] = useState({});

  const [showAbilities, setShowAbilities] = useState(false);

  const [seeType, setSeeType] = useState(false);

  useEffect(() => {


    axios({
      method: "GET",
      url: item.url
    })
      .then(res => setPokemon(res.data))
      .catch(err => console.log("err", err))

  }, []);

  const toggleAbilities = () => {
    setShowAbilities(prevState => !prevState);
  }

  return (
    <>
      {console.warn("item", item)}


      <div style={{ border: "solid black 5px", marginTop: "20px", color: "black", fontWeight: 'bold', backgroundColor: "tan", width: "500px", height: "650px" }}>

        <p>
          {item?.name}
        </p>
        <p>
          {item?.url}

        </p>

        <img style={{ height: '125px', width: '125px' }} src={pokemon.sprites?.front_shiny} alt={item?.name} />
        <br></br>

        <button style={{ height: '60px', width: '90px', color: 'white', textAlign: 'center', backgroundColor: 'green' }} onClick={toggleAbilities}>
          {showAbilities ? "Close Abilities" : "Show Abilities"}
        </button>
        <br></br>

        {showAbilities &&




          pokemon?.abilities?.map((item) => {
            return (
              <div key={item.name} style={{ fontFamily: 'cursive' }}>
                {item?.ability.name}
              </div>
            )
          })




        }



        <br></br>

        <button onClick={() => setSeeType(!seeType)}>Type</button>
        {seeType && (
          pokemon.types?.map((typeItem, index) => (

            <div key={index}>{typeItem?.type.name}</div>
          ))
        )}
        <br></br>
        <Counter item={item} />
      </div>
    </>
  )
}
export default Card

