import Livro from '@/types/livro.type';
import {create} from 'zustand';

interface BooksStore {
  books: Livro[];
  addBook: (book: Livro) => void;
  removeBook: (bookId: number) => void;
}

const useBooksStore = create<BooksStore>((set) => ({
  books: [],
  addBook: (book) =>
    set((state) => {
      // Verifica se o livro já está na lista
      const isBookExist = state.books.some((b) => b.id === book.id);
      if (!isBookExist) {
        return { books: [...state.books, book] };
      }
      return state; // Se o livro já existe, retorna o estado atual sem alterações
    }),
  removeBook: (bookId) =>
    set((state) => ({
      books: state.books.filter((book) => book.id !== bookId),
    })),
}));

export default useBooksStore;