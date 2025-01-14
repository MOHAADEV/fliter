import CharacterList from "./components/CharacterList";
import Filter from "./components/Filter";

const API_URL = "https://rickandmortyapi.com/api/character/";

async function fetchCharacters(searchParams: {
  status?: string;
  gender?: string;
}) {
  const { status, gender } = searchParams;

  const query = new URLSearchParams();
  if (status) query.append("status", status);
  if (gender) query.append("gender", gender);

  const res = await fetch(`${API_URL}?${query.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }

  const data = await res.json();
  return data.results || [];
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { status?: string; gender?: string };
}) {
  const params = await searchParams;

  const characters = await fetchCharacters(params);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Rick and Morty Characters
      </h1>
      <Filter />
      <CharacterList characters={characters} />
    </div>
  );
}
