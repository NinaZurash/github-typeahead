import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import UserProfile from "@/pages/UserProfile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
