import React, { useState, useEffect } from 'react'
import Counter from './Counter'
import axios from 'axios'
// import "./Card.css"


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
      {/* {console.warn("item", item)} */}


      <div style={{ border:'solid 10px black', margin: '20px 20px 20px 20px',  color: "black", fontSize: "larger", fontWeight: 'bold', backgroundColor: "green", width: "100%", height: "60%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>

        <p>
          {item?.name}
        </p>
    <p>
          {item?.url}

        </p>

        <img style={{ height: '7rem', width: '7rem', }} src={pokemon.sprites?.front_shiny} alt={item?.name} />
        <br></br>

        <button style={{ display: "flex", height: '4rem', width: '10rem',  textAlign: 'center', backgroundColor: 'black', color: "white", JustifyContent: "center", alignItems: "center",  }} onClick={toggleAbilities}>
          {showAbilities ? "" : "SHOW ABILITIES"}
        </button>
        <br></br>

        {showAbilities &&




          pokemon?.abilities?.map((item) => {
            return (
              <div key={item.name} style={{ fontSize: 'larger', color: 'black'  }}>
                {item?.ability.name}
              </div>
            )
          })




        }



        <br></br>

        <button style={{height: '4rem', width: '10rem', color: 'white', backgroundColor: 'black'}} onClick={() => setSeeType(!seeType)}>MY TYPE</button>
        {seeType && (
          pokemon.types?.map((typeItem, index) => (

            <div style={{color: 'black', fontSize: 'larger', fontWeight: 'bold',}} key={index}>{typeItem?.type.name}</div>
          ))
        )}
        <br></br>
        <Counter item={item} />
      </div>
    </>
  )
}
















export default Card


