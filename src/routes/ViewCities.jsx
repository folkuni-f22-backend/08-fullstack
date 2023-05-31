import { useState } from 'react'

function ViewCities() {
	const [cities, setCities] = useState(null)

	const handleClick = async () => {
		// TODO: använd try/catch. Visa meddelande till användaren om något går fel.
		const response = await fetch('/api/cities')
		const data = await response.json()
		setCities(data)
	}

	return (
		<div>
			<button onClick={handleClick}> Hämta städer! </button>
			{cities
				? cities.map(({ id, name }) => (
					<div key={id}> {name} </div>
				))
				: <p> Klicka för att hämta städer från API:et </p>
			}
		</div>
	)
}

export default ViewCities
