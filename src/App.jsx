import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Enterprise from "./pages/Enterprise";
import Individuals from "./pages/Individuals";
import Teams from "./pages/Teams";
import RootLayout from "./Layout/RootLayout";

const App = () => {
  const MyRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/teams" element={<Teams />} />
      </Route>
    )
  );
  return <RouterProvider router={MyRouter} />;
};

export default App;
