
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from './BBDD/Base_de_datos';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import { useState } from 'react';
import Buscador from './components/Buscador';

function App() {

  const [alert, setAlert] = useState({msg:"", color:""});
  const [colaboradores, setColaborador] = useState(BaseColaboradores);
  const[search, setSearch] = useState("");

  const handleChange = (e) =>{
    setSearch(e.target.value);
  }

const filtrarColaboradores = colaboradores.filter((c) => {

  if(
    c.nombre.toLowerCase().includes(search.toLowerCase()) ||
     c.correo.toLowerCase().includes(search.toLowerCase()) ||
    c.edad.toLowerCase().includes(search.toLowerCase()) ||
    c.cargo.toLowerCase().includes(search.toLowerCase()) ||
    c.telefono.toLowerCase().includes(search.toLowerCase())){

      return true;
  }
  return false;
});

const handleSubmit = (nuevoColaborador) => {
  const colaboradorConId = {...nuevoColaborador, id: colaboradores.length+1, 
  };
  setColaborador([...colaboradores, colaboradorConId]);
};

 return(
  <>
  <div className=' contenedor d-flex justify-content-evenly m-3'>
  <div>
  <h1>Lista de colaboradores</h1>
  <Buscador onChange={handleChange} search={search} />
  <Listado colaboradores ={filtrarColaboradores} />
  </div>
  <div>
  <h1>Agregar colaborador</h1>
  <Formulario onSubmit={handleSubmit} setAlert={setAlert}/>
  {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
  </div>
  </div>
  </>
 );
}

export default App
