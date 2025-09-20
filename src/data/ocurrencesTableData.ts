export interface OcurrenceEntry {
  id: number,
  type: string,
  publishedDate: string
}

export const detailedOcurrencesData: OcurrenceEntry[] = [
  { id: 1, type: 'Médico', publishedDate: '2025-08-13' },
  { id: 1, type: 'Atraso', publishedDate: '2025-08-25' },
  { id: 1, type: 'Falta', publishedDate: '2025-08-19' },
  { id: 1, type: 'Nota baixa', publishedDate: '2025-07-15' },
  { id: 1, type: 'Médico', publishedDate: '2025-09-04' },
  { id: 1, type: 'Acidente de trabalho', publishedDate: '2025-08-30' },
  { id: 1, type: 'Suspensão', publishedDate: '2025-07-02' },
  { id: 1, type: 'Advertência', publishedDate: '2025-09-09' }
];