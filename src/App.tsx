import { Route, Routes } from "react-router-dom"
import EventPage from "./pages/EventPage"
import Subscribe from "./pages/Subscribe"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/event/lesson/:slug" element={<EventPage />} />
    </Routes>
  )
}

export default App
