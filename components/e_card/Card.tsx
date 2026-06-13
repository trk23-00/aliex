import React from 'react'
import Encabezado from './Encabezado'
import LineCard from './LineCard'
import '@/components/e_card/Card.css'

interface data{
    title: string,
    description: string,
    image: string,
}


export default function Card() {
  return (
    <div className='card'>
        <Encabezado count={4}/>
        <LineCard data={{
            title: "Puxada frontal",
            description: "3 séries x 12 repetições",
            image: "/i1.png"
        }}/>
        <LineCard data={{
            title: "Remada curvada",
            description: "3 séries x 12 repetições",
            image: "/i2.png"
        }}/>
        <LineCard data={{
            title: "Remada unilateral",
            description: "3 séries x 12 repetições",
            image: "/i3.png"
        }}/>
        <LineCard data={{
            title: "Levantamento terra",
            description: "3 séries x 12 repetições",
            image: "/i4.png"
        }}/>
    </div>
  )
}
