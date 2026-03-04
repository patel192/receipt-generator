import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReceiptForm from "./components/ReceiptForm";
import Receipt from "./components/Receipt";
import ReceiptPage from "./components/ReceiptPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <Routes>
            <Route path="/" element={<ReceiptForm />} />
            <Route path="/receipt" element={<ReceiptPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}