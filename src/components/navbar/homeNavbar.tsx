import Link from "next/link";
import Image from "next/image";
import svg from '@/assets/images/Construction.svg'
import logo from '@/assets/images/logo_full_size.png'

export default function HomeNavbar() {
    return (
        <div className="home_navbar">
          <Image src={logo} alt="logo" />
          <ul className="navbar_links">
            <li>
              <Link href={'#livros'}>Livros</Link>
            </li>
            <li>
              <Link href={'/auth/register'}>Categorias</Link>
            </li>
            <li>
              <Link href={'/auth/login'}>Entrar</Link>
            </li>
            <li>
              <Link href={'/auth/register'}>Criar conta</Link>
            </li>
            <li>
              <Link href={'/auth/register'}>Sobre nós</Link>
            </li>
            
          </ul>
        </div>
    )
}