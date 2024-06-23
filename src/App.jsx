import Layout from "./components/Layout"
import { GlobalProvider } from "./context/GlobalProvider"

function App() {
  return (
    <GlobalProvider>
      <Layout />
    </GlobalProvider>
  )
}

export default App
