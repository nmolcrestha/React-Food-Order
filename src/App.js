import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meals";

function App() {
  return (
    <>
    <Cart/>
      <Header/>
      <main>
        <Meal/>
      </main>
    </>
  );
}

export default App;
