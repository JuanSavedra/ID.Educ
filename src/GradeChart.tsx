import React from 'react'
import {
  Bar,
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

function GradeChart() {
  const gradeChartData = [
    {
      name: 'M',
      Nota: 8,
    },
    {
      name: 'P',
      Nota: 3,
    },
    {
      name: 'B',
      Nota: 4,
    },
    {
      name: 'G',
      Nota: 8,
    },
    {
      name: 'H',
      Nota: 9,
    },
    {
      name: 'F',
      Nota: 7,
    },
    {
      name: 'A',
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
          {/* Adiciona um grid quadriculado ao fundo do gráfico */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* Define o eixo X (horizontal) usando a chave 'mes' dos nossos dados */}
          <XAxis dataKey="name" />
          
          {/* Tooltip é a caixinha de informações que aparece ao passar o mouse */}
          <Tooltip wrapperStyle={{ backgroundColor: '#333', color: '#fff' }} />

          <Legend />

          {/* Define a primeira barra, correspondente à chave 'vendas' e com a cor azul */}
          <Bar dataKey="Nota" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default GradeChart