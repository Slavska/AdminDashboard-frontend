import { useParams } from "react-router-dom";
import { Customers } from "../../shared/components/Customers/Customers";
import Dashboards from "../../shared/components/Dashboards/Dashboards";
import { Header } from "../../shared/components/Header/Header";
import { Orders } from "../../shared/components/Orders/Orders";
import { Products } from "../../shared/components/Products/Products";
import { Suppliers } from "../../shared/components/Suppliers/Suppliers";

const MainPage = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      {id === "dashboards" && <Dashboards />}
      {id === "orders" && <Orders />}
      {id === "customers" && <Customers />}
      {id === "suppliers" && <Suppliers />}
      {id === "products" && <Products />}
    </>
  );
};

export default MainPage;
