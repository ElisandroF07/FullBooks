import Categoria from '@/types/categoria.type';
import {create} from 'zustand';

type CategoriesStore = {
  categorias: Categoria[];
  adicionarCategoria: (categoria: Categoria) => void;
}

const useCategoriesStore = create<CategoriesStore>((set) => ({
  categorias: [],
  adicionarCategoria: (novaCategoria) => {
    set((state) => {
      // Verifica se a nova categoria já existe na lista
      if (!state.categorias.find(categoria => categoria.id === novaCategoria.id)) {
        // Se não existir, adiciona a nova categoria à lista
        return { categorias: [...state.categorias, novaCategoria] };
      } else {
        // Se existir, mantém a lista inalterada
        return { categorias: state.categorias };
      }
    });
  },
}));

export default useCategoriesStore;
