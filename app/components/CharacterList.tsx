export default function CharacterList({ characters }: { characters: any[] }) {
  if (!characters.length) {
    return <p className="text-center text-red-500">No characters found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((character) => (
        <div
          key={character.id}
          className="p-4 border rounded shadow hover:shadow-lg"
        >
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-lg font-bold mt-2">{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  );
}
