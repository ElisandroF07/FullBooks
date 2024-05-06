import Image from "next/image"
import svg from '@/assets/images/Construction.svg'
import logo from '@/assets/images/logo_full_size.png'
import ilustration1 from '@/assets/images/readingbook.svg'
import '@/styles/defaultPages.css'
import Link from "next/link"
import '@/styles/home.css'
import { FaAngleLeft, FaAngleRight, FaArrowRightLong, FaCircleUser } from "react-icons/fa6"
import { FaUsersLine } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { PiBooksFill } from "react-icons/pi";
import BooksCarousel from "@/components/carousels/booksCarousel"

export default function Home() {
  return (
    <main className="home_contaienr">
        <div className="home_navbar">
          <Image src={logo} alt="logo" />
          <ul className="navbar_links">
            <li>
              <Link href={'/auth/login'}>Entrar</Link>
            </li>
            <li>
              <Link href={'/auth/register'}>Criar conta</Link>
            </li>
          </ul>
        </div>
        <header className="home_header">
          <div className="header_content">
            <h1>Descrubra novos mundos <br /> nas páginas!</h1>
            <p>Explore, encante-se, leia: sua jornada literária começa aqui</p>
            <Link href={'/auth/register'}>Criar conta <FaArrowRightLong/></Link>
          </div>
          <Image src={ilustration1} alt="Man reading a book" />
        </header>
        <section className="section1">
          <h2>Dê Asas à sua Imaginação</h2>
          <p>O que está esperando?</p>
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
        <section className="section_carousel">
          <button className="prev"><FaAngleLeft/></button>
          <BooksCarousel/>
          <button className="next"><FaAngleRight/></button>
        </section>
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
              <h3>540</h3>
              <p>Leitores</p>
            </div>
            <div>
              <div className="icon_container">
                <PiBooksFill/>
              </div>
              <h3>43</h3>
              <p>Livros</p>
            </div>
            <div>
              <div className="icon_container"><BiSolidCategoryAlt/></div>
              <h3>12</h3>
              <p>Categorias</p>
            </div>
            <div>
              <div className="icon_container">
              <FaUsersLine/>
              </div>
              <h3>12</h3>
              <p>Escritores</p>
            </div>
          </div>
        </section>
        <section className="section_join">
          <h2>Faça parte da nossa comunidade</h2>
          <p>Receba Recomendações Personalizadas e Descontos Especiais!</p>
          <Link href={'/auth/register'}>Criar conta <FaArrowRightLong/></Link>
        </section>
        <footer className="home_footer">
          <div className="footer_content">
            <p>Developed by <Link href={'https://www.homesoft.com'}>HOMESOFT</Link> ©️ 2024</p>
          </div>
        </footer>
    </main>
  );
}
