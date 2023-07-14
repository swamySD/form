import { createContext ,useState} from "react";
import LoginForm from "./componets/LoginForm";

function App() {
  const [data,setData]=useState(0)
  return (
  <LoginForm/>
  )
}

export default App;
