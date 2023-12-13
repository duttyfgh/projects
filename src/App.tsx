import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Project from "./components/project/ProjectWrapper"
import { Suspense } from "react"

const App = () => {
  return (
    <div className="default h-screen">
      <Header />
      <Routes>
        <Route path="/projects/" element={<Main />} />
        <Route path="/projects/proj/" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  )
}

const WrappedApp = () => (
  <Suspense fallback='...loading'>
    <App />
  </Suspense>
)

export default WrappedApp