import { useState } from "react";

export default function InventoryControls({ onAdd, onRemove, onEdit, onRestock }) {
  // Estados locales para los formularios
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [removeId, setRemoveId] = useState("");
  const [editId, setEditId] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [stockId, setStockId] = useState("");
  const [stockAmount, setStockAmount] = useState("");

  // Handlers que llamaran a las funciones con sus props

  //handle para añadir producto
const handleAddProduct = () => {
  if (name.trim() !== "") {
    onAdd(name, price);
    setName("");
    setPrice("");
  }
};

//handle para borrar producto
const handleRemoveProduct = () => {
  const idNum = parseInt(removeId, 10);
  if (!isNaN(idNum)) {
    onRemove(idNum);
  }
  setRemoveId("");
};

//handle para editar producto
const handleEditProduct = () => {
  const idNum = parseInt(editId, 10);
  const priceNum = parseFloat(editPrice);
  if (!isNaN(idNum) && !isNaN(priceNum)) {
    onEdit(idNum, priceNum);
  }
  setEditId("");
  setEditPrice("");
};


//handle para reponer stock
const handleReStock = () => {
  const idNum = parseInt(stockId, 10);
  const amountNum = parseInt(stockAmount, 10);
  if (!isNaN(idNum) && !isNaN(amountNum)) {
    onRestock(idNum, amountNum);
  }
  setStockId("");
  setStockAmount("");
};

  return (
    <div>
      <h2>Añadir un producto</h2>
      <input
        placeholder="Añadir Producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Añadir Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Añadir Producto</button>

      <h2>Eliminar un producto</h2>
      <input
        placeholder="Pon el ID del Producto"
        value={removeId}
        onChange={(e) => setRemoveId(e.target.value)}
      />
      <button onClick={handleRemoveProduct}>Eliminar Producto</button>

      <h2>Editar precio</h2>
      <input
        placeholder="ID del Producto"
        value={editId}
        onChange={(e) => setEditId(e.target.value)}
      />
      <input
        placeholder="Editar Precio"
        value={editPrice}
        onChange={(e) => setEditPrice(e.target.value)}
      />
      <button onClick={handleEditProduct}>Editar Producto</button>

      <h2>Reponer stock</h2>
      <input
        placeholder="ID del Producto"
        value={stockId}
        onChange={(e) => setStockId(e.target.value)}
      />
      <input
        placeholder="Cantidad a añadir"
        value={stockAmount}
        onChange={(e) => setStockAmount(e.target.value)}
      />
      <button onClick={handleReStock}>Poner Stock</button>
    </div>
  );
}
