import { Routes,Route } from "react-router-dom"
import Lists from "./pages/Lists"
import Home from "./pages/Home"

export default function App() {
  return (
    <div className="h-full bg-[#ffffff] text-[#111]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Lists />} />
      </Routes>
    </div>
  )
}
