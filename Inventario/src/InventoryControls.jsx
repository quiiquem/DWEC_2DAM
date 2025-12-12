
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
    