import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { GetLessonQueryResponse } from '../types/eventPage/lesson'
import Lesson from './Lesson'

const GET_LESSONS_QUERY = gql`
  query MyQuery {
  lessons(stage: PUBLISHED, orderBy: availableAt_ASC) {
    slug
    title
    id
    lessonType
    availableAt
  }
}
  `
export default function Sidebar() {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSONS_QUERY)
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </span>
      <div className='flex flex-col gap-8'>
        {data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            type={lesson.type}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
          />
        ))}
      </div>
    </aside>
  )
}
