//@ts-ignore
import React, { createContext, useState, ReactNode, useEffect } from "react"

interface ThemeContextType {
  toggle: () => void
  mode: string
  currentProject: string
  handleCurrentProjectChange: (newProject: string) => void
}


const initialThemeContext: ThemeContextType = {
  toggle: () => {},
  mode: 'dark',
  currentProject: '', // default currentProject
  handleCurrentProjectChange: () => {}
}

export const ThemeContext = createContext<ThemeContextType>(initialThemeContext)

interface ThemeProviderProps {
  children: ReactNode
}

export const Provider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<string>(() => {
    const storedMode = localStorage.getItem('theme')
    return storedMode || 'dark' // Default value
  })

  const [currentProject, setCurrentProject] = useState<string>('')

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  const toggle = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  const handleCurrentProjectChange = (newProject: string) => {
    setCurrentProject(newProject)
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode, currentProject, handleCurrentProjectChange }}> {/* Добавляем handleCurrentProjectChange */}
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
