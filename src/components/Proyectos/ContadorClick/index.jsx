/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import styled from "styled-components";

export function ContadorClick() {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    setCount(count + 1);
  };
  const disminuir = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <Container>
      <h1>Contador de Clicks</h1>
      <div className="ContadorContainer">
        <button onClick={aumentar} className="btn">
          +
        </button>
        <div className="contador">
          <p>{count}</p>
        </div>
        <div className="btnsButton">
          <button onClick={disminuir} className="btn">
            -
          </button>
          <button onClick={reset} className="btn">
            Reset
          </button>
        </div>
      </div>
      <div className="CodeContainer">
        <h2 className="ProyectTitle">Código del Proyecto</h2>

        <p className="code">
          <span style={{ color: "#99999940" }}>&emsp;1&emsp;</span>
          &emsp;&emsp;import {"{ useState }"} from "react";
          <br />
          <span style={{ color: "#99999940" }}>&emsp;2&emsp;</span>
          &emsp;&emsp;import styled from "styled-components";
          <br />
          <span style={{ color: "#99999940" }}>&emsp;3&emsp;</span>
          <br />
          <span style={{ color: "#99999940" }}>&emsp;4&emsp;</span>
          &emsp;&emsp;export function ContadorClick () {"{"} <br />
          <span style={{ color: "#99999940" }}>&emsp;5&emsp;</span>
          &emsp;&emsp;&emsp;const [count, setCount] = useState(0); <br />
          <span style={{ color: "#99999940" }}>&emsp;6&emsp;</span>
          <br />
          <span style={{ color: "#99999940" }}>&emsp;7&emsp;</span>
          &emsp;&emsp;&emsp;&emsp;&emsp;const aumentar = () {"=>"} {"{"}
          <br />
          <span style={{ color: "#99999940" }}>&emsp;8&emsp;</span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;setCount(count + 1);
          <br />
          <span style={{ color: "#99999940" }}>&emsp;9&emsp;</span>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"}"};
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 10&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;const disminuir = () {"=> {"}
          <br />
          <span style={{ color: "#99999940" }}>&nbsp;&nbsp; 11&emsp;</span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;setCount(count - 1);
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 12&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"}"};
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 13&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;const reset = () {"=> {"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 14&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;setCount(0);
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 15&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"}"};
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 16&nbsp;&nbsp;&nbsp;
          </span>
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 17&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;return {"("}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 18&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;{"<Container>"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 19&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<h1>Contador de Clicks</h1>"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 20&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<div"}{" "}
          className="ContadorContainer"{">"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 21&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<button"} onClick=
          {aumentar} className="btn"
          {">"}+{"</button>"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 22&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<div"}{" "}
          className="contador"{">"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 23&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {"<p>{count}</p>"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 24&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"</div>"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 25&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"<div"}{" "}
          className="btnsButton"
          {">"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 26&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {"<button"} onClick=
          {"{disminuir}"} className="btn"{">"}-{"</button>"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 27&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {"<button"} onClick=
          {"{reset}"} className="btn"{">"}Reset{"</button>"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 28&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"</div>"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 29&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"</div>"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 30&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;{"</Container>"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 31&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;{");"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 32&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;{"}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 33&nbsp;&nbsp;&nbsp;
          </span>
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 34&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;{"{/* Hoja de Estilos usando styled-components */}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 35&nbsp;&nbsp;&nbsp;
          </span>
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 36&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;const Container = styled.div`
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 37&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;height: auto;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 38&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;width: 90%;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 39&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;margin: 10px auto;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 40&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;h1 {"{"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 41&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;text-align{":"} center;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 42&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"margin"}: 20px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 43&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;{"}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 44&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;.ContadorContainer {"{"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 45&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;display: flex;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 46&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;flex-direction: column;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 47&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;justify-content: center;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 48&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;align-items: center;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 49&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;gap: 20px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 50&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;.contador {"{"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 51&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;min-width: 300px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 52&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;width: fit-content;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 53&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;padding: 30px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 54&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;display: flex;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 55&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;justify-content: center;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 56&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;align-items: center;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 57&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;border: 8px solid #fff;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 58&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;border-radius: 20px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 59&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;p {"{"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 60&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;font-size: 4rem;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 61&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{"}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 62&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 63&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;.btnsButton {"{"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 64&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;display: flex;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 65&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gap: 10px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 66&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp; &emsp;&emsp;&emsp;{"}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 67&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;.btn {"{"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 68&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;padding: 5px 20px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 69&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;font-size: 2rem;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 70&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;border: none;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 71&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;border-radius: 10px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 72&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;color: #fff;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 73&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;background: #000;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 74&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cursor: pointer;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 75&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 76&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;{"}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 77&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;.CodeContainer {"{"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 78&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;margin: 60px 0;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 79&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;.ProyectTitle {"{"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 80&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;text-align: center;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 81&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;margin: 20px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 82&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 83&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;.code {"{"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 84&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;color: #fff;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 85&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;background: #000;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 86&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;padding: 20px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 87&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;border-radius: 20px;
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 88&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;&emsp;{"}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 89&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;&emsp;&emsp;{"}"}
          <br />
          <span style={{ color: "#99999940" }}>
            &nbsp;&nbsp; 90&nbsp;&nbsp;&nbsp;
          </span>
          &emsp;&emsp;`
          <br />
        </p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: auto;
  width: 90%;
  margin: 10px auto;
  h1 {
    text-align: center;
    margin: 20px;
  }
  .ContadorContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    min-height: .contador {
      min-width: 300px;
      width: fit-content;
      padding: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 8px solid ${(props) => props.theme.text};
      border-radius: 20px;
      p {
        font-size: 4rem;
      }
    }
    .btnsButton {
      display: flex;
      gap: 10px;
    }
    .btn {
      padding: 5px 20px;
      font-size: 2rem;
      border: none;
      border-radius: 10px;
      color: ${(props) => props.theme.text};
      background: ${(props) => props.theme.bg};
      cursor: pointer;
    }
  }
  .CodeContainer {
    margin: 60px 0;
    .ProyectTitle {
      text-align: center;
      margin: 20px;
    }
    .code {
      color: ${(props) => props.theme.text};
      background: ${(props) => props.theme.bg};
      padding: 20px;
      border-radius: 20px;
      span {
        user-select: none;
      }
    }
  }
`;
