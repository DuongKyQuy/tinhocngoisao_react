import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Thay đổi ở đây
import { routes } from "./routes";
import DefaultComponent from "./components/DeFaultComponent/DefaultComponent";
function App() {
  return (
    <div>
      <BrowserRouter>
        {" "}
        {/* Sử dụng BrowserRouter thay vì Route */}
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout=route.isShowHeader ? DefaultComponent : Fragment
            return <Route key={route.path} path={route.path} element={
            <Layout>
            <Page/>
            </Layout>} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
