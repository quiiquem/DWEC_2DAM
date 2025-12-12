 <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            {item.id} - {item.name} | Stock: {item.stock} | Precio: €{item.price}
          </li>
        ))}
      </ul>