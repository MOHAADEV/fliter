"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Filter() {
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const router = useRouter();

  const applyFilter = () => {
    const query = new URLSearchParams();
    if (status) query.set("status", status);
    if (gender) query.set("gender", gender);
    router.push(`/?${query.toString()}`);
  };

  return (
    <div className="flex justify-center gap-4 my-4">
      <select
        className="p-2 border rounded bg-gray-600 shadow"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className="p-2 border rounded bg-gray-600 shadow"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        onClick={applyFilter}
      >
        Apply Filters
      </button>
    </div>
  );
}
