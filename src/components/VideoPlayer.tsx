import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'
import { useContext } from "react"
import { sidebarContext, SidebarContext } from "../context/sidebarContext"
import { useGetLessonBySlugQuery } from '../graphql/generated'  
import Footer from "./Footer"
import "@vime/core/themes/defa  ult.css"

export default function VideoPlayer(props: { lessonSlug: string }) {
  const { isSidebarOpen } = useContext(sidebarContext) as SidebarContext
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  })

  if (!data || !data.lesson) {
    return (<div className='flex-1'>
      <p>Carregando...</p>
    </div>)
  }
  return (
    <div className={`flex-1 ${isSidebarOpen ? "hidden" : ""} `}>
      <div className='bg-black flex  justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className='p-8 mx-auto md:flex-row flex-col max-w-[1100px]'>
        <div className='flex flex-col md:flex-row md:items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>
              {data.lesson.title}
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className='flex items-center gap-4 mt-6'>
                <img
                  className='h-16 w-16 rounded-full border-2 border-blue-500'
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />
                <div className='leading-relaxed'>
                  <strong className='font-bold text-2xl block'>
                    {data.lesson.teacher.name}
                  </strong>
                  <span className='text-gray-200 text-sm block'>
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className='flex justify-center items-center flex-col gap-4'>
            <a
              href=""
              className='flex gap-2 w-[85vw] sm:w-auto justify-center items-center p-4 text-sm font-bold uppercase rounded hover:bg-green-700 bg-green-500'
            >
              <DiscordLogo size={24} />
              Comunidade discord
            </a>
            <a
              href=""
              className='flex gap-2 w-[85vw] sm:w-auto justify-center items-center p-4 text-sm font-bold uppercase rounded border border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors text-blue-500'
            >
              <Lightning size={24} />
              Acesse o dasafio
            </a>
          </div>
        </div>
        <div className='gap-8 grid md:grid-cols-2 grid-cols-1 mt-20'>
          <a
            className='bg-gray-700 sm:w-auto w-[85vw] md:right-0 px-auto rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
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
            className='bg-gray-700 sm:w-auto w-[85vw] md:right-0 px-auto rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
            href=""
          >
            <div className='bg-green-700 flex items-center h-full p-6'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-xl'>
                Wallpapers exclusivos
              </strong>
              <p className='mt-2 text-sm  text-gray-200'>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className='flex items-center h-full p-6'>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
      <Footer />

    </div>
  )
}
