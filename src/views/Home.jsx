import Filter from "../components/FilterBar";
import BookList from "../components/Books";

export default function Home() {
	return (
		<div>
			<Filter></Filter>
			<BookList></BookList>
		</div>
	);
}
