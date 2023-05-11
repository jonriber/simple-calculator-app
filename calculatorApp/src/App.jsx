import './App.css'
import Calculator from './Calculator'

function App() {

  return (
    <>
      <div className='container'>
        <h1>Calculator App</h1>
        <div className="card">
          <Calculator/>
        </div>
        <p className="read-the-docs">
          Check the code at my github repo <a href={"https://github.com/jonriber/simple-calculator-app"}>HERE</a>
        </p>
      </div>
      <footer><b>Jonatas Ribeiro</b>. 2023#</footer>
    </>
  )
}

export default App
