import React from 'react'
import Stripe from './stripe'

function Stripes() {

    const content = [
        {url: "comp.png", title:"Designing competition winner",num:3},
        {url: "hackathon.png", title:"Hackathon winner",num:2},
        {url: "runnerup.png", title:"Runner Ups",num:2},
        {url: "top.png", title:"Top 10s",num:4},
    ]
  return (
    
    <div className='flex '>
        {content.map((elem,i)=>(
            <Stripe key={i} val={elem}/>
        ))}
    </div>
  )
}

export default Stripes