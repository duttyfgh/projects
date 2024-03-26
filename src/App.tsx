import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Project from "./components/project/ProjectWrapper"
import { Suspense } from "react"
import { AnimatePresence } from 'framer-motion'

const App = () => {

  const location = useLocation()

  return (
    <div className="default h-screen">
      <Header />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/projects/" element={<Main />} />
          <Route path="/projects/proj/" element={<Project />} />
        </Routes>
      </AnimatePresence>

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