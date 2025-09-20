export interface GradeEntry {
  id: number,
  subject: string,
  grade: number,
  publishedDate: string,
  semester: string
}

export const detailedGradesData: GradeEntry[] = [
  { id: 1, subject: 'Matemática', grade: 8.5, publishedDate: '2025-08-15', semester: '1º' },
  { id: 2, subject: 'Português', grade: 9.2, publishedDate: '2025-08-16', semester: '1º' },
  { id: 3, subject: 'História', grade: 4.8, publishedDate: '2025-08-18', semester: '1º' },
  { id: 4, subject: 'Geografia', grade: 7.0, publishedDate: '2025-08-20', semester: '1º' },
  { id: 5, subject: 'Ciências', grade: 5.0, publishedDate: '2025-12-05', semester: '1º' },
  { id: 6, subject: 'Inglês', grade: 6.5, publishedDate: '2025-12-10', semester: '1º' },
  { id: 7, subject: 'Educação Física', grade: 9.2, publishedDate: '2025-12-12', semester: '1º' },
  
  { id: 1, subject: 'Matemática', grade: 8.5, publishedDate: '2025-08-15', semester: '2º' },
  { id: 2, subject: 'Português', grade: 9.2, publishedDate: '2025-08-16', semester: '2º' },
  { id: 3, subject: 'História', grade: 4.8, publishedDate: '2025-08-18', semester: '2º' },
  { id: 4, subject: 'Geografia', grade: 7.0, publishedDate: '2025-08-20', semester: '2º' },
  { id: 5, subject: 'Ciências', grade: 5.0, publishedDate: '2025-12-05', semester: '2º' },
  { id: 6, subject: 'Inglês', grade: 6.5, publishedDate: '2025-12-10', semester: '2º' },
  { id: 7, subject: 'Educação Física', grade: 9.2, publishedDate: '2025-12-12', semester: '2º' },
];