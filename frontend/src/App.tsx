import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import HistoryPage from "./pages/History/HistoryPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
