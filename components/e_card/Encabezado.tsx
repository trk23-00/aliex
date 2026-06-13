import React from 'react'
import '@/components/e_card/Encabezado.css'

interface Data {
  count: number;
}

export default function Encabezado({count}: Data) {
  return (
    <div className="line-encabezado">
        <span className='line-encabezado-title'>Exercícios</span>
        <span className='line-encabezado-count'>{count}</span>
    </div>
  )
}
