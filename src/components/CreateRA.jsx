import styled from "styled-components";

export const CreateRA = () => {
  return (
    <Container>
      <div className="Firstcontent">
        <h2 style={{ textAlign: "center" }}>Creacion del Proyecto</h2>
        <p>
          Necesitará tener una version de Node &gt;= 14 en su máquina de
          desarrollo local (pero no es necesario en el servidor). Puede utilizar
          nvm (macOS/Linux) o nvm-windows para cambiar las versiones de Node
          entre diferentes proyectos.
        </p>
        <p>
          <strong>Nota: </strong>Los códigos referidos podrá correrlos tanto en
          la terminal integrada de VS Code como en la terminal del sistema
          (Windows/Linux/MacOs)
        </p>
        <h2>&#60;NPX &#47;&#62;</h2>
        <div className="codigo">
          <p>npx create-react-app my-app</p>
        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <h2>&#60;NPM &#47;&#62;</h2>
        <div className="codigo">
          <p>npm init react-app my-app</p>
        </div>
      </div>
      <div style={{ margin: "20px" }}>
        <h2>&#60;YARN &#47;&#62;</h2>
        <div className="codigo">
          <p>yarn create react-app my-app</p>
        </div>
      </div>
      <div className="Secondcontent">
        <h2>&#60;Seleccionar una plantilla &#47;&#62;</h2>
        <p>
          Ahora puedes opcionalmente iniciar una nueva aplicación desde una
          plantilla agregando --template [nombre-plantilla] al comando de
          creación. Si no lo haces seleccione una plantilla, crearemos su
          proyecto con nuestra plantilla base. Las plantillas siempre se nombran
          en el formato cra-plantilla-[nombre-plantilla], sin embargo, solo
          necesita proporcionar el [nombre de la plantilla] a la creación
          dominio.
        </p>
        <div className="codigo" style={{ margin: "20px" }}>
          <p>npx create-react-app my-app --template [template-name]</p>
        </div>
      </div>
      <div>
        <h2>&#60;Creando una aplicación TypeScript &#47;&#62;</h2>
        <p>
          Puede iniciar una nueva aplicación TypeScript utilizando plantillas.
          Para utilizar la plantilla TypeScript proporcionada, agregue
          <span>--template typescript</span> al comando de creación.
        </p>
        <div className="codigo" style={{ margin: "20px" }}>
          <p>npx create-react-app my-app --template typescript</p>
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
  .Secondcontent {
    margin: 20px 0;
  }
`;
