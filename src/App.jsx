import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="w-screen h-screen p-5">
        <nav className="flex w-full justify-end">
          <NavBar/>
        </nav>
      </div>
    </>
  );
}

export default App
