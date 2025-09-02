export default async function handler(req, res) {
  try {
    console.log(`its here`)
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}&tag=dog+fails&rating=g`
    );
    console.log(response)

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch GIF" });
  }
}