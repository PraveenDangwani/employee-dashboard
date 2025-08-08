
import './App.css'
import Dashboard from './Components/Dashboard'
import { ThemeProvider } from './context/theme/ThemeProvider';

function App() {

  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
