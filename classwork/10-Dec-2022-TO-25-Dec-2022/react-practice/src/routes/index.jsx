import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Post from "../components/Post";
import PostDetail from "../components/PostDetail";
import Signup from "../components/Signup";
import AppLayout from "../components/AppLayout";
import Homepage from "../container/Homepage";
import Shoes from "../components/Shoes";
import ShoeDetail from "../components/ShoeDetail";
import Cars from "../components/Cars";
import CarDetail from "../components/CarDetail";
import CarForm from "../components/CarForm";
import Task1 from "../tasks/Task1";
import Task2 from "../tasks/Task2";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<AppLayout />}>
          <Route path="/posts" element={<Post />} />
          <Route path="/post-detail/:id" element={<PostDetail />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/shoe-detail/:id" element={<ShoeDetail />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car-detail/:id" element={<CarDetail />} />
          <Route path="/car-form" element={<CarForm />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
