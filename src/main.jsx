import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { LayoutComponent } from './components/layoutComponent.jsx'
import './main.css'
import { HomePage } from './pages/homePage.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route path='' element={<HomePage />} />
          <Route path='buscar' element={<h1>¿Que quieres buscar?</h1>} />
          <Route path='busqueda/:input' element={<h1>Resultados de:</h1>} />
          <Route path='mis-fotos' element={<h1>Mis Fotos</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition: Bounce
      />
  </Provider>
)
