import { Route, Routes } from "react-router-dom"
import EventPage from "./pages/EventPage"

function App() {

  return (
    <Routes>
      <Route path="/event" element={<EventPage />} />
      <Route path="/event/lesson/:slug" element={<EventPage />} />
      <Route path="/ss" element={<h1> sss</h1>} />
    </Routes>
  )
}

export default App
