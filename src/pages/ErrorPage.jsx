import styled from "styled-components";
import img1 from "../assets/img1.svg";

export function ErrorPage() {
  return (
    <Container>
      <img src={img1} alt="Imagen" />
      <h1>La pagina que ha solicitado no se encuentra dispnible</h1>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Titleerror {
    font-size: 70px;
    color: red;
  }

  img {
    /* height: 200px; */
    width: 50%;
    margin: 30px;
  }
`;
