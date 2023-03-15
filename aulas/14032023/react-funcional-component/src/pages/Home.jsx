import axios from 'axios';
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { products } from '../utils/products';
import './Home.css';

export function Home() {
  const [name, setName] = useState('cassio')
  const [count, setCount] = useState(0)
  const [chuckNorrisJoke, setChuckNorrisJoke] = useState('')

  useEffect(() => {
    setName(`wendel ${new Date()}`)
  }, [count])

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/random').then(res => setChuckNorrisJoke(res.data.value))
  }, [count])

  return (
    <>
      <Header 
        name="Cassio Oliveira Silva" 
        avatar="https://github.com/intwone.png"
        email="cassio@digitalhouse.com.br"
      />

      <div className="cards-container">
        {products.map(product => {
          return <Card 
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        })}
      </div>

      {name}

      <button onClick={() => setCount((oldCount) => oldCount + 1)}>Increment</button>

      {chuckNorrisJoke}
    </>
  )
}