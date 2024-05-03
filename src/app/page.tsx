import Image from "next/image"
import svg from '@/assets/images/Construction.svg'
import logo from '@/assets/images/logo_full_size.png'
import '@/styles/defaultPages.css'
import { FaArrowRightLong } from "react-icons/fa6"
import Link from "next/link"

export default function Home() {
  return (
    <main className="notFound_container">
        <Image className="logo" src={logo} alt={'not-found'}/>
        <Image src={svg} alt={'not-found'}/>
        <h1>Estamos em obras!</h1>
        <p>Estamos trabalhando duro para trazer a você algo incrível em breve. Volte em breve para conferir as novidades!</p>
        <Link href={'/auth/login'}>Ir para o login <FaArrowRightLong/></Link>
    </main>
  );
}
