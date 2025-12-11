import './App.css'
import RoutesPages from './Routes'
import HeaderComponent from './components/header/Header'
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="content">
          <HeaderComponent />
          <main >
            <RoutesPages />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
