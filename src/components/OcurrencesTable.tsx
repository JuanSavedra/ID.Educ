import { type OcurrenceEntry } from '../data/ocurrencesTableData'

interface OcurrenceTableProps {
  ocurrences: OcurrenceEntry[]
}

function OcurrenceTable({ ocurrences }: OcurrenceTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC'
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">Histórico de Ocorrências Detalhado</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Tipo</th>
              <th scope="col" className="px-6 py-3 text-center">Publicado em</th>
            </tr>
          </thead>
          <tbody>
            {ocurrences.map((ocurrence) => {
              return (
                <tr key={ocurrence.id} className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {ocurrence.type}
                  </th>
                  <td className="px-6 py-4 text-center">{formatDate(ocurrence.publishedDate)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OcurrenceTable