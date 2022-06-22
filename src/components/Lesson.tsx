import React from 'react'

export default function Lesson() {
  return (
    <a href="#">
      <span className='text-gray-300'>
        Terça • 22 de junho • 19h00
      </span>
      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          <span className='text-sm font-medium text-blue-500'>
            Conteúdo liberado
          </span>
          <span className='text-xs rounded py-[0.125rem] px-2 text-green-300 border border-green-300 font-bold'>
            AO VIVO
          </span>
        </header>
        <strong className='mt-5 block text-gray-200'>Abertura do evento Ignite labs</strong>
      </div>
    </a>
  )
}
