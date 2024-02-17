//this component tells about how to use conditional rendering in react

export function Shoppingcart() {
  const items = ["cheap", "soap", "kannadi"];

  return (
    <>
      <h1> Shopping Cart 🛒</h1>
      {items.length > 0 && <h3> you have {items.length} items in your cart</h3>}
      <h4>Products 👇</h4>
      <ul>
        {items.map((item) => (
          <li key={Math.random() * 10}>{item}</li>
        ))}
      </ul>
    </>
  );
}
