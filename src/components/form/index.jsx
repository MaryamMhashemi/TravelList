import React, { useState } from "react";

export default function Form() {
  //useState foor
  const [description, setDescription] = useState("");
  return (
    <form className="bg-[#e5771f] flex justify-center items-center gap-2">
      <h3 className="mr-[1.6rem] text-[2.4rem]">
        What do you need for your 😍 trip ?
      </h3>
      <div className="text-[#5a3e2b] gap-1 flex flex-row text-inherit border-none  cursor-pointer py-[1.2rem] px-[3.2rem] font-bold text-[1rem]">
        <select className="bg-[#ffebb3] rounded-[10rem] py-2 px-3">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          className="bg-[#ffebb3] rounded-[10rem] py-2 px-1"
        />
        <button
          className="uppercase bg-[#76c7ad] rounded-[10rem]   py-2 px-3"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
