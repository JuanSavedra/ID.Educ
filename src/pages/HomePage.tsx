import GradeChart from "../components/GradeChart"
import MbtiSelector from "../components/MbtiSelector"
import OcurrencesChart from "../components/OcurrencesChart"

function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Olá!</h1>
      <h3 className="mt-2">Seja bem-vindo ao seu painel de autogestão.</h3>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-6">
        Veja seus dashboards
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
    </>
  )
}

export default HomePage