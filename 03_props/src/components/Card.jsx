import React from 'react'

const Card = (props) => {
  console.log(props.user)
  return (
    <div className='parent'>
      <div className="card">
        <img src={props.src} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Age is {props.age}  </p>
        <button>view profile</button>
      </div>
    </div>
  )
}

export default Card
