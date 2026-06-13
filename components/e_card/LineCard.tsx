import React from 'react'
import Image from 'next/image'
import '@/components/e_card/LineCard.css'

interface data{
    title: string,
    description: string,
    image: string,
}


export default function LineCard({data}: {data: data}) {
  return (
    <div className="line-card">
        <div className="line-card-left">
            <Image
            src={data.image}
            alt="imagen ejercicio"
            width={67}
            height={67}
            />
            <div>
                <h1 className="line-card-title">{data.title}</h1>
                <p className="line-card-description">{data.description}</p>
            </div>
        </div>
        <div className="line-card-right">
            <Image
            src="/ico.svg"
            alt="imagen ejercicio"
            width={24}
            height={24}
            />
        </div>
    </div>
  )
}
