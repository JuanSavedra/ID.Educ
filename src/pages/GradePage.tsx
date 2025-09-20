import GradeChart from '../components/GradeChart';

const studentData = {
  name: 'Fulano de Tal',
  class: 'Ensino Técnico',
  profilePicture: 'https://i.pravatar.cc',
};

function GradePage() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 flex items-center space-x-6">
          <img
            src={studentData.profilePicture}
            alt="Foto do Aluno"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{studentData.name}</h2>
            <p className="text-md text-gray-600">{studentData.class}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Quadro de Notas</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">Notas do período selecionado.</p>
            <GradeChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradePage;