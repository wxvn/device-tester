import HomePage from "../pages/HomePage"
import Header from "../components/Header/Header"



function App() {
  return (
    <div className="min-h-screen bg-indigo-400 ">
      <div className="mx-auto min-h-screen max-w-7xl bg-emerald-300 p-4">
      <Header/>

      <HomePage />
      </div>


    </div>
    
  )
}

export default App
