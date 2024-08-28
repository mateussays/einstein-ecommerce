import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";



const AppRoutes = () => {
  return (
    <Routes>
      <Route  path="/" element={<DefaultLayout />} />
    </Routes>
  );
};

export { AppRoutes };
export default AppRoutes;