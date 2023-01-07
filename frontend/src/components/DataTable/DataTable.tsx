import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Sale, SalePage } from "../../types/sale";
import { formatLocalDate } from "../../utils/format";
import { BASE_URL } from "../../utils/requests";
import Pagination from "../Pagination/Pagination";

function DataTable() {
  const [activePage, setActivePage] = useState(0);
  const [sales, setSales] = useState<Sale[] | undefined>(undefined);
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=${activePage}`).then(res => {
      setPage(res.data);
      setSales(res.data.content);
    });
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
      <Pagination page={page} onPageChange={changePage} />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {sales?.map((sale) => (
              <tr key={sale.id}>
                <td>{formatLocalDate(sale.date, "dd/MM/yyyy")}</td>
                <td>{sale.seller.name}</td>
                <td>{sale.visited}</td>
                <td>{sale.deals}</td>
                <td>{sale.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataTable;
