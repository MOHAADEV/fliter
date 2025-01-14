import { NextApiRequest, NextApiResponse } from "next";

interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

interface ApiResponse {
  results: Character[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | { message: string }>
) {
  const { status, gender } = req.query;

  const query = new URLSearchParams();

  if (status && typeof status === "string") query.append("status", status);
  if (gender && typeof gender === "string") query.append("gender", gender);

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?${query.toString()}`
    );

    if (!response.ok) {
      return res.status(500).json({ message: "Failed to fetch characters" });
    }

    const data: ApiResponse = await response.json();
    console.log("Query Params:", req.query); // log query parameters
    console.log("Response from API:", data);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
}
