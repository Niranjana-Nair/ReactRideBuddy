import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function LoginRedirect(){
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("token")){
      navigate("/user-login")
    }
  },[])
}
