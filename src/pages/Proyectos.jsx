import styled from "styled-components";
import { Card } from "../components/Proyectos/ContadorClick/Card";
import imgContador from "../assets/contador.png";

export function Proyectos() {
  return (
    <Container>
      <h1>Proyectos</h1>
      <div className="CardContent">
        <Card
          imgSrc={imgContador}
          imgAlt="Imagen contador"
          title="Conta-Click"
          description="Contador de clicks usando useState y styled-component"
          link="/contador-click"
        />
        <Card
          imgSrc="https://picsum.photos/300/200"
          imgAlt="Imagen Todo"
          title="To-Do-App"
          description="App de tareas a realizar"
          link="/todoapp"
        />
        <Card
          imgSrc="https://picsum.photos/300/200"
          imgAlt="Imagen Otro"
          title="Otro"
          description="Otra app cque aun no he hecho. Pronto estara disponible."
          link="/todoapp"
        />
        <Card
          imgSrc="https://picsum.photos/300/200"
          imgAlt="Imagen contador"
          title="Otro"
          description="Otra app cque aun no he hecho. Pronto estara disponible."
          link="/todoapp"
        />
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  min-height: 100vh;
  height: auto;
  width: 100%;
  h1 {
    margin: 20px;
  }
  .CardContent {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
`;
