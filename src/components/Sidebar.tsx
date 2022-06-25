import { useContext } from 'react'
import { SidebarContext, sidebarContext } from '../context/sidebarContext'
import { useGetLessonsQuery } from '../graphql/generated'
import Lesson from './Lesson'

export default function Sidebar() {
  const { data } = useGetLessonsQuery()
  const { isSidebarOpen } = useContext(sidebarContext) as SidebarContext
  return (
    <aside className={`w-[348px] lg:visible ${!isSidebarOpen ? 'lg:block hidden' : 'visible absolute z-50 min-w-full min-h-screen'} bg-gray-700 p-6 border-l border-gray-600`}>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </span>
      <div className='flex flex-col gap-8'>
        {data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
          />
        ))}
      </div>
    </aside>
  )
}
