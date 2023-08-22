import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ onSubmit, setAlert }) => {

    const [colaborador, setColaborador] = useState({
        nombre:"",
        correo:"",
        edad:"",
        cargo:"",
        telefono:""
})

const handleChange = (e) => {
    setColaborador({
        ...colaborador, 
        [e.target.name]: e.target.value,
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(
        colaborador.nombre ==="" ||
        colaborador.correo===""||
        colaborador.edad===""||
        colaborador.cargo===""||
        colaborador.telefono==="" ){
            setAlert({
                msg:"Favor completar todos los campos...",
                color:"danger"
            })    
            return;
    }
    setAlert({
        msg:"Colaborador agregado correctamente...",
        color:"success"
    });

    onSubmit(colaborador);
    setColaborador({
        nombre:"",
        correo:"",
        edad:"",
        cargo:"",
        telefono:""
    })
}
  return (
    <div>

      <Form onSubmit={handleSubmit}>
      <Form.Group>
          <Form.Control 
          className="mb-3" 
          type="text" 
          placeholder="nombre del colaborador"
          onChange={handleChange}
          name="nombre"
          value={colaborador.nombre}
           />

          <Form.Control 
            className="mb-3" 
            type="email" 
            placeholder="email del colaborador" 
            onChange={handleChange}
            name="correo"
            value={colaborador.correo}
          />
 
          <Form.Control 
          className="mb-3" 
          type="text" 
          placeholder="edad del colaborador"
          onChange={handleChange}
          name="edad"
          value={colaborador.edad}
           />

          <Form.Control 
          className="mb-3" 
          type="text" 
          placeholder="cargo del colaborador"
          onChange={handleChange}
          name="cargo"
          value={colaborador.cargo}
           />

          <Form.Control 
          className="mb-3" 
          type="text" 
          placeholder="telefono del colaborador"
          onChange={handleChange}
          name="telefono"
          value={colaborador.telefono}
          />

        <Button variant="primary" type="submit">
          Agregar colaborador
        </Button>
        </Form.Group>
        </Form>
    </div>
  );
};

export default Formulario;
