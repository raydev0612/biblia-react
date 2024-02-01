import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

export function TodoApp() {
  const [datos, setDatos] = useState([]);
  const [input, setInput] = useState("");

  const getDadtos = () => {};

  useEffect(() => {
    getDadtos();
  }, []);
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>To-Do-App</h1>
      <div className="FormContainer">
        <input onChange={(e) => setInput(e.target.value)} type="text" />
        <button>Agregar</button>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 90%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};
  .FormContainer {
    margin: 20px 0;
    input {
      margin-right: 10px;
      font-size: 24px;
      padding: 10px 8px;
      border: none;
      outline: none;
      border-radius: 10px;
      background: ${(props) => props.theme.bg};
      color: ${(props) => props.theme.text};
    }
    button {
      padding: 10px 8px;
      font-size: 24px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      background: ${(props) => props.theme.bg};
      color: ${(props) => props.theme.text};
      transition: all 0.3s;
      &:hover {
        opacity: 0.7;
        color: #00dff3;
      }
    }
  }
`;
