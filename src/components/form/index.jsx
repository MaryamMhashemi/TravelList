import React, { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [choose, setChoose] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, choose, packed: false, id: Date.now() };
    onAddItems(newItem);
    setChoose(1);
    setDescription("");
  }

  return (
    <form
      className="bg-orange-400 flex flex-col md:flex-row justify-center items-center gap-4 p-6 md:p-8 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl md:text-3xl text-center mb-4 md:mb-0 font-bold text-amber-950">
        What do you need for your trip?
      </h3>
      <div className="flex flex-col md:flex-row gap-2">
        <select
          className="bg-yellow-200 rounded-2xl p-2"
          value={choose}
          onChange={(e) => setChoose(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          className="bg-yellow-200 rounded-2xl p-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="uppercase bg-[#76c7ad] rounded-2xl py-2 px-4 font-semibold text-amber-950"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
