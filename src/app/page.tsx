import AllPruducts from "@/component/AllPruducts";
import Home from "@/component/Home";
import PruductsPrice from "@/component/ProductsPrice";


export default function Page() {
  return (
    <main>
      <Home />
      <PruductsPrice/>
      <AllPruducts/>
      
    </main>
  );
}