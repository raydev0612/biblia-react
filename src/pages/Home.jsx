import styled from "styled-components";

export function Home() {
  return (
    <Container>
      <h1 className="Hometitle">React</h1>
      <div className="content">
        <p>
          En esta pagina podrá encontrar el contenido mas completo y actualizado
          sobre la librería de Javascript ReactJS.
        </p>
      </div>
      <div>
        <h2 className="Homesubtitle">Que es y para que sirve?</h2>
        <p style={{ margin: "15px 0" }}>
          React (también llamada React.js o ReactJS) es una librería Javascript
          de código abierto diseñada para crear interfaces de usuario con el
          objetivo de facilitar el desarrollo de aplicaciones en una sola
          página. Es mantenido por Facebook y la comunidad de software libre. En
          el proyecto hay más de mil desarrolladores libres.
        </p>
        <p>
          React intenta ayudar a los desarrolladores a construir aplicaciones
          que usan datos que cambian todo el tiempo. Su objetivo es ser
          sencillo, declarativo y fácil de combinar. React sólo maneja la
          interfaz de usuario en una aplicación; React es la Vista en un
          contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o
          MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con
          las extensiones de React-based que se encargan de las partes no-UI
          (que no forman parte de la interfaz de usuario) de una aplicación web.
        </p>
      </div>
      <div>
        <h2 className="Homesubtitle">Características</h2>
        <div>
          <h3 className="caract">Virtual DOM:</h3>
          <p>
            React mantiene un virtual DOM propio, en lugar de confiar solamente
            en el DOM del navegador. Esto deja a la biblioteca determinar qué
            partes del DOM han cambiado comparando contenidos entre la versión
            nueva y la almacenada en el virtual DOM, y utilizando el resultado
            para determinar cómo actualizar eficientemente el DOM del navegador.
            Propiedades (props) de react.
          </p>
        </div>
        <div>
          <h3 className="caract">Propiedades:</h3>
          <p>
            Las propiedades (también conocidas como 'props') pueden definirse
            como los atributos de configuración para dicho componente. Éstas son
            recibidas desde un nivel superior, normalmente al realizar la
            instancia del componente y por definición son inmutables.
          </p>
        </div>
        <div>
          <h3 className="caract">Estados:</h3>
          <p>
            El estado de un componente se define como una representación del
            mismo en un momento concreto, es decir, una instantánea del propio
            componente. Existen dos tipos de componentes con y sin estado,
            denominados stateful y stateless.
          </p>
        </div>
        <div>
          <h3 className="caract">Ciclos de Vida:</h3>
          <p>
            El ciclo de vida es una serie de estados por los cuales pasan los
            componentes statefull a lo largo de su existencia. Se pueden
            clasificar en tres etapas de montaje o inicialización, actualización
            y destrucción. Dichas etapas tienen correspondencia en diversos
            métodos.
          </p>
          <ul className="items">
            <li>
              shouldComponentUpdate permite al desarrollador prevenir el
              re-renderizado innecesario de un componente, devolviendo falso si
              no es necesario.
            </li>
            <li>
              componentDidMount es llamado una vez que el componente es
              "montado" (el componente ha sido creado en la interfaz de usuario,
              usualmente asociándolo con el nodo del DOM). Esto es comúnmente
              usado para provocar la carga de datos desde una fuente remota a
              través de una API.
            </li>
            <li>
              componentWillUnmount es llamado inmediatamente antes de que el
              componente es "desmontado". Es comúnmente usado para limpiar la
              demanda de dependencias del componente que no será simplemente
              removido con el desmontaje del componente.
            </li>
            <li>
              render es el método más importante de los ciclos de vida y el
              único requerido en cualquier componente. Es usualmente llamado
              cada vez que el estado del componente es actualizado, reflejando
              los cambios en la interfaz de usuario.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="caract">JSX:</h3>
          <p>
            React utiliza una sintaxis parecida a HTML, llamada JSX. No es
            necesaria para utilizar React, sin embargo, hace el código más
            legible.
          </p>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: auto;
  width: 90%;
  margin: 10px auto;
  margin-bottom: 40px;
  .Hometitle {
    text-align: center;
    margin: 20px;
    text-transform: uppercase;
  }
  .Homesubtitle {
    text-align: center;
    margin: 20px;
    text-transform: uppercase;
  }
  .content {
    margin: 15px 0;
  }
  .caract {
    margin: 15px;
  }
  .items {
    li {
      margin-left: 20px;
    }
  }
`;
