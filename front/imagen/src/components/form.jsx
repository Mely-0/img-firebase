import appFireBase from "./credenciales";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { usePostAgregarImgMutation } from "./storeRedux/peticionesImg";
const storage = getStorage(appFireBase);
export const Form = () => {
//agregar
const [
  createImg
]= usePostAgregarImgMutation()
  //inicializacion de la variable que contiene la url de la imagen
  let urlImage;

  //enviar a al base de datos de mongo
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imagen = {
      name: e.target.name.value,
      description: e.target.description.value,
      url: urlImage,
    };
    console.log(imagen);
    if(imagen.name !== "" && imagen.description !== "" && imagen.url !== ""){
      await createImg({
        dataImg: imagen,
      })
      alert("agregado")
    }else {
      alert("nada")
    }
    e.target.name.value = "";
    e.target.description.value = "";
    e.target.url.value = "";
  };

  //enviar a el storage de firebase
  const fileHandler = async (e) => {
    // detecta el archivo y captura la imagen
    const archivo = e.target.files[0];

    //cargar el archivo al storage y pasarle la url del archivo
    const refArchivoStorage = ref(storage, `documentos/${archivo.name}`);

    await uploadBytes(refArchivoStorage, archivo);
    urlImage = await getDownloadURL(refArchivoStorage);
    console.log( urlImage);
  };

  return (
    <div className="card card-body">
      <h3 className="text-center">Imagen</h3>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="nombre de la imagen"
            id="name"
            className="form-control mt-1"
            required
          />
        </div>
        <label>Descripcion:</label>
        <div className="form-group">
          <input
            type="text"
            placeholder="descripcion de la imagen"
            id="description"
            className="form-control mt-1"
            required
          />
        </div>
        <label> Agregar imagen:</label>
        <input
          type="file"
          id="url"
          placeholder="agregar imagen"
          className="form-control"
          onChange={fileHandler}
        />
        <button className="btn btn-primary mt-3 form-control">Guardar</button>
      </form>
    </div>
  );
};
