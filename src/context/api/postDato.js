import axios from "axios";

export async function postDato(endPoint, urlBase, data) {
  try {
    let usuarioRegistrado = ''
    await axios.post(`${urlBase}/${endPoint}`,data).then(response => {
      console.log('Response data:', response.data);
      usuarioRegistrado = response.data
    });
    return usuarioRegistrado;
  } catch (error) {
    console.log(Error)
    throw new Error("ha ocurrido un error");
  }
}
