import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Page404 from "./pages/Page404";
import ArtProjects from "./pages/ArtProjects";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className={"App container"}>
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL} element={<App />} />
        <Route path={`${process.env.PUBLIC_URL}/art/*`} element={<ArtProjects />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
