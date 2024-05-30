import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main classname="py-3">
        <Container>
          <h1>Welcome to Better Buy!</h1>
        </Container>
      </main>
    </>
  );
};

export default App;
