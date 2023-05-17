import { useGetObtenerImgQuery } from "./storeRedux/peticionesImg";
export const List = () => {
  const {data:dataImagen } = useGetObtenerImgQuery()
  return (
    <div className="container">
      <table className="table table-hover justify-content-center">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {dataImagen?.map((list) => {
            return (
              <>
                <tr key={list.id} />
                <td>{list.name}</td>
                <td>{list.description}</td>
                <td>
                  <img height={120} width={200} src={list.url}></img>
                </td>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
