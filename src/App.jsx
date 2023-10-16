import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-screen h-screen p-5">
        <nav className="flex w-full justify-end">
          <NavBar show={show} setShow={setShow} />
        </nav>
        <main className="w-full mt-10">
          {show ? (
            <>
              <Cart />
            </>
          ) : (
            <>
              <Products/>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default App
