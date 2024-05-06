type Autor = {
    id: number;
    codigo: string;
    nome: string;
    email: string;
    telefone: string;
    redes_sociais: string;
    assinou_newsletter: string;
    estado: string;
    tipo: string;
    user_id: string;
    created_at: string;
    updated_at: string;
}

type Categoria = {
    id: number;
    nome: string;
    descricao: string;
    created_at: string;
    updated_at: string;
}

type Livro = {
    id: number;
    titulo: string;
    isbn: string;
    ano: number;
    autor_id: number;
    categoria_id: number;
    tipo: string;
    descricao: string;
    preco: number;
    desconto: string;
    capa_livro_url: string;
    livro_url: string;
    estado: number;
    estado_promocao: string;
    estado_download: number;
    created_at: string;
    updated_at: string;
    autor: Autor;
    categoria: Categoria;
}

export default Livro;