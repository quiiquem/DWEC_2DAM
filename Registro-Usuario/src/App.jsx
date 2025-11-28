import React, { useState } from 'react';

function RegistroUsuarios() {
  // Estado del formulario
  const [formData, setFormData] = useState({ //array con usestate para formar la data del objeto
    name: '',
    email: '',
    password: ''
  });

  // Estado de usuarios
  const [users, setUsers] = useState([]);

  // Manejar cambios en inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, //formdata mentioned!!
      [name]: value //coge el valor de nombre en el input
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => { //maneja el envío
    e.preventDefault(); //hace que no se reinicie la página 


    const nuevoUsuario = { //CREACIÓN DEL USUARIO
      id: Date.now(), //El ID
      name: formData.name, //formdatas (valores del objeto)
      email: formData.email,
      password: formData.password,
      registeredAt: new Date().toLocaleString() //registrado en: la fecha de ahora 
    };

    setUsers([...users, nuevoUsuario]);
    setFormData({ name: '', email: '', password: '' });
    alert('Usuario creado');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Formulario de Registro</h1>

      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <br /><br />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <br /><br />

        <button type="submit">Registrar Usuario</button>
      </form>

      <h2>Usuarios Registrados ({users.length})</h2>
      {users.length === 0 ? (
        <p>Aún no hay usuarios registrados.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {users.map(user => (
            <li key={user.id} style={{ borderBottom: '1px dotted #eee', padding: '10px 0' }}>
              <strong>ID:</strong> {user.id}<br />
              <strong>Nombre:</strong> {user.name}<br />
              <strong>Email:</strong> {user.email}<br />
              <small>Registrado en: {user.registeredAt}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegistroUsuarios;
