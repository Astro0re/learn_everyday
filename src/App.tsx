import { Routes, Route } from 'react-router-dom'
import './App.css'
import index from './pages/Index'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<index />} />
    </Routes>
      <div>
        
        
      </div>
      <h1>Learn Everyday</h1>
      <div className="card">
        <p>
          Hola, you would have know that is you knew spanish.
        </p>
        <p>
          We at Learn Everday hope to improve your knowledge resovoir.
        </p>
        <p>By bringing interesting facts and topics everyday, you are not only entertained but informed on a vast number of areas.</p>
      </div>
      <p className="read-the-docs">
        <ul>
          <li>Topics</li>
          <li>Quiz</li>
          <li>Leaderboard</li>
          <li>Sign Up</li>
        </ul>
      </p>
    </>
  )
}

export default App
