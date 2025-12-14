import { useReducer } from "react";
import inventoryReducer from "./inventoryReducer";
import InventoryControls from "./InventoryControls";
import ProductList from "./ProductList";

let nextId = 104;

export default function InventoryApp() {
  const initialInventory = [
    { id: 101, name: "Tornillos M4 (Caja)", stock: 150, price: 0.15 },
    { id: 102, name: "Cable Ethernet 5m", stock: 50, price: 5.99 },
    { id: 103, name: "Kit de Herramientas", stock: 12, price: 45.0 },
  ];

  const [inventory, dispatch] = useReducer(inventoryReducer, initialInventory);

  const handleAddProduct = (name, price) => {
    dispatch({
      type: "ADD_PRODUCT",
      id: nextId++,
      name,
      price: parseFloat(price) || 0.0,
    });
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
    <div>
      <h1>INVENTARIO DWEC</h1>
      <InventoryControls
        onAdd={handleAddProduct}
        onRemove={handleRemoveProduct}
        onEdit={handleEditProduct}
        onRestock={handleReStock}
      />
      <ProductList inventory={inventory} />
    </div>
  );
}
