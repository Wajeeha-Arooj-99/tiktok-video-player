import { VideoPlayer } from '../src/index.tsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>TikTok Video Player Demo</h1>
      <VideoPlayer id="1234567890123456789" />
    </div>
  )
}

export default App