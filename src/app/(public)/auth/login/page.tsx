'use client'

import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

const formSchema = z.object({
    user: z.string().min(1, 'O nome de usuário é obrigatório!'),
    password: z.string().min(1, 'A senha é obrigatória!')
})

type formType = z.infer<typeof formSchema>

export default function Login() {

    const {register, formState: {errors}, handleSubmit, setValue} = useForm<formType>({resolver: zodResolver(formSchema)})
    const [loading, setLoading] = useState(false)
    async function formSubmit(data: formType) {

    }

    return (
        <form className="auth_form" onSubmit={handleSubmit(formSubmit)}>
            <div className="input_field">
                <label htmlFor="">Usuário</label>
                <input type="text" id="user" placeholder="Insira o seu nome de usuário" {...register('user')} data-error={errors.user ? true : false}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Senha</label>
                <input type="text" id="password" placeholder="Insira a sua senha" {...register('password')} data-error={errors.password ? true : false}/>
            </div>
            <div className="forgot_password"><Link href={'/'}>Recuperar credenciais</Link></div>
            <button className="auth_submit" type="submit">Entrar</button>
            <Link className="other" href={'/auth/register'}>
                <div>
                    <h3>Já criou uma conta na FullBooks?</h3>
                    <p>Com a FULLBOOKS poderá ter acesso à uma gama diversificada de livros.</p>
                </div>
                <div className="icon_container">
                    <FaArrowRightLong/>
                </div>
            </Link>
        </form>
    )
}