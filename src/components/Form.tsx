import React from "react";
import { useState } from "react";
import { createItem } from "../services/items";
import "../index.css";

export default function Form() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  const cleanInputs = () => {
    setNombre("");
    setPrecio("");
    setImagen("");
  };

  const enviar = () => {
    createItem({ description: nombre, price: precio, img: imagen });
    cleanInputs();
    alert("Producto Agregado");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ marginTop: 100 }}>Agregar</div>
        <div style={{ marginBottom: 50 }}>Producto:</div>
        <div className="inputs">
          <input
            id="nombre"
            placeholder="nombre..."
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            id="precio"
            placeholder="precio..."
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          <input
            id="imagen"
            placeholder="imagen..."
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                backgroundColor: "#03318c",
                color: "white",
                width: 200,
                height: 50,
                borderRadius: 5,
              }}
              onClick={() => enviar()}
            >
              Enviar
            </button>
            <button
              style={{
                borderColor: "#03318c",
                border: 2,
                borderStyle: "solid",
                color: "#03318c",
                width: 200,
                height: 50,
                borderRadius: 5,
              }}
              onClick={() => cleanInputs()}
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
