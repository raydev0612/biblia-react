import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Instalar } from "../pages/Instalar";
import { Componentes } from "../pages/Componentes";
import { Hooks } from "../pages/Hooks";
import { Proyectos } from "../pages/Proyectos";
import { ErrorPage } from "../pages/ErrorPage";
import { ContadorClick } from "../components/Proyectos/ContadorClick";
import { TodoApp } from "../components/Proyectos/Todo";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/instalar" element={<Instalar />} />
      <Route path="/componentes" element={<Componentes />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/contador-click" element={<ContadorClick />} />
      <Route path="/todoapp" element={<TodoApp />} />
    </Routes>
  );
}
