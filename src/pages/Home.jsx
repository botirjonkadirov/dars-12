import React, { useState } from 'react'
import Recipie from './Recipie'
import { useFetch } from '../../hooks/useFetch'

function Home() {
  const url = 'https://recondite-pastoral-ocean.glitch.me/recipes'
  const {data:recipe, isPending, error} = useFetch(url)
  console.log(recipe)
  return <>{recipe && <Recipie recipe={recipe}/>}</>
  
}

export default Home