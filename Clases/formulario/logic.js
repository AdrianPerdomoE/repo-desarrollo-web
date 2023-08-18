function getData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const descripcion = document.getElementById("Descripcion").value;
  const conditionsAcepted = document.getElementById("acept").checked;
  const data = {
    name,
    email,
    descripcion,
    conditionsAcepted,
  };
  console.log(data);
}
