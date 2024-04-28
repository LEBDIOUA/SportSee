import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilPage from './pages/ProfilPage';
import ErrorPage from './pages/ErrorPage';
import Header from "./components/Header";
import VerticalMenu from "./components/VerticalMenu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <VerticalMenu />
      <Routes>
        <Route path="/user/:id" element={<ProfilPage />} />
        <Route path="/user/" element={<ProfilPage />} />
        <Route path="*" element={<ErrorPage err='pageIntrouvable' />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
