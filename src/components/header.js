import { useNavigate } from "react-router-dom";
import { goToHomePage, goToProductPage, goToProfilePage } from "../routes/Coordinator";

function Header() {
    const navigate = useNavigate()

    return (
        <header>
            <button onClick={() => goToHomePage(navigate)} >
                Ir para Home
            </button>

            <button onClick={() => goToProfilePage(navigate, "Éverson")}>
                Ir para Profile
            </button>

            <button onClick={() => goToProductPage(navigate)}>
                Ir para Products Page
            </button>

        </header>
    );
}

export default Header;