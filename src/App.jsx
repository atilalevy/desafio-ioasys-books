import GlobalStyle from './styles/globalStyles'
import { AuthProvider } from './Context/AuthContext'

import RoutesNav from './routes/routes'

function App() {

  return (
    <AuthProvider>
      <GlobalStyle />
      <RoutesNav />
    </AuthProvider>
  )
}

export default App
