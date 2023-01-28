export async function load({ fetch }) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const guides = await res.json();
	console.log('test');
	if (res.ok) {
		return {
			guides
		};
	}

	return {
		status: res.status,
		error: new Error('Could not fetch the guides')
	};
}
