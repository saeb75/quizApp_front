import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import AuthRoute from "./components/routes/AuthRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Race from "./pages/Race";
import Register from "./pages/Register";

function App() {
  return (
    <div className="relative overflow-hidden">
      <Toaster />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:quizId" element={<Quiz />} />
          <Route path="/race/:raceId" element={<Race />} />
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
