import SignIn from "./SignIn";
import PatientDetails from "./pages/patientDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import AnalysisPage from "./pages/AnalysisPage";
import Test from "./pages/test";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route index element={<SignIn />} />
            <Route path="/patient-details" element={<PatientDetails />} />
            <Route path="/AnalysisPage" element={<AnalysisPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
