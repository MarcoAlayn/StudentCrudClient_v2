import React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/students' element={<Students />} />
      <Route path='*' element={<NotFound />} /> {/* Ruta para manejar 404 */}
    </Routes>
  );
};

export default App;
