
export async function getResults(url) {
  const response = await fetch('/search', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response.json()
}