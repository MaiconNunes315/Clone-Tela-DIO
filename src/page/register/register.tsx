import { useLocation, useParams } from "react-router-dom";
import { ButtonContainer } from "../../components/button/style";
import { InputContainer } from "../../components/input/style";
import { EnvelopeSimple, LockKey, User } from "phosphor-react";
import { LoginContainer } from "../login/style";
import { useState } from "react";
import { users } from "../../service/users";

type UsersI = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export default function Register() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    const { newPassword } = useParams();

    let user:UsersI = {
        id: Math.random().toString(14).slice(2),
        name: name,
        email: email,
        password:password
    }

    function addUser() {

        users.push(user)

        localStorage.setItem("data", JSON.stringify(users));
        location.reload()
        
    }

    function updatePassword() {

        users.filter((us: UsersI,index:number) => {
            
            if (us.email === email) {
                
                users.push(user)
                localStorage.setItem("data", JSON.stringify(users));
                
            }
            
        })
    }

   
    return (

        <LoginContainer>

            
            <p>
                A plataforma para você aprender com experts, dominar as
                principais tecnologias e entrar mais rápido nas empresas
                mais desejadas.
            </p>
                
            <div>

                <div className="paragraph-container">
                    <p>Comece agora grátis</p>
                    <span>Crie sua conta e make the change._</span>
                </div>

                {newPassword === "resetPassword" ? (
                    <form className="input-container">

                    <InputContainer >

                        <EnvelopeSimple className="icon" size={17} color="#8647AD" weight="fill" />
                        <input required onChange={(e)=>{setEmail(e.target.value)}} placeholder="Digite seu e-mail" type="email" />

                    </InputContainer>

                    <InputContainer >
                        <LockKey className="icon" size={17} color="#8647AD" weight="fill" />
                        <input required onChange={(e)=>{setPassword(e.target.value)}} placeholder="Dugite sua nova senha" type="password" />
                    </InputContainer>

                    <ButtonContainer disabled={email.includes("@") && password.length > 5? false:true} type="button" className="button" onClick={updatePassword}>
                        Alterar senha
                    </ButtonContainer>

                </form>
                ) : (
                    <form className="input-container">

                    <InputContainer >

                        <User className="icon" size={17} color="#8647AD" weight="fill" />
                        <input required onChange={(e)=>{setName(e.target.value)}} placeholder="Nome Completo" type="text" />

                    </InputContainer>

                    <InputContainer >

                        <EnvelopeSimple className="icon" size={17} color="#8647AD" weight="fill" />
                        <input required onChange={(e)=>{setEmail(e.target.value)}} placeholder="E-mail" type="email" />

                    </InputContainer>

                    <InputContainer >
                        <LockKey className="icon" size={17} color="#8647AD" weight="fill" />
                        <input required onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" type="password" />
                    </InputContainer>

                    <ButtonContainer disabled={name.length>3 && email.includes("@") && password.length > 5? false:true} type="button" className="button" onClick={addUser}>
                        Cadastrar
                    </ButtonContainer>

                </form> 
                )}

                

                <div className="finish">
                    <p>Ao clicar em "criar minha conta grátis", declaro que
                    aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </p>
                    <p>Ja tenho uma conta.<span>Fazer login</span></p>
                </div>


            </div>
        </LoginContainer>
    )
}
