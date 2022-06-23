import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'
import "@vime/core/themes/default.css"
import { DefaultUi, Player, Youtube } from '@vime/react'
import { gql, useQuery } from '@apollo/client'
import { GetVideoSlugResponse, VideoProps } from '../types/eventPage/video'

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug:String) {
  lesson(where: {slug:$slug}) {
    title
    description
    videoId
    teacher {
      name
      avatarURL
      bio
    }
  }
}
`

export default function VideoPlayer(props: VideoProps) {
  const { data } = useQuery<GetVideoSlugResponse>(GET_LESSON_BY_SLUG, {
    variables: {
      slug: props.lessonSlug
    }
  })
  if (!data) {
    return (<div className='flex-1'>
      <p>Carregando...</p>
    </div>)
  }
  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className='p-8 mx-auto max-w-[1100px]'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>
              {data.lesson.title}
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              {data.lesson.description}
            </p>
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
