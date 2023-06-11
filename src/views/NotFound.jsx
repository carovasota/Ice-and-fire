import { useRouteError } from "react-router-dom";
import Link from 'react'

export default function NotFound() {
	const error = useRouteError();
  console.log(error)
	return (
		<div>
			<h1>"Not Found"</h1>
      <Link to="/">Volver al Home</Link>
		</div>
	);
}
