import React, { useEffect, useState } from "react";
import api from "./services/api";
import "./App.css";

export default function App() {
  // const [user, setUser] = useState();
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // useEffect(() => {
  //   api
  //     .get("/users/dudasancar")
  //     .then((response) => setUser(response.data))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, []);

  const takeName = (e) => {
    setName(e.target.value);
  };

  const takeDescription = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => setCategory(response.data))
      .catch((err) => console.error("ops! ocorreu um erro" + err));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/categories", { name, description })
      .then((response) => console.log(response.data))
      .catch((err) => console.error("ops! ocorreu um erro" + err));
  };

  return (
    <div className="App">
      {/* <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p> */}
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={takeName} />
        <input value={description} onChange={takeDescription} />
        <button type="submit">salvar</button>
      </form>
      {category.map((c) => (
        <>
          <p>Categoria: {c?.name}</p>
          <p>Descrição: {c?.description}</p>
          <button>deletar</button>
        </>
      ))}
    </div>
  );
}
