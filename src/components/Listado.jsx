import Table from "react-bootstrap/Table";

const Listado = ({ colaboradores }) => {
  return (
    <Table responsive striped bordered hover variant="dark" className="ps-2">
      <thead>
        <tr>
          <th>nombre</th>
          <th>correo</th>
          <th>edad</th>
          <th>cargo</th>
          <th>telefono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((c) => (
          <tr key={c.id}>
            <td>{c.nombre}</td>
            <td>{c.correo}</td>
            <td>{c.edad}</td>
            <td>{c.cargo}</td>
            <td>{c.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
