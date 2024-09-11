import React from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Students />} />
      <Route path='/login' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
