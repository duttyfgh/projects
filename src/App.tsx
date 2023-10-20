import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
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
      <Footer/>
    </div>
  )
}

export default App