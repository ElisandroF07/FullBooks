'use client'

import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6"
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import '@/styles/customCheckbox.css'
import api from "@/services/api"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    name: z.string().min(1, 'O nome de usuário é obrigatório!'),
    password: z.string().min(1, 'A senha é obrigatória!'),
    confirmPassword: z.string().min(1, 'A senha é obrigatória!'),
    email: z.string().min(1, 'O email é obrigatório!').email('Insira um email válido!'),
    type: z.string(),
    assignNewsLetter: z.boolean()
})

type formType = z.infer<typeof formSchema>

export default function Register() {

    const [isSelected, setIsSelected] = useState(false);
    const {register, formState: {errors}, handleSubmit} = useForm<formType>({resolver: zodResolver(formSchema)})
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function formSubmit(data: formType) {
        let body = {
            nome: data.name,
            email: data.email,
            senha: data.password,
            tipo: data.type,
            assinou_newsletter: data.assignNewsLetter
        }
        let response = await api.post('/entidade/store', body)
        if (response.status === 200) {

        }
        console.log("teste")
        console.log(data)
    }

    return (
        <form className="auth_form" onSubmit={handleSubmit(formSubmit)}>
            <div className="input_field">
                <label htmlFor="">Nome *</label>
                <input type="text" placeholder="Insira o seu nome" {...register('name')} data-error={errors.name ? true : false}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Email *</label>
                <input type="email" placeholder="Insira o seu endereço de email" {...register('email')} data-error={errors.email ? true : false}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Senha *</label>
                <input type="password" placeholder="Crie uma senha" {...register('password')} data-error={errors.password ? true : false}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Confirme a Senha *</label>
                <input type="password" placeholder="Insira novamente a senha" {...register('confirmPassword')} data-error={errors.confirmPassword ? true : false}/>
            </div>
            <div className="input_field">
                <label htmlFor="">Tipo de usuário *</label>
                <select {...register("type")}>
                    <option value="Leitor">Leitor</option>
                    <option value="Escritor">Escritor</option>
                </select>
            </div>
            <div className="checkbox-wrapper-13 items-center flex my-2" >
                <input id="c1-13" type="checkbox" {...register("assignNewsLetter")}/>
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