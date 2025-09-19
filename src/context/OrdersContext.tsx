import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Order {
  id: number;
  customer: string;
  product: string;
  amount: number;
  status: "Pending" | "Shipped" | "Completed";
  date: string;
}

interface OrdersContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  deleteOrder: (id: number) => void;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      customer: "John Doe",
      product: "Wireless Mouse",
      amount: 25,
      status: "Pending",
      date: "2025-09-15",
    },
    {
      id: 2,
      customer: "Jane Smith",
      product: "Laptop",
      amount: 750,
      status: "Shipped",
      date: "2025-09-14",
    },
    {
      id: 3,
      customer: "Eddy Nibyose",
      product: "Printer",
      amount: 120,
      status: "Completed",
      date: "2025-09-12",
    },
  ]);

  const addOrder = (order: Order) => {
    setOrders((prev) => [...prev, order]);
  };

  const deleteOrder = (id: number) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, deleteOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) throw new Error("useOrders must be used within OrdersProvider");
  return context;
};
