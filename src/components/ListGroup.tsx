/** @format */
// import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];
  if (items.length === 0)
    return (
      <>
        <h1>list item</h1>
        <p>No item found</p>
      </>
    );

  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>List Item</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {/* <li className="list-group-item active" aria-current="true">
          An active item
        </li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}
export default ListGroup;
