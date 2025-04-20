import InvoiceRow from "./Invoice-data";
import React from "react";
const invoices = [
  { id: "#Mraz-Sons 402", client: "Mraz and Sons", amount: "$3.120,98", status: "Paid", date: "24 February 2024" },
  { id: "#Stokes LLC 02", client: "Stokes LLC", amount: "$1.327,80", status: "Paid", date: "21 February 2024" },
  { id: "#BBP 16", client: "Bergnaum, Blick and Pagac", amount: "$2.700,31", status: "Outstanding", date: "18 February 2024" },
  { id: "#Bash-Grim 01", client: "Bashirian-Grimes", amount: "$4.219,58", status: "Overdue", date: "17 February 2024" },
  { id: "#McC-Schinner 09", client: "McCullough-Schinner", amount: "$3.230,74", status: "Overdue", date: "16 February 2024" },
];

export default function InvoiceTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Invoices</h2>
        <div className="space-x-2">
          <button className="border border-gray-400 text-sm px-4 py-1 rounded-md hover:bg-gray-100">View all Invoices</button>
          <button className="bg-blue-600 text-white text-sm px-4 py-1 rounded-md hover:bg-blue-700">+ New Invoice</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 px-2"><input type="checkbox" /></th>
              <th className="py-2 px-2">INVOICE</th>
              <th className="py-2 px-2">CLIENT</th>
              <th className="py-2 px-2">AMOUNT</th>
              <th className="py-2 px-2">STATUS</th>
              <th className="py-2 px-2">DATE</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, id) => (
              <InvoiceRow key={invoice.id} {...invoice} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
