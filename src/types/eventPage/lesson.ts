export type LessonProps = {
  title: string
  slug: string
  availableAt: Date
  type: 'class' | 'live'
}
export type GetLessonQueryResponse = {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    type: 'class' | 'live'
  }[]
}