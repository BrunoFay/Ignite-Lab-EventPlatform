import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import VideoPlayer from '../components/VideoPlayer'

export default function EventPage() {
  const { slug } = useParams()

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {slug ? (<VideoPlayer lessonSlug={slug} />) : (<div className='flex-1' />)}
        <Sidebar />
      </main>
    </div>
  )
}
