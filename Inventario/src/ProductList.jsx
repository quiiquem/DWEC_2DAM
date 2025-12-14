export default function ProductList({ inventory }) {
  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            {item.id} - {item.name} | Stock: {item.stock} | Precio: €{item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
