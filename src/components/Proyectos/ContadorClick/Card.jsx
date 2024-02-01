import styled from "styled-components";
import { Link } from "react-router-dom";

export function Card({ imgSrc, imgAlt, title, description, link }) {
  return (
    <Container>
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="CardImage" />
      )}

      {title && <h2 className="CardTitle">{title}</h2>}
      {description && <p className="CardDescription">{description}</p>}
      {link && (
        <Link to={link} className="CardBtn">
          Ver Proyecto
        </Link>
      )}
    </Container>
  );
}
const Container = styled.div`
  max-width: 400px;
  width: 15rem;
  border-radius: 1rem;
  box-shadow: 1px 0px 8px 2px #999;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  /* justify-content: space-between; */
  height: fit-content;
  /* height: 450px; */
  .CardImage {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
  }
  .CardTitle,
  .CardDescription {
    margin: 0.5rem 5%;
  }
  .CardBtn {
    text-align: center;
    width: 90%;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    background-color: #2563eb;
    color: ${(props) => props.theme.text};
    text-decoration: none;
    margin: 0.5rem auto;
  }
`;
