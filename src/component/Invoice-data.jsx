import { useState } from "react";

export default function InvoiceRow({ id, client, amount, status, date }) {
  const [selected, setSelected] = useState(false);
  const statusColor = {
    Paid: "bg-green-500",
    Outstanding: "bg-yellow-400",
    Overdue: "bg-red-500",
  };

  const handleRowClick = () => {
    setSelected(!selected);
  };

  return (
    <tr
      onClick={handleRowClick}
      className={`cursor-pointer hover:bg-gray-100 ${selected ? "bg-gray-100" : ""}`}
    >
      <td className="py-2 px-2">
        <input
          type="checkbox"
          checked={selected}
          className="accent-blue-600"
        />
      </td>
      <td className="py-2 px-2 font-semibold text-blue-700">{id}</td>
      <td className="py-2 px-2">{client}</td>
      <td className="py-2 px-2">{amount}</td>
      <td className="py-2 px-2">
        <span className={`text-white text-xs px-3 py-1 rounded-full ${statusColor[status]}`}>
          {status}
        </span>
      </td>
      <td className="py-2 px-2">{date}</td>
    </tr>
  );
}
