"use client"

import Image from "next/image"
import ilustration1 from '@/assets/images/Bibliophile-rafiki 1.svg'
import '@/styles/defaultPages.css'
import Link from "next/link"
import '@/styles/home.css'
import { FaArrowRightLong, FaCircleUser, FaFacebookF, FaTwitter } from "react-icons/fa6"
import { FaUsersLine } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { PiBooksFill } from "react-icons/pi";
import HomeNavbar from "@/components/navbar/homeNavbar"
import BookCard from "@/components/cards/bookCard"
import { AiFillInstagram } from "react-icons/ai"
import useBooksStore from "@/contexts/booksStore"
import useReportsStore from "@/contexts/reportsStore"
import { useEffect, useState, useCallback } from "react"
import api from "@/services/api"
import BooksPagination from "@/components/pagination/booksPagination"
import { TfiAngleDown } from "react-icons/tfi"
import useCategoriesStore from "@/contexts/categoriesStore"
import Livro from "@/types/livro.type"
import Categoria from "@/types/categoria.type"

export default function Home() {

  const useBooks = useBooksStore()
  const useReports = useReportsStore()
  const useCategories = useCategoriesStore()
  const [offset, setOffset] = useState(0)
  const [selectedCategorie, setSelectedCategorie] = useState("Todas as categorias")
  const [selectedPrice, setSelectedPrice] = useState("Preço mais baixo primeiro")

  const getData = useCallback(async () => {
    try {
      const booksResponse = await api.get('/livros');
      const reportsResponse = await api.get('/reports');
      const categoriesResponse = await api.get('/categorias');

      const books = booksResponse.data.dados;
      const reports = reportsResponse.data;
      const categories = categoriesResponse.data.dados;

      books.forEach((book: Livro) => useBooks.addBook(book));
      useReports.setReports(reports);
      categories.forEach((category: Categoria) => useCategories.adicionarCategoria(category));
    } catch (error) {
      console.error(error);
    }
  }, [useBooks, useReports, useCategories]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    const menu1 = document.querySelector("#menu1") as HTMLDivElement;
    const but1 = document.querySelector("#cat1") as HTMLButtonElement;
    const but1Icon = document.querySelector("#but1Icon") as SVGElement;

    const menu2 = document.querySelector("#menu2") as HTMLDivElement;
    const but2 = document.querySelector("#cat2") as HTMLButtonElement;
    const but2Icon = document.querySelector("#but2Icon") as SVGElement;
    
    const updateMenuPosition = () => {
      menu1.style.top = `${but1.offsetTop + but1.clientHeight + 5}px`;
      menu1.style.left = `${but1.offsetLeft}px`;

      menu2.style.top = `${but2.offsetTop + but2.clientHeight + 5}px`;
      menu2.style.left = `${but2.offsetLeft}px`;
    };

    updateMenuPosition();

    const handleClick = () => {
      const isOpened1 = menu1.dataset.opened === "true";
      menu1.dataset.opened = isOpened1 ? "false" : "true";
      but1Icon.style.transition = ".3s";

      if (menu1.dataset.opened === "false") {
        but1Icon.style.transform = "rotate(0deg)";
      }
      else {
        but1Icon.style.transform = "rotate(180deg)";
        if (menu2.dataset.opened == "true") {
          but2.click();
        }
      }
    };

    const handleClick2 = () => {
      const isOpened2 = menu2.dataset.opened === "true";
      menu2.dataset.opened = isOpened2 ? "false" : "true";
      but2Icon.style.transition = ".3s";
      if (menu2.dataset.opened === "false") {
        but2Icon.style.transform = "rotate(0deg)";
      }
      else {
        but2Icon.style.transform = "rotate(180deg)";
        if (menu1.dataset.opened == "true") {
          but1.click();
        }
      }
    }

    but1.addEventListener("click", handleClick);
    but2.addEventListener("click", handleClick2);

    return () => {
      but1.removeEventListener("click", handleClick);
      but2.removeEventListener("click", handleClick2);
    };
  }, []);

  return (
    <main className="home_contaienr">
        <HomeNavbar/>
        <header className="home_header">
          <div className="header_content">
            <h1>Livros para todos <br /> os gostos</h1>
            <div className="flex gap-3 items-center justify-center">
                <p>{useReports.reports.total_livros}+ <br />Livros</p>
                <span className="w-[0.5px] h-12 bg-black"></span>
                <p>{useReports.reports.total_categorias}+ <br />Categorias</p>
            </div>
            <Link href={'/auth/register'}>Criar conta <FaArrowRightLong/></Link>
          </div>
          <Image src={ilustration1} alt="Man reading a book" />
        </header>
        <section className="top_books mt-[60px] w-[90%] h-[500px] flex items-center justify-around rounded-[var(--border-radius)] bg-transparent mx-auto">
          <div className="">
            <h1 className="font-semibold text-4xl max-w-[250px]">Descubra os livros mais comprados</h1>
            <p className="text-gray-600">Explore os livros em destaque</p>

          </div>
          <ul className="flex gap-8">
            <li>
              <BookCard 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum, earum sunt quaerat accusantium dolorem iure quae voluptates deleniti ut velit, omnis culpa fuga non, labore ad? Minima, delectus eligendi."
                posterUrl="https://marketplace.canva.com/EAFFqd2mmYU/1/0/1003w/canva-capa-de-livro-at%C3%A9-breve-romance-X6LdMvasT38.jpg"
                title="Os Transparentes"
                price="12.500"
                id="1"
              />
            </li>
            <li>
            <BookCard 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum, earum sunt quaerat accusantium dolorem iure quae voluptates deleniti ut velit, omnis culpa fuga non, labore ad? Minima, delectus eligendi."
                posterUrl="https://marketplace.canva.com/EAFFqd2mmYU/1/0/1003w/canva-capa-de-livro-at%C3%A9-breve-romance-X6LdMvasT38.jpg"
                title="Os Transparentes"
                price="12.500"
                id="2"
              />
            </li>
            <li>
            <BookCard 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum, earum sunt quaerat accusantium dolorem iure quae voluptates deleniti ut velit, omnis culpa fuga non, labore ad? Minima, delectus eligendi."
                posterUrl="https://marketplace.canva.com/EAFFqd2mmYU/1/0/1003w/canva-capa-de-livro-at%C3%A9-breve-romance-X6LdMvasT38.jpg"
                title="Os Transparentes"
                price="12.500"
                id="3"
              />
            </li>
          </ul>
        </section>
        <section className="section1">
          <h2>FullBooks</h2>
          <p>O seu caminho para o inexplorado</p>
          <div className="section1_content">
            <div className="section1_card">
              <div className="icon_container">
                <BiSolidCategoryAlt />
              </div>
              <h3>Explore nossas categorias</h3>
              <p>Navegue por nossos diversos gêneros literários, desde romance até ficção científica. Encontre o que mais combina com você!</p>
            </div>
            <div className="section1_card">
            <div className="icon_container">
                <FaUsersLine/>
              </div>
              <h3>Conheça os Autores</h3>
              <p>Saiba mais sobre os escritores por trás das histórias. Descubra novos talentos e autores consagrados.</p>
            </div>
            <div className="section1_card">
            <div className="icon_container">
                <PiBooksFill/>
              </div>
              <h3>Descubra os mais vendidos</h3>
              <p>Explore os livros que estão conquistando leitores em todo o mundo. Encontre seu próximo best-seller favorito!</p>
            </div>
          </div>
        </section>
        <div className="mx-auto mt-[100px] mb-[50px] flex items-center justify-between w-[90%]">
          <h1 id="livros" className="font-semibold text-3xl">Principais produtos</h1>
          <div className="flex items-center justify-between gap-4">
            <button id="cat1" className="bg-white rounded-md py-2 px-4 text-sm flex items-center justify-center gap-4"  style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}}>{selectedCategorie} <TfiAngleDown id="but1Icon" className="w-[14px] h-[14px]"/></button>
            <button id="cat2" className="bg-white rounded-md py-2 px-4 text-sm flex items-center justify-center gap-4"  style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}}>{selectedPrice} <TfiAngleDown id="but2Icon" className="w-[14px] h-[14px]"/></button>
            <div id="menu1" className="absolute top-0 left-0 w-max h-max p-2 bg-white rounded-md"  style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}} data-opened="false">
              <ul className="w-full h-full flex flex-col items-start justify-start gap-2">
              <li onClick={()=>{setSelectedCategorie("Todas as categorias")}} className="py-2 px-2 w-[200px] cursor-pointer text-zinc-400 hover:text-black transition-colors duration-300 rounded-md bg-white text-sm" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px", color: `${selectedCategorie === "Todas as categorias" ? "#000" : "rgb(161 161 170)"}`}}>Todas as categorias</li>
                {useCategories.categorias.map((categorie)=>(
                  <li key={categorie.id} onClick={()=>{setSelectedCategorie(categorie.nome)}} className="py-2 px-2 w-[200px] cursor-pointer text-zinc-400 hover:text-black transition-colors duration-300 rounded-md bg-white text-sm" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px", color: `${selectedCategorie === categorie.nome ? "#000" : "rgb(161 161 170)"}`}}>{categorie.nome}</li>
                ))}
              </ul>
            </div>
            <div id="menu2" className="absolute top-0 left-0 w-max h-max p-2 bg-white rounded-md"  style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}} data-opened="false">
              <ul className="w-full h-full flex flex-col items-start justify-start gap-2">
                <li onClick={()=>{setSelectedPrice("Preço mais baixo primeiro")}} className="py-2 px-2 w-[200px] cursor-pointer text-zinc-400 hover:text-black transition-colors duration-300 rounded-md bg-white text-sm" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",  color: `${selectedPrice === "Preço mais baixo primeiro" ? "#000" : "rgb(161 161 170)"}`}}>Preço mais baixo primeiro</li>
                <li onClick={()=>{setSelectedPrice("Preço mais alto primeiro")}} className="py-2 px-2 w-[200px] cursor-pointer text-zinc-400 hover:text-black transition-colors duration-300 rounded-md bg-white text-sm" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",  color: `${selectedPrice === "Preço mais alto primeiro" ? "#000" : "rgb(161 161 170)"}`}}>Preço mais alto primeiro</li>
              </ul>
            </div>
          </div>
        </div>
        <section className="products h-max flex flex-wrap w-[90%] mx-auto gap-[50px] justify-center">
          {useBooks.books && useBooks.books.slice(offset, offset + 8).map((book) => (
                <BookCard 
                    description={book.descricao}
                    posterUrl={"https://marketplace.canva.com/EAFYhBnAbuQ/2/0/1003w/canva-capa-de-livro-de-fantasia-com-feiticeira-floresta-e-magia-XKRUgMPSjF0.jpg"}
                    title={book.titulo}
                    price={book.preco.toLocaleString('pt-BR').replace(/\./g, ' ')}
                    id={book.id.toString()}
                    key={book.id}
                />
              ))
            } 
            <BooksPagination setOffset={setOffset} limit={8} offset={offset} total={useBooks.books.length}/>
        </section>
        <h1 id="livros" className="font-semibold text-3xl w-[90%] text-center mx-auto mt-[150px] mb-[50px]">Categorias em destaque</h1>
        <section className="categories w-[90%] relative h-[600px] bg-white rounded-[var(--border-radius)] mb-[100px] mx-auto py-[60px]">
          <div className="flex items-start justify-center gap-[120px]">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-[250px] h-[300px] rounded-md" style={{backgroundSize: "cover", backgroundRepeat: "no-repeat",backgroundImage: `url(https://marketplace.canva.com/EADqbkIUWMs/1/0/1024w/canva-verde-azulado-e-branco-caminhante-autobiografia-capa-de-livro-52xE6LkQt84.jpg)`}}></div>
              <h2 className="text-sm text-gray-600">Leitura</h2>
            </div>
            <div className="flex flex-col items-center translate-y-[100px] justify-center gap-4">
              <div className="w-[250px]  h-[300px] rounded-md" style={{backgroundSize: "cover", backgroundRepeat: "no-repeat",backgroundImage: `url(https://ocapista.com.br/imgs/capas/capa_livro_fantasia.jpg)`}}></div>
              <h2 className="text-sm text-gray-600">Conto</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-[250px] h-[300px] rounded-md" style={{backgroundSize: "cover", backgroundRepeat: "no-repeat",backgroundImage: `url(https://ocapista.com.br/imgs/capas/capa_livro_fantasia_romance.jpg)`}}></div>
              <h2 className="text-sm text-gray-600">Poema</h2>
            </div>
          </div>
          <p className="absolute bottom-[30px] w-full text-center">Explore uma variedade de gêneros <br /> literários</p>
        </section>
        
        {/* <section className="section_carousel">
          <button className="prev"><FaAngleLeft/></button>
          <BooksCarousel/>
          <button className="next"><FaAngleRight/></button>
        </section> */}
        <section className="section_numbers">
          <div className="left">
            <h2>Explore um mundo de <br /> <span style={{color: "var(--color-primary)"}}>Conhecimento</span></h2>
            <p>Livros, Escritores e Gêneros para todos os Leitores.</p>
          </div>
          <div className="right">
            <div>
              <div className="icon_container">
                <FaCircleUser/>
              </div>
              <h3>{useReports.reports.total_leitores}</h3>
              <p>Leitor</p>
            </div>
            <div>
              <div className="icon_container">
                <PiBooksFill/>
              </div>
              <h3>{useReports.reports.total_livros}</h3>
              <p>Livros</p>
            </div>
            <div>
              <div className="icon_container"><BiSolidCategoryAlt/></div>
              <h3>{useReports.reports.total_categorias}</h3>
              <p>Categorias</p>
            </div>
            <div>
              <div className="icon_container">
              <FaUsersLine/>
              </div>
              <h3>{useReports.reports.total_escritores}</h3>
              <p>Escritores</p>
            </div>
          </div>
        </section>
        {/* <section className="section_join">
          <h2>Faça parte da nossa comunidade</h2>
          <p>Receba Recomendações Personalizadas e Descontos Especiais!</p>
          <Link href={'/auth/register'}>Criar conta <FaArrowRightLong/></Link>
        </section> */}
        <footer className="home_footer">
          <div>
            <h1 className="text-white text-xl font-semibold my-[20px]">FullBooks</h1>
            <p className="text-white text-sm">O seu caminho para o inexplorado</p>
            <ul className="flex gap-4 mt-[20px]">
              <li className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-white" style={{border: "1px solid #fff"}}>
                <Link href={"/"}><FaFacebookF className="w-[20px] h-[20px]"/></Link>
              </li>
              <li className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-white" style={{border: "1px solid #fff"}}>
              <Link href={"/"}><AiFillInstagram className="w-[20px] h-[20px]"/></Link>
              </li>
              <li className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-white" style={{border: "1px solid #fff"}}>
              <Link href={"/"}><FaTwitter className="w-[20px] h-[20px]"/></Link>
              </li>
            </ul>
            <p className="text-white text-sm font-light mt-[50px]">By <Link className="underline" href={"https://www.homesfot.com"} target="_blank">HOMESOFT</Link> ©️ 2024 - Todos os direitos reservados</p>
          </div>
          <div className="flex items-start justify-center gap-[50px]">
            <div>
              <h1 className="text-white font-regular text-lg">Informações</h1>
              <ul>
                <li><Link className="text-white text-sm font-light" href={""}>Sobre nós</Link></li>
                <li><Link className="text-white text-sm font-light" href={""}>Contactos</Link></li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-regular text-lg">FullBooks</h1>
              <ul>
                <li><Link className="text-white text-sm font-light" href={""}>Livros</Link></li>
                <li><Link className="text-white text-sm font-light" href={""}>Categorias</Link></li>
                <li><Link className="text-white text-sm font-light" href={""}>Sobre nós</Link></li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-regular text-lg">Cliente</h1>
              <ul>
                <li><Link className="text-white text-sm font-light" href={""}>Entrar</Link></li>
                <li><Link className="text-white text-sm font-light" href={""}>Criar conta</Link></li>
              </ul>
            </div>
          </div>
        </footer>
    </main>
  );
}
