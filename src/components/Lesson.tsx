import React from 'react'
import { CheckCircle, Lock } from 'phosphor-react'
import { LessonProps } from '../types/eventPage/lesson'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'

export default function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm' ", { locale: ptBR })
  const { slug } = useParams<{ slug: string }>()
  const isCurrentLesson = slug === props.slug
  return (
    <Link
      className='group'
      to={`/event/lesson/${props.slug}`}
    >
      <span className='text-gray-300'>
        {availableDateFormated}
      </span>
      <div className={`${isCurrentLesson ? 'bg-green-300 text-white' : ''} rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 `}>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className={`${isCurrentLesson ? ' text-white' : ''} text-sm font-medium text-blue-500 flex items-center gap-2`}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm font-medium text-orange-500 flex items-center gap-2'>
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span className={`${isCurrentLesson ? 'border-white text-white' : ''} text-xs rounded py-[0.125rem] px-2 text-green-300 border border-green-300 font-bold`}>
            {props.type === "live" ? 'AO VIVO' : 'Aula Prática'}
          </span>
        </header>
        <strong className={`${isCurrentLesson ? 'text-white' : ''} mt-5 block text-gray-200`}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
