import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProfilePage() {
  const pathParams = useParams()

  return (
    <main>
    <Header />
      <h1>Página de perfil do {pathParams.name} </h1>
      </main>
  );
}

export default ProfilePage;
