import './App.css'
import Cabecalho from './Cabecalho'
import Perfil from './Perfil'
import SobreMIm from './SobreMim'

function App() {

  return (
    <div className="App">
      <div className='container'>
        <Cabecalho/>
        <div className='sub-container'>
          <Perfil/>
          <SobreMIm/>
        </div>
      </div>

    </div>
  )
}

export default App
