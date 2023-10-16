import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <div className="w-screen h-screen p-5">
        <nav className="flex w-full justify-end">
          <NavBar/>
        </nav>
        <main className="w-full mt-10">
          <Products/>
        </main>
      </div>
    </>
  );
}

export default App
