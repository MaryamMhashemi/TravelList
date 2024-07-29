import Item from "../item";

export default function List({ items, onDeleteItems, onToggleItems }) {
  return (
    <div className="bg-[#5a3e2b] text-[#ffebb3] flex justify-between flex-row gap-2 items-center p-2 h-[200px]">
      <ul className="flex flex-row gap-2">
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}
