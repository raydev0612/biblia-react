/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

export const Next = () => {
  return (
    <Container>
      <div>
        <p>
          Next.js es un framework de React para crear aplicaciones web de pila
          completa. Utilice React Components para crear interfaces de usuario y
          Next.js para funciones y optimizaciones adicionales.
        </p>
        <p>
          <strong className="font-bold italic">Nota: </strong>Los códigos
          referidos podrá correrlos tanto en la terminal integrada de VS Code
          como en la terminal del sistema (Windows/Linux/MacOs)
        </p>
        <h2 style={{ margin: "20px 0px" }}>Instalación Automatica</h2>

        <h2>&#60;NPX &#47;&#62;</h2>
        <div className="codigo" style={{ margin: "20px" }}>
          <p>npx create-next-app@latest</p>
        </div>
        <h2>Durante la instalación, verá las siguientes indicaciones:</h2>
        <div className="codigo" style={{ margin: "20px" }}>
          <p>
            1 What is your project named? my-app Would you like to use
            TypeScript? No / Yes <br />
            2 Would you like to use ESLint? No / Yes <br />
            3 Would you like to use Tailwind CSS? No / Yes <br />
            4 Would you like to use `src/` directory? No / Yes <br />
            5 Would you like to use App Router? (recommended) No / Yes <br />
            6 Would you like to customize the default import alias (@/*)? No /
            Yes <br />7 What import alias would you like configured? @/*
          </p>
        </div>
        <p>
          <strong>Bueno saber: </strong>
          <br />
          - Next.js ahora viene con la configuración TypeScript, ESLint y
          Tailwind CSS de forma predeterminada. <br />- Opcionalmente, puedes
          usar un directorio src en la raíz de tu proyecto para separar el
          código de tu aplicación de los archivos de configuración.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 18px;
  .codigo {
    padding: 18px;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.bg};
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 50%;
    height: auto;
  }
`;
