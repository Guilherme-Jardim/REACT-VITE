import { Header } from './components/header'
import { NamedExport } from './NamedExport'
import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <NamedExport 
        author="Propertie 1" 
        content="Propertie 2" 
      />
    </div>
  )
}