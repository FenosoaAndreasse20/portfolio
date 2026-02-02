import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Configurer Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Sale {
  product: string;
  price: number;
  quantity: number;
}

export default function DashboardSales() {
  const initialSales: Sale[] = [
    { product: "Produit A", price: 10, quantity: 2 },
    { product: "Produit B", price: 15, quantity: 1 },
    { product: "Produit C", price: 7, quantity: 5 },
    { product: "Produit D", price: 20, quantity: 3 },
  ];

  const [sales, setSales] = useState<Sale[]>(initialSales);
  const [filter, setFilter] = useState("");

  const filteredSales = sales.filter(s =>
    s.product.toLowerCase().includes(filter.toLowerCase())
  );

  const total = filteredSales.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Préparer les données pour le graphique
  const data = {
    labels: filteredSales.map((s) => s.product),
    datasets: [
      {
        label: "Montant des ventes",
        data: filteredSales.map((s) => s.price * s.quantity),
        backgroundColor: "rgba(59, 130, 246, 0.7)", // bleu tailwind
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Ventes par produit",
      },
    },
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
      <h4 className="text-lg font-semibold mb-3">Ventes</h4>

      {/* Filtre par produit */}
      <input
        type="text"
        placeholder="Filtrer par produit..."
        className="mb-3 px-3 py-2 w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <table className="w-full text-left border-collapse mb-4">
        <thead>
          <tr>
            <th className="border-b px-2 py-1">Produit</th>
            <th className="border-b px-2 py-1">Prix</th>
            <th className="border-b px-2 py-1">Quantité</th>
            <th className="border-b px-2 py-1">Montant</th>
          </tr>
        </thead>
        <tbody>
          {filteredSales.map((item, i) => (
            <tr key={i} className="even:bg-gray-200 dark:even:bg-gray-600">
              <td className="px-2 py-1">{item.product}</td>
              <td className="px-2 py-1">${item.price}</td>
              <td className="px-2 py-1">{item.quantity}</td>
              <td className="px-2 py-1">${item.price * item.quantity}</td>
            </tr>
          ))}
          {filteredSales.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-2 text-gray-500 dark:text-gray-300">
                Aucun produit trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <p className="mb-3 font-semibold">Total : ${total}</p>

      {/* Graphique */}
      <div className="bg-white dark:bg-gray-800 p-3 rounded shadow">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
