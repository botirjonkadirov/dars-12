import React from 'react'
import { Link } from 'react-router-dom';
function Recipie({recipe}) {
  console.log(recipe)
  return (
    <ul className='grid place-items-center gap-4 mb-auto lg:grid-cols-3 md:grid-cols-1'>
       {recipe&& recipe.map((r)=>{
          const {id, img, ingredients, title, cookingTime, method } = r;
         return (
         <li className='w-full md:max-w-full bg-base-100 image-full' key={id}>
          <div className="w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt={title} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{cookingTime}</p>
    <div className="card-actions">
      <Link className="btn btn-primary" to={`recipes/${id}`}>Read More</Link>
    </div>
  </div>
</div>
        </li>)
       })}
    </ul>
  )
}

export default Recipie