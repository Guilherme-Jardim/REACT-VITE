import { Header } from './components/Header'
import { NamedExport } from './NamedExport'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <NamedExport 
            author="Propertie 1" 
            content="Propertie 2" 
          />
        </main>
      </div>
    </div>
  )
}