import Image from "next/image"
import logo from '@/assets/images/logo_full_size.png'
import '@/styles/auth.css'
interface IProps {
    children: React.ReactNode
}

export default function AuthLayout({children}: IProps){
    return (
        <main className="auth_container">
                <div className="form_container">
                    <Image src={logo} alt={'FullBooks Logo'} />
                    {children}
                    <p className="copyright">Developed by HOMESOFT ©️ 2024</p>
                </div>
        </main>
    )
}