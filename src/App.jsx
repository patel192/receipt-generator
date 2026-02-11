import { useState } from "react";
import ReceiptForm from "./components/ReceiptForm";
import Receipt from "./components/Receipt";

export default function App() {
  const [receiptData, setReceiptData] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        <ReceiptForm setReceiptData={setReceiptData} />
        {receiptData && <Receipt data={receiptData} />}
      </div>
    </div>
  );
}
