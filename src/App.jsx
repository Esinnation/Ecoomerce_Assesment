import Home from "./Pages/Home"
import ProductDetail from "./Pages/ProductDetail"
import { Navigate, Route, Routes } from 'react-router-dom';


function App() { 
  return (
    <Routes>
      <Route path='/*' Component={Home} />
      <Route path='/:id' Component={ProductDetail} />
    </Routes>
  )
}

export default App
