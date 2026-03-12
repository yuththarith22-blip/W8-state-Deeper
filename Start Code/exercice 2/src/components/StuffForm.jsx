import React from "react";

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const parsedPrice = Number(price);

    if (!trimmedName || Number.isNaN(parsedPrice) || parsedPrice < 0) {
      return;
    }

    onAddStuff({
      name: trimmedName,
      price: parsedPrice,
    });

    setName("");
    setPrice("");
  };

  return (
    <form className="stuff-form" onSubmit={submitHandler}>
      <p>Stuff name</p>
      <input
        type="search"
        placeholder="Banana"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>Stuff price</p>
      <input
        type="number"
        placeholder="15"
        min="0"
        step="0.1"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
