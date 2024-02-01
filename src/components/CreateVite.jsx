/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

export const Vite = () => {
  return (
    <Container>
      <div className="Firstcontent">
        <p>
          Vite (palabra francesa para "rápido", pronunciada /vit/, como "veet")
          es una herramienta de construcción que tiene como objetivo
          proporcionar una experiencia de desarrollo más rápida y eficiente para
          proyectos web modernos.
        </p>
        <p>
          <strong>Nota: </strong>Los códigos referidos podrá correrlos tanto en
          la terminal integrada de VS Code como en la terminal del sistema
          (Windows/Linux/MacOs)
        </p>
        <h2>&#60;NPM &#47;&#62;</h2>
        <div className="codigo">
          <p>npm create vite@latest my-app</p>
        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <h2>&#60;YARN &#47;&#62;</h2>
        <div className="codigo">
          <p>yarn create vite</p>
        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <h2>&#60;PNPM &#47;&#62;</h2>
        <div className="codigo">
          <p>ypnpm create vite</p>
        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <h2>&#60;BUN &#47;&#62;</h2>
        <div className="codigo">
          <p>bunx create-vite</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 18px;
  .Firstcontent {
    margin: 20px;
    p {
      margin: 10px 0;
    }
  }
  .codigo {
    padding: 10px 15px;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.bg};
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 50%;
    height: 60px;
  }
`;
