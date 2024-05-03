'use client'

import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6"
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import '@/styles/customCheckbox.css'

const formSchema = z.object({
    name: z.string().min(1, 'O nome de usuário é obrigatório!'),
    password: z.string().min(1, 'A senha é obrigatória!'),
    confirmPassword: z.string().min(1, 'A senha é obrigatória!'),
    email: z.string().min(1, 'O email é obrigatório!').email('Insira um email válido!'),
})

type formType = z.infer<typeof formSchema>

export default function Register() {

    const [isSelected, setIsSelected] = useState(false);
    const {register, formState: {errors}, handleSubmit, setValue} = useForm<formType>({resolver: zodResolver(formSchema)})
    const [loading, setLoading] = useState(false)

    async function formSubmit(data: formType) {

    }

    return (
        <form className="auth_form" onSubmit={handleSubmit(formSubmit)}>
            <div className="input_field">
                <label htmlFor="">Nome *</label>
                <input type="text" placeholder="Insira o seu nome" {...register('name')} data-error={errors.name ? true : false}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Email *</label>
                <input type="text" placeholder="Insira o seu endereço de email" {...register('email')} data-error={errors.email ? true : false}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Senha *</label>
                <input type="text" placeholder="Crie uma senha" {...register('password')} data-error={errors.password ? true : false}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Confirme a Senha *</label>
                <input type="text" placeholder="Insira novamente a senha" {...register('confirmPassword')} data-error={errors.confirmPassword ? true : false}/>
            </div>
            <div className="checkbox-wrapper-13 items-center flex my-2" >
                <input id="c1-13" type="checkbox"/>
                <label htmlFor="c1-13" style={{fontSize: '0.9rem', fontWeight: '300'}}>Assinar NewsLetter</label>
            </div>
            <button className="auth_submit" type="submit" disabled={loading} >Criar conta</button>
            <Link className="other" href={'/auth/login'}>
                <div>
                    <h3>Já tem uma conta na FullBooks?</h3>
                    <p>Entre e tenha e desfrute do que a FULLBOOKS disponibiliza para você.</p>
                </div>
                <div className="icon_container">
                    <FaArrowRightLong/>
                </div>
            </Link>
        </form>
    )
}