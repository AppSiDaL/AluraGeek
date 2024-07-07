import { useEffect, useState } from "react";
import { getItems } from "../services/items";
import ItemCard from "./ItemCard";

export default function ListItems() {
  const [items, setItems] = useState<
    {
      name: string;
      id: string;
      img: string;
      price: number;
      description: string;
    }[]
  >([]);

  useEffect(() => {
    getItems().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div style={{ marginTop: 50, textAlign: "center" }}>
      <div style={{ marginTop: 50, marginBottom: 50 }}>Mis Productos:</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxHeight: "calc(100vh - 100px)", // Ajusta este valor según el espacio disponible
          overflowY: "auto",
        }}
      >
        {items?.map((item) => (
          <ItemCard
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            description={item.description}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
