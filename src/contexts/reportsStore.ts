import Reports from '@/types/reports.type';
import {create} from 'zustand';

interface ReportsStore {
  reports: Reports;
  setReports: (reports: Reports) => void;
}

const useReportsStore = create<ReportsStore>((set) => ({
  reports: {
    total_livros: 0,
    total_escritores: 0,
    total_leitores: 0,
    total_categorias: 0,
  },
  setReports: (reports) => set({ reports }),
}));

export default useReportsStore;