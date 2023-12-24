import { ColumnDef } from "@tanstack/react-table";

export interface TableProps {
  data: any[];
  columns: ColumnDef<any>[];
  rowSelection?: any;
  isLoading: boolean;
  setRowSelection?: (rowSelection: any) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page?: number;
  isPagination: boolean;
  totalResults?: number;
  handleRowClick: (cell: any) => void;
}
