import { IMovie } from "../../types/requestTypes";

interface CellType {
  row: IMovie;
}

export const moviesColumn = [
  {
    accessorKey: "Title",
    header: "Title",
    renderCell: ({ row }: CellType) => {
      return <p>{row.Title ? row.Title : "-"}</p>;
    },
  },
  {
    accessorKey: "Type",
    header: "Type",
    renderCell: ({ row }: CellType) => <p>{row.Type ? row.Type : "-"}</p>,
  },
  {
    accessorKey: "Year",
    header: "Year",
    renderCell: ({ row }: CellType) => <p>{row.Year ? row.Year : "-"}</p>,
  },

  {
    accessorKey: "imdbID",
    header: "imdbID",
    renderCell: ({ row }: CellType) => (
      <p onClick={() => console.log("çalışmıyor ibne serhat")}>
        {row.imdbID ? row.imdbID : "-"}
      </p>
    ),
  },
];
