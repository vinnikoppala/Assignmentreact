import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}
