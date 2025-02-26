// src/components/BarChartComponent.tsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Seg", vendas: 40 },
  { name: "Ter", vendas: 70 },
  { name: "Qua", vendas: 50 },
  { name: "Qui", vendas: 90 },
  { name: "Sex", vendas: 100 },
  { name: "Sab", vendas: 180 },
  { name: "Dom", vendas: 150 },
];

const BarChartComponent: React.FC = () => (
  <ResponsiveContainer width="50%" height={300}>
    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="vendas" fill="#dbb313" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
