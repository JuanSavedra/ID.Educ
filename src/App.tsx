import './App.css'
import Navbar from './Navbar.tsx' 
import GradeChart from './GradeChart.tsx'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="p-4 md:p-8">
        <h1 className="text-3xl font-bold">Olá!</h1>
        <h3 className="mt-2">Seja bem-vindo ao seu painel de autogestão.</h3>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-6">
          Seus dashboards
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Notas
          </h2>
          <GradeChart />
        </div>
      </main>
    </div>
  )
}

export default App
