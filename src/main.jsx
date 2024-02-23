import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/index/Index.jsx'
import React from 'react'
import Projetos from './pages/index/Projetos.jsx'
import ToDoList from './pages/projetos/toDoList/ToDoList.jsx'
import Sobre from './pages/index/Sobre.jsx'
import Cursos from './pages/index/Cursos.jsx'
import Contato from './pages/index/Contato.jsx'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Index/> 
      },
      {
        path: '/sobre',
        element: <Sobre />,
      },
      {
        path: '/cursos',
        element: <Cursos />,
      },
      {
        path: '/contato',
        element: <Contato />,
      },
      {
        path: '/projetos',
        element: <Projetos />
      },
    ],
  },
  {
    path: '/todolist',
    element: <ToDoList />,
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>,
)
