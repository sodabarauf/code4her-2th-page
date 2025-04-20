import React from "react";
export default function BalanceCard({ title, amount, dark }) {
  return (
    <div className={`rounded-xl p-6 shadow-md ${dark ? "bg-[#0B0D2B] text-white" : "bg-white text-gray-800"}`}>
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-2xl font-semibold mt-2">{amount}</p>
    </div>
  );
}
  