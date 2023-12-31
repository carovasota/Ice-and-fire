import React from "react";
import { useState, useEffect, useMemo } from "react";
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
			{
				Header: "Acciones",
				// Cell: ({ cell }) => (

				// ),
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
		<div className="mx-10 flex flex-col	justify-content">
			<h1 className="text-3xl my-6 text-center">LISTA DE LIBROS</h1>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table
					{...getTableProps()}
					className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300 "
				>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th
										{...column.getHeaderProps()}
										scope="col"
										className="px-6 py-3 "
									>
										<div className="flex items-center">
											{column.render("Header")}
											<a href="#">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="w-3 h-3 ml-1"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 320 512"
												>
													<path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
												</svg>
											</a>
										</div>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row, i) => {
							prepareRow(row);
							return (
								<tr
									{...row.getRowProps()}
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
								>
									{row.cells.map((cell) => {
										return (
											<td
												{...cell.getCellProps()}
												scope="row"
												class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												{cell.render("Cell")}
											</td>
										);
									})}
									<button
										data-modal-target="popup-modal"
										data-modal-toggle="popup-modal"
										type="button"
										class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 my-2 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										VER DETALLE
									</button>
									{/* <div
										id="popup-modal"
										tabindex="-1"
										class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
									>
										<div class="relative w-full max-w-md max-h-full">
											<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
												<button
													type="button"
													class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
													data-modal-hide="popup-modal"
												>
													<svg
														aria-hidden="true"
														class="w-5 h-5"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fill-rule="evenodd"
															d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
															clip-rule="evenodd"
														></path>
													</svg>
													<span class="sr-only">Close modal</span>
												</button>
												<div class="p-6 text-center">
													<svg
														aria-hidden="true"
														class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
														></path>
													</svg>
													<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
														Are you sure you want to delete this product?
													</h3>
													<button
														data-modal-hide="popup-modal"
														type="button"
														class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
													>
														Yes, I'm sure
													</button>
													<button
														data-modal-hide="popup-modal"
														type="button"
														class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
													>
														No, cancel
													</button>
												</div>
											</div>
										</div>
									</div> */}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
