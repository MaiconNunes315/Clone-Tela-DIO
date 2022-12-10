import { ButtonContainer } from "../../components/button/style";
import { LoginContainer } from "./style";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { InputContainer } from "../../components/input/style";
import { EnvelopeSimple, LockKey } from "phosphor-react";
import {useState} from 'react'
import { users } from "../../service/users";

type UserI = {
  id: string
  email: string
  password: string
} 


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function validadeUser() {
    users.filter((user:UserI) => {
      if (user.email === email && user.password === password) {
        navigate(`/feed/${user.id}`)
      } else {
        console.log(false)
      }
    }
    )
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
          <p>Faça seu cadastro</p>
          <span>Faça seu login e make the change._</span>
        </div>


        <form className="input-container">

          <InputContainer>

            <EnvelopeSimple className="icon" size={17} color="#8647AD" weight="fill" />
            <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="E-mail" type="email" />

          </InputContainer>

          <InputContainer >
            <LockKey className="icon" size={17} color="#8647AD" weight="fill" />
            <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" type="password" />
          </InputContainer>

          <ButtonContainer disabled={email.includes("@")&&password.length>5?false:true} className="button" onClick={validadeUser} type="button">
            Entrar
          </ButtonContainer>

        </form>

        <div className="links">
          <Link className="link-one" style={{ color: "#E5E044" }} to={`/register/resetPassword`}>Esqueci minha senha</Link>
          <Link className="link-one" style={{ color: "#23DD7A" }} to="/register">Criar Conta</Link>
        </div>


      </div>
    </LoginContainer>
  )
}
