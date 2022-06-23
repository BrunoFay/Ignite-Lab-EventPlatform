import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'
import React from 'react'

export default function VideoPlayer() {
  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>

        </div>
      </div>
      <div className='p-8 mx-auto max-w-[1100px]'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>
              Aula 01 - Criando o projeto e realizando o setup inicial
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
            </p>
            <div className='flex items-center gap-4 mt-6'>
              <img
                className='h-16 w-16 rounded-full border-2 border-blue-500'
                src="https://github.com/BrunoFay.png"
                alt=""
              />
              <div className='leading-relaxed'>
                <strong className='font-bold text-2xl block'>
                  Bruno Fay
                </strong>
                <span className='text-gray-200 text-sm block'>
                  Front-end developer
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <a
              href=""
              className='flex gap-2 justify-center items-center p-4 text-sm font-bold uppercase rounded hover:bg-green-700 bg-green-500'
            >
              <DiscordLogo size={24} />
              Comunidade discord
            </a>
            <a
              href=""
              className='flex gap-2 justify-center items-center p-4 text-sm font-bold uppercase rounded border border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors text-blue-500'
            >
              <Lightning size={24} />
              Acesse o dasafio
            </a>
          </div>
        </div>
      <div className='gap-8 grid grid-cols-2 mt-20'>
        <a
          className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
          href=""
        >
          <div className='bg-green-700 flex items-center h-full p-6'>
            <FileArrowDown size={40} />
          </div>
          <div className='py-6 leading-relaxed'>
            <strong className='text-xl'>
              Material complementar
            </strong>
            <p className='mt-2 text-sm text-gray-200'>
              Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
          </div>
          <div className='flex items-center h-full p-6'>
            <CaretRight size={24} />
          </div>
        </a>
        <a
          className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
          href=""
        >
          <div className='bg-green-700 flex items-center h-full p-6'>
            <FileArrowDown size={40} />
          </div>
          <div className='py-6 leading-relaxed'>
            <strong className='text-xl'>
            Wallpapers exclusivos
            </strong>
            <p className='mt-2 text-sm text-gray-200'>
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
            </p>
          </div>
          <div className='flex items-center h-full p-6'>
            <CaretRight size={24} />
          </div>
        </a>
      </div>
      </div>
    </div>
  )
}
