export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <div className="bg-[#76c7ad] text-center font-bold py-[3.2rem] text-amber-950">
      <footer>
        💼 You have {numItems} items on your list,and you are already packed{" "}
        {numPacked} and ({percent}%)
      </footer>
    </div>
  );
}
