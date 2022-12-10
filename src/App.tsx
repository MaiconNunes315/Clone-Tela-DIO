import Header from "./components/header/Header"
import { HeaderContainer } from "./components/header/style"
import Home from "./page/home/home"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./page/login/login";
import Register from "./page/register/register";
import Feed from "./page/feed/Feed";
//import { users } from "./service/users";

function App() {  

  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />}>
          <Route path=":newPassword" element={<Register />} />
        </Route >
        <Route path="feed/:id" element={<Feed/>}/>
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
