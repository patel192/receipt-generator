import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import vsaLogo from "../assets/logo.jpg";
import academy2Logo from "../assets/dbfa-logo.png";
import signature from "../assets/signature.png";

export default function Receipt({ data }) {
  const receiptRef = useRef(null);

  // =========================
  // ACADEMY CONFIG
  // =========================
  const academyConfig = {
    vsa: {
      name: "Vadodara Sports Academia",
      instagram: "@vadodarasportsacademia",
      manager: "Anoop Sunil",
      logo: vsaLogo,
    },
    dbfa: {
      name: "Dwivedi Brother Football Academy",
      instagram: "@dwivedibrothers.sc",
      manager: "Anoop Sunil",
      logo: academy2Logo,
    },
  };

  const selectedAcademy =
    academyConfig[data?.academy] || academyConfig["vsa"];

  // =========================
  // PRINT HANDLER (v3 FIXED)
  // =========================
  const handlePrint = useReactToPrint({
    contentRef: receiptRef, // ✅ NEW v3 SYNTAX
    documentTitle: `receipt-${data?.receiptNo || "file"}`,
  });

  return (
    <>
      {/* =========================
          RECEIPT CONTENT
      ========================= */}
      <div
        ref={receiptRef}
        className="bg-white text-black rounded-2xl shadow-2xl p-6 md:p-12 mt-10 print:shadow-none"
      >
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 gap-6">
          <div className="flex items-center gap-4">
            <img
              src={selectedAcademy.logo}
              alt="logo"
              className="w-16 md:w-20"
            />
            <h1 className="text-2xl md:text-3xl font-bold">
              {selectedAcademy.name}
            </h1>
          </div>

          <div className="text-lg text-gray-700 text-right">
            <p><b>Receipt No:</b> {data.receiptNo}</p>
            <p><b>Arrive:</b> {data.arrive}</p>
            <p><b>Depart:</b> {data.depart}</p>
          </div>
        </div>

        {/* BILLING */}
        <div className="mt-6 text-lg">
          <p className="font-semibold">Billed To:</p>
          <p className="text-gray-700 font-medium">{data.billedTo}</p>

          <p className="font-semibold mt-2">Address:</p>
          <p className="text-gray-700">{data.address}</p>
        </div>

        {/* TABLE */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-lg">
                <th className="p-3 text-left">Month</th>
                <th className="p-3 text-left">Registration Fees</th>
                <th className="p-3 text-left">Regular Fees</th>
                <th className="p-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t text-lg">
                <td className="p-3">{data.month}</td>
                <td className="p-3">{data.registrationFees}</td>
                <td className="p-3">{data.regularFees}</td>
                <td className="p-3 text-right font-semibold">
                  {data.total}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between mt-10 gap-8">
          <div className="space-y-2 text-lg">
            <p><b>Payment Method:</b> {data.paymentMethod}</p>
            <p><b>Transaction ID:</b> {data.transactionId}</p>
            <p><b>Student Name:</b> {data.studentName}</p>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 w-full md:w-80">
            <div className="flex justify-between text-lg mb-2">
              <span>Sub Total</span>
              <span>{data.subTotal}</span>
            </div>

            <div className="flex justify-between text-lg mb-2">
              <span>Discount</span>
              <span>{data.discount}</span>
            </div>

            <div className="flex justify-between text-lg font-bold border-t pt-2">
              <span>Total</span>
              <span>{data.finalTotal}</span>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-12 border-t pt-6 text-lg text-gray-600">
          <h4>{selectedAcademy.name}</h4>
          <h4>
            Fees once paid are non-refundable. Please keep this receipt for future reference.
          </h4>
          <h4>Instagram: {selectedAcademy.instagram}</h4>
          <p>This is a computer-generated receipt.</p>

          <div className="text-right mt-10">
            <img
              src={signature}
              alt="signature"
              className="w-60 ml-auto"
            />
            <p className="font-semibold mt-2">
              {selectedAcademy.manager}
            </p>
            <p>Manager</p>
          </div>
        </div>
      </div>

      {/* PDF BUTTON */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handlePrint}
          className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
        >
          Download PDF
        </button>
      </div>
    </>
  );
}
