import { useParams } from "react-router-dom";

function ProfilePage() {
  const pathParams = useParams()

  return (
    <section>
      <h1>Página de perfil do {pathParams.name} </h1>
    </section>
  );
}

export default ProfilePage;
