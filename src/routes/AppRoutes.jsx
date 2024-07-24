import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/hero/:id" element={<Pokemon />} /> */}
    </Routes>
  );
};
