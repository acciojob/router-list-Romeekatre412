import React from "react";

const items = [
  { id: 1, name: "Item 1", description: "Description for Item 1" },
  { id: 2, name: "Item 2", description: "Description for Item 2" },
  { id: 3, name: "Item 3", description: "Description for Item 3" }
];

function ItemDetail({ match }) {
  const itemId = parseInt(match.params.id);
  const item = items.find((i) => i.id === itemId);

  if (!item) return <h2>Item not found</h2>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;