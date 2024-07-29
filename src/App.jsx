import { useState } from "react";
import Form from "./components/form";
import Logo from "./components/logo";
import List from "./components/psckingList";
import Stats from "./components/stats/inde";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeketeItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: true } : item))
    );
  }
  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItems={handleDeketeItems}
        onToggleItems={handleToggleItems}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
