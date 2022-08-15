import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

type LessonProps = {
  title: string
  slug: string
  availableAt: Date
  type: 'class' | 'live'
}

export default function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm' ", { locale: ptBR })
  const { slug } = useParams<{ slug: string }>()
  const isCurrentLesson = slug === props.slug
  return (
    <Link
      className='group'
      to={isLessonAvailable ? `/event/lesson/${props.slug}`: ''}
    >
      <span className='text-gray-300'>
        {availableDateFormated}
      </span>
      <div className={`${(isCurrentLesson && isLessonAvailable) ? 'bg-green-300 text-white' : ''} rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 `}>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className={`${(isCurrentLesson && isLessonAvailable) ? 'text-white' : 'text-blue-500'} text-sm font-medium  flex items-center gap-2`}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm font-medium cursor-not-allowed text-orange-500 flex items-center gap-2'>
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span className={`${(isCurrentLesson && isLessonAvailable) ? 'border-white text-white' : 'text-green-300 border-green-300'} text-xs rounded py-[0.125rem] px-2 border font-bold`}>
            {props.type === "live" ? 'AO VIVO' : 'Aula Prática'}
          </span>
        </header>
        <strong className={`${(isCurrentLesson && isLessonAvailable) ? 'text-white' : 'text-gray-200'} mt-5 block `}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
