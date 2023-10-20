import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Project from "./components/project/Project"

const App = () => {
  return (
    <div className="default h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/proj" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App