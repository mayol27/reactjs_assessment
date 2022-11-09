import React from "react";
import "./App.css";
import Container, { Header, Table } from "./components";

function App() {
  return (
    <>
      <Container className="border border-b-2 border-gray-300">
        <Header />
      </Container>
      <Container>
        <Table />
      </Container>
    </>
  );
}

export default App;
