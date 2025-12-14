import { useReducer, useRef } from "react";
import inventoryReducer from "./inventoryReducer";
import InventoryControls from "./InventoryControls";
import ProductList from "./ProductList";

import "./App.css";

function App() {
  const initialInventory = [
    { id: 101, name: "Tornillos M4 (Caja)", stock: 150, price: 0.15 },
    { id: 102, name: "Cable Ethernet 5m", stock: 50, price: 5.99 },
    { id: 103, name: "Kit de Herramientas", stock: 12, price: 45.0 },
  ];

  const [inventory, dispatch] = useReducer(inventoryReducer, initialInventory);

  //subir el id por cada uso
  const nextIdRef = useRef(Math.max(...initialInventory.map(p => p.id)) + 1);

  // Handlers
const handleAddProduct = (name, price) => {
  const newId = nextIdRef.current;  
  dispatch({
    type: "ADD_PRODUCT",
    id: newId,
    name,
    price: parseFloat(price) || 0.0,
  });
  nextIdRef.current += 1; 
};


  const handleRemoveProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", id });
  };

  const handleEditProduct = (id, newPrice) => {
    dispatch({ type: "PRICE_UPDATE", id, newPrice: parseFloat(newPrice) });
  };

  const handleReStock = (id, amount) => {
    dispatch({ type: "RESTOCK", id, amount: parseInt(amount) || 0 });
  };

  return (
    <>
      <h1>INVENTARIO DWEC</h1>
      <InventoryControls
        onAdd={handleAddProduct}
        onRemove={handleRemoveProduct}
        onEdit={handleEditProduct}
        onRestock={handleReStock}
      />
      <ProductList inventory={inventory} />
    </>
  );
}

export default App;
