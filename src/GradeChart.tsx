import {
  Bar,
  BarChart,
  Legend,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

function GradeChart() {
  const gradeChartData = [
    {
      Nome: 'M',
      Nota: 8,
    },
    {
      Nome: 'P',
      Nota: 3,
    },
    {
      Nome: 'B',
      Nota: 4,
    },
    {
      Nome: 'G',
      Nota: 8,
    },
    {
      Nome: 'H',
      Nota: 9,
    },
    {
      Nome: 'F',
      Nota: 7,
    },
    {
      Nome: 'A',
      Nota: 5,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={gradeChartData}
          margin={{
            top: 35,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Nome" />
          <Tooltip wrapperStyle={{ backgroundColor: '#333', color: '#fff' }} />
          <Legend />
          <Bar dataKey="Nota" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default GradeChart