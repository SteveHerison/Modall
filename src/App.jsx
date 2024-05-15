import { useState } from "react";
import Background from "../assets/images/background-pattern-mobile.svg";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <main className=" h-screen w-screen flex flex-col ">
      <div
        className="bg-cover bg-center bg-no-repeat h-96 w-full "
        style={{ backgroundImage: `url(${Background})` }}
      />{" "}
      <section className="bg-fuchsia-50 h-full w-full  ">
        <Modal setModal={setModal} modal={modal} />
      </section>
    </main>
  );
}

export default App;
