import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { AuthProvider } from "./configs/AuthProvider";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App();
