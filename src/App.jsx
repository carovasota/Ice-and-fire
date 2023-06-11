import Navbar from "./components/Navigation";
import Filter from "./components/FilterBar";
import BookList from "./components/Books";

function App() {
	return (
		<>
			<div className="App">
				<Navbar></Navbar>

				<Filter></Filter>

				<BookList></BookList>

				{/* <div className="flex flex-wrap px-2">
					<div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
						<BookCard></BookCard>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
						<BookCard></BookCard>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
						<BookCard></BookCard>
					</div>
					<div className="w-full sm:w-1/2 md:w-1/4 flex justify-center">
						<BookCard></BookCard>
					</div>
				</div> */}
			</div>
		</>
	);
}

export default App;
