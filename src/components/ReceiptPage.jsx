import { useLocation, useNavigate } from "react-router-dom";
import Receipt from "./Receipt";

export default function ReceiptPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="text-center">
        <p>No receipt data found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return <Receipt data={data} />;
}