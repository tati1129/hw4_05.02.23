import ProductContainer from "../ProductContainer";
import s from "./style.module.css"

function App() {
  return (
    <div>
      <h1  className={s.h1}>Товары</h1>
      <ProductContainer />
    </div>
  );
}

export default App;
