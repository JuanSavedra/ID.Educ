import './App.css'
import Navbar from './components/Navbar.tsx' 
import GradeChart from './components/GradeChart.tsx'
import OcurrencesChart from './components/OcurrencesChart.tsx'
import MbtiSelector from './components/MbtiSelector.tsx'

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
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Ocorrências
          </h2>
          <OcurrencesChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            MBTI
          </h2>
          <MbtiSelector />
        </div>
      </main>
    </div>
  )
}

export default App