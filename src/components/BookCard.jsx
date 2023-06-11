export default function Card() {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-20">
			<img
				className="w-full"
				src="https://picsum.photos/600/400"
				alt="atomic love"
			/>
			<div className="p-5">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
					Atomic Love{" "}
				</h5>
				<h6 className="mb-2 text-md font-bold tracking-tight text-gray-700 ">
					Jennie Fields
				</h6>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					"A novel of science, love, espionage, beautiful writing, and a heroine
					who carves a strong path in the world of men. As far as I'm concerned
					there is nothing left to want."--Ann Patchett, author The Dutch House
				</p>
				<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Ver detalles
					<svg
						aria-hidden="true"
						className="w-4 h-4 ml-2 -mr-1"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
}
