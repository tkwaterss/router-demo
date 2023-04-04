import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const DetailScreen = () => {
  const {id} = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
      setPokemon(res.data);
    })
  }, [id])

  return (
    <div>
        <h1>DetailScreen</h1>
        <h2>{id}</h2>
        <img src={pokemon?.sprites?.other["official-artwork"]?.front_default} />
    </div>
  )
}

export default DetailScreen