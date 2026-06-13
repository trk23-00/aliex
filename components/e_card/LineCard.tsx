import React from 'react'
import Image from 'next/image'
import '@/components/e_card/LineCard.css'

export default function LineCard() {
  return (
    <div className="line-card">
        <div className="line-card-left">
            <Image
            src="/i1.png"
            alt="imagen ejercicio"
            width={67}
            height={67}
            />
            <div>
                <h1 className="line-card-title">Title</h1>
                <p className="line-card-description">Description</p>
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
