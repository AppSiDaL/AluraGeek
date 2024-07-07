import { deleteItem } from "../services/items";

interface ItemCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;
}

export default function ItemCard({
  id,
  name,
  description,
  price,
  img,
}: ItemCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#020659",
        color: "white",
        width: 200,
        height: 300,
        textAlign: "center",
        padding: 10,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img src={img} alt={name} width={150} height={150} />
        <p>{description}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>$ {price}.00</p>
        <button
          onClick={() => {
            deleteItem(id);
            alert("Producto eliminado");
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
