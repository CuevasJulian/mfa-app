import { Route, Routes, useNavigate } from "react-router-dom";
import Button from "./components/Button";
import ReactLogo from "./pages/ReactLogo";
import Meme from "./pages/Meme";

export default function MFApp() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100px",
          flex: "none",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => navigate("/")} text="To Logo" />
        <Button onClick={() => navigate("/random")} text="To Meme" />
      </div>
      <div className="page-container">
        <Routes>
          <Route path="/">
            <Route path="" element={<ReactLogo />} />
            <Route path="/random" element={<Meme />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
