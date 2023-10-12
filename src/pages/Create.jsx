import React, { useEffect, useState } from 'react'
import {v4 as uuidv4 } from 'uuid'
import { useFetch } from '../../hooks/useFetch'
import { Navigate, useNavigate } from 'react-router-dom'
function Create() {
const[title, setTitle]= useState('')
const[cookingTime, serCookingTime]= useState('')
const[method, setMethod]= useState('')
const[img, setImg]= useState('')
const[igreient, setIngredient] = useState('')
const[igreients, setIngredients] = useState([])

const navgate = useNavigate()

const {data, isPending, error, getNewRecipe} = useFetch('https://recondite-pastoral-ocean.glitch.me/recipes', 'POST')

const handleadd = (e)=>{
  e.preventDefault()
  if (!igreients.includes(igreient)){
    setIngredients((p)=>{
      return [...p, igreient]
    })
  }
  setIngredient('')
}

const handlesubmit = (e)=>{
  e.preventDefault()
  getNewRecipe({
    id: uuidv4(),
    img,
    cookingTime: `${cookingTime} minutes`,
    method,
    title,
    igreients
  })
}
useEffect(()=>{
  if(data) navgate('/')
},[data])

  return (
    <div className='flex flex-col mx-auto'>
        <h1 className='my-3 text-2xl text-center'>Write your recipe</h1>
        <form onSubmit={handlesubmit} className='flex flex-col gap-4'>
        <div className='form-control w-full max-w-xs mb-4'>
          <label className='label'>
            <span className='label-text'>Title</span>          
          </label>
          <input 
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          type="text" 
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='form-control w-full max-w-xs mb-4'>
          <label className='label'>
            <span className='label-text'>Ingridients:</span>          
          </label>
         <div className='flex gap-5 mb-3'>
         <input 
         onChange={(e)=>setIngredient(e.target.value)}
         value={igreient}
          type="text" 
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs'
          />
          <button onClick={handleadd} className='btn btn-outline btn-success'>Add</button>
         </div>
         <p>
          ingredients:
          {igreients.map((e)=>{
              return <span key={e}> {e}, </span>
            })
          }
         </p>
        </div>
        <div className='form-control w-full max-w-xs mb-4'>
          <label className='label'>
            <span className='label-text'>Cooking time</span>          
          </label>
          <input 
          onChange={(e)=>serCookingTime(e.target.value)}
          value={cookingTime}
          type="text" 
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs'
          />
        </div>
        <div className='form-control w-full max-w-xs mb-4'>
          <label className='label'>
            <span className='label-text'>image url</span>          
          </label>
          <input 
          onChange={(e)=>setImg(e.target.value)}
          value={img}
          type="url" 
          placeholder='pass url'
          className='textarea input-bordered w-full max-w-xs'
          />
        </div>
        <div className='form-control w-full max-w-xs mb-4'>
          <label className='label'>
            <span className='label-text'>Method</span>          
          </label>
          <textarea 
          onChange={(e)=>setMethod(e.target.value)}
          value={method}
          type="text" 
          placeholder='Type here'
          className='textarea input-bordered w-full max-w-xs'
          ></textarea>
        </div>
        <button className='btn btn-success w-20' type='submit'>Create</button>
        </form>
    </div>
  )
}

export default Create