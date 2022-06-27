import { Navigate, Route, Routes } from "react-router-dom"
import { useGetLessonsQuery } from "./graphql/generated"
import EventPage from "./pages/EventPage"
import Subscribe from "./pages/Subscribe"

function App() {
  const { data } = useGetLessonsQuery()
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route
        path="/event"
        element={data && <Navigate replace to={`/event/lesson/${data?.lessons[0]?.slug}`} />} />
      <Route
        path="/event/lesson"
        element={data && <Navigate replace to={`/event/lesson/${data?.lessons[0]?.slug}`} />} />
      <Route path="/event/lesson/:slug" element={<EventPage />} />
    </Routes>
  )
}

export default App
