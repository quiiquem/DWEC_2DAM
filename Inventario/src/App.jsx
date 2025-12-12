import { useReducer, useState } from "react";
import inventoryReducer from "./inventoryReducer";
import "./App.css";
import inventoryControls from


  let nextId = 104;
function App() {

  const initialInventory = [
    { id: 101, name: "Tornillos M4 (Caja)", stock: 150, price: 0.15 },
    { id: 102, name: "Cable Ethernet 5m", stock: 50, price: 5.99 },
    { id: 103, name: "Kit de Herramientas", stock: 12, price: 45.0 },
  ];

  const [inventory, dispatch] = useReducer(inventoryReducer, initialInventory);

  // Estados para añadir producto
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Estados para eliminar
  const [removeId, setRemoveId] = useState("");

  // Estados para editar
  const [editId, setEditId] = useState("");
  const [editPrice, setEditPrice] = useState("");

  // Estados para reponer stock
  const [stockId, setStockId] = useState("");
  const [stockAmount, setStockAmount] = useState("");

  // Handlers
  const handleAddProduct = () => {
    dispatch({
      type: "ADD_PRODUCT",
      id: nextId++,
      name,
      price: parseFloat(price) || 0.0,
    });
    setName("");
    setPrice("");
  };

  const handleRemoveProduct = () => {
    dispatch({ type: "REMOVE_PRODUCT", id: parseInt(removeId) });
    setRemoveId("");
  };

  const handleEditProduct = () => {
    if (editName) {
      dispatch({ type: "PRICE_UPDATE", id: parseInt(editId), newPrice: parseFloat(editPrice) });

    }
    setEditId("");
    setEditName("");
    setEditPrice("");
  };

  const handleReStock = () => {
    dispatch({
      type: "RESTOCK",
      id: parseInt(stockId),
      amount: parseInt(stockAmount) || 0,
    });
    setStockId("");
    setStockAmount("");
  };

  return (
    <>
      <h1>INVENTARIO DWEC</h1>
     <InventoryControls></InventoryControls>
</>
  );
}

export default App;
