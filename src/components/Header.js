import { useNavigate } from "react-router-dom"
import { goToHomePage, goToProfilePage, goToProductPage } from "../Router/coordinator";

function Header () {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => goToHomePage(navigate)} >
                Ir pra página inicial
            </button>
            <button onClick={() =>  goToProfilePage(navigate, "Lucas")} >
                Ir pra página de perfil
            </button>
             <button onClick={() => goToProductPage(navigate, 10)}>
                 Ir pra página de produto
             </button>
        </div>
    )
}

export default Header