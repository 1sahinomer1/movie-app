import { useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { TableProps } from "./types";
import { Pagination } from "../";
import "./styles.scss";

const Table = ({
  data,
  columns,
  rowSelection,
  setRowSelection,
  setPage,
  page,
  isPagination,
  totalResults,
  isLoading,
  handleRowClick,
}: TableProps) => {
  const memoizedData = useMemo(() => data, [data]);
  const memoizedColumns = useMemo(() => columns, [columns]);

  const { getHeaderGroups, getRowModel } = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-container">
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <table>
          <tbody>
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
          <tbody>
            {getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <th key={cell.id} onClick={() => handleRowClick(cell)}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isPagination && page && totalResults && setPage && (
        <Pagination page={page} setPage={setPage} totalResults={totalResults} />
      )}
    </div>
  );
};

export default Table;
