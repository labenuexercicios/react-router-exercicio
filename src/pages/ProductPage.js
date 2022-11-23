import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProductPage() {
  const pathParams = useParams()

  return (
    <main>
    <Header />
      <h1>Página do produto {pathParams.id} </h1>
      </main>
  );
}

export default ProductPage;