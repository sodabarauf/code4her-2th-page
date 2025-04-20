import BalanceCard from "@/component/balance";
import InvoiceTable from "@/component/invoice-table";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300 px-56 pt-24">
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <BalanceCard title="Balance" amount="$ 10,234.40" />
        <BalanceCard title="Pending" amount="$ 24,497.13" dark />
      </div>
      <InvoiceTable />
    </div>
  );
}
