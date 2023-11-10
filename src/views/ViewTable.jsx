import { useEffect, useState } from "react";
import Table from "../components/Table";
import Header from "../components/Header";
import TableExample from "../components/TableExample";
import Paginado from "../components/Paginado";
import Alert from "../components/Alert";

const ViewTable = () => {
  const [datos, setDatos] = useState([]);
  const [limit, setLimit] = useState(16);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await fetch(
          `http://localhost:3000/users?_page=${page}&_limit=${limit}`
        );
        const data = await response.json();
        setDatos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(page);
  }, [limit, page]);

  const sacarOpcion = (valor) => setLimit(valor);
  const sacarPagina = (valor) => setPage(valor);

  return (
    <>
      <Header />
      <div className="relative">
        <Table />
        <TableExample users={datos} />
        <div className="flex justify-center">
          <Paginado sacarOpcion={sacarOpcion} sacarPagina={sacarPagina} />
          <Alert />
        </div>
      </div>
    </>
  );
};

export default ViewTable;
