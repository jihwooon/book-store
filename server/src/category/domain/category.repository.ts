import { type RowDataPacket } from "mysql2";
import { doQuery } from "src/database/mariadb";

import Category from "./category";

export const findAll = async (): Promise<Category[]> => {
  const [rows] = await doQuery((connection) =>
    connection.execute<RowDataPacket[]>(
      "SELECT category_id, name FROM category",
    ),
  );

  return (rows ?? []).map(
    (row) =>
      new Category({
        id: row.category_id,
        name: row.name,
      }),
  );
};
