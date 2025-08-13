import Home from "./pages/Home";
import Cart from "./features/cart/Cart";

export default function App() {
  return (
    <div>
      <header className="p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Dessert Shop</h1>
      </header>
      <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Home />
        </div>
        <div className="lg:col-span-1">
          <Cart />
        </div>
      </main>
    </div>
  );
}
