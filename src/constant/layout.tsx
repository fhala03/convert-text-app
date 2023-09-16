import Cards from "@/components/Cards";
import Header from "@/components/header";

export function navbarLayout(page: JSX.Element) {
  return (
    <div>
      <Header />
      <div className="maincol py-4">
        {page}
        <Cards />
      </div>
    </div>
  );
}
