export interface Mbti {
  id: number,
  type: string,
  name: string,
  description: string
}

export const mbtiList: Mbti[] = [
  // Analistas
  { id: 1, type: 'INTJ', name: 'O Arquiteto', description: 'Pensadores estratégicos com um plano para tudo. Lógicos, independentes e criativos.' },
  { id: 2, type: 'INTP', name: 'O Lógico', description: 'Inovadores inventivos com uma sede insaciável por conhecimento.' },
  { id: 3, type: 'ENTJ', name: 'O Comandante', description: 'Líderes ousados e determinados que encontram ou criam um caminho.' },
  { id: 4, type: 'ENTP', name: 'O Inovador', description: 'Pensadores inteligentes e curiosos que não resistem a um desafio intelectual.' },
  // Diplomatas
  { id: 5, type: 'INFJ', name: 'O Advogado', description: 'Idealistas quietos e inspiradores, com um forte senso de moralidade.' },
  { id: 6, type: 'INFP', name: 'O Mediador', description: 'Poéticos, gentis e altruístas, sempre prontos para ajudar uma boa causa.' },
  { id: 7, type: 'ENFJ', name: 'O Protagonista', description: 'Líderes carismáticos e inspiradores, capazes de cativar seus ouvintes.' },
  { id: 8, type: 'ENFP', name: 'O Ativista', description: 'Espíritos livres entusiasmados, criativos e sociáveis.' },
  // Sentinelas
  { id: 9, type: 'ISTJ', name: 'O Logístico', description: 'Indivíduos práticos e focados em fatos, cuja confiabilidade é inquestionável.' },
  { id: 10, type: 'ISFJ', name: 'O Defensor', description: 'Protetores muito dedicados e calorosos, sempre prontos para defender quem amam.' },
  { id: 11, type: 'ESTJ', name: 'O Executivo', description: 'Excelentes administradores, incomparáveis em gerenciar coisas ou pessoas.' },
  { id: 12, type: 'ESFJ', name: 'O Cônsul', description: 'Pessoas extraordinariamente atenciosas, sociais e populares, sempre ansiosas por ajudar.' },
  // Exploradores
  { id: 13, type: 'ISTP', name: 'O Virtuoso', description: 'Experimentadores ousados e práticos, mestres em todos os tipos de ferramentas.' },
  { id: 14, type: 'ISFP', name: 'O Aventureiro', description: 'Artistas flexíveis e charmosos, sempre prontos para explorar algo novo.' },
  { id: 15, type: 'ESTP', name: 'O Empresário', description: 'Pessoas inteligentes, enérgicas e perspicazes, que gostam de viver no limite.' },
  { id: 16, type: 'ESFP', name: 'O Animador', description: 'Espontâneos, enérgicos e entusiasmados - a vida nunca é entediante com eles.' },
];