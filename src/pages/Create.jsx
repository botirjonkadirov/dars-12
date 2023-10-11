import React from 'react'

function Create() {
  return (
    <div className='flex flex-col mx-auto'>
        <h1 className='my-3 text-2xl text-center'>Write your recipe</h1>
        <form className=' flex flex-col gap-4'>
      <div className='flex flex-col w-full position-absolute gap-4'>
      <input type="text" placeholder="Title" className=" input input-bordered input-primary w-full max-w-xs" />
        <input type="text" placeholder="Ingridient" className="input input-bordered input-primary w-full max-w-xs" />
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
      </div>
        <button className='btn btn-success w-20' type='submit'>Create</button>
        </form>
    </div>
  )
}

export default Create