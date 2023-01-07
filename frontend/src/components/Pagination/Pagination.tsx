import React from "react";

export type Seller = {
  id: number;
  name: string;
};

type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
};

type SalePage = {
  content?: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size?: number;
  number: number;
  numberOfElements?: number;
  empty?: boolean;
};

type Props = {
  page: SalePage;
  onPageChange: Function;
};

function Pagination({ page, onPageChange }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.first ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page.number - 1)}
            >
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page.number + 1}</span>
          </li>
          <li className={`page-item ${page.last ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page.number + 1)}
            >
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
