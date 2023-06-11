import React from "react";
import { useState, useEffect, useMemo} from "react";
import { useTable } from "react-table";

import axios from "axios";

export default function Books() {
	const [data, setData] = useState([]);

	// Using useEffect to call the API once mounted and set the data
	useEffect(() => {
		(async () => {
			const result = await axios("https://www.anapioficeandfire.com/api/books");
			setData(result.data);
		})();
	}, []);

	console.log(data);

	const columns = useMemo(
		() => [
			{
				Header: "Título",
				accessor: "name",
			},
			{
				Header: "Autor",
				accessor: "authors[0]",
			},
			{
				Header: "Editorial",
				accessor: "publisher",
			},
			{
				Header: "Páginas",
				accessor: "numberOfPages",
			},
		],
		[]
	);

	const {
		getTableProps, // table props from react-table
		getTableBodyProps, // table body props from react-table
		headerGroups, // headerGroups, if your table has groupings
		rows, // rows for the table based on the data passed
		prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
	} = useTable({
		columns,
		data,
	});

	return (
		<div className="container">
			Lista de libros
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
