import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import Navbar from "./components/Navbar";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
