import { Routes, Route } from "react-router-dom";
import { ProfileList } from "../pages/ProfileList";
import { DetalheVideo } from "../pages/detalheVideo";
import { SignIn } from "../pages/SignIn";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProfileList /> } />
      <Route path="/view" element={<DetalheVideo /> } />
      <Route path="/signin" element={<SignIn /> } />
    </Routes>
  )
}