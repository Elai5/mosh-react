/** @format */
// import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];

  return (
    <>
      <h1>List Item</h1>
      {/* {items.length === 0 ? <p>no item found</p> : null} */}
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("Clicked")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>list item</h1>
  //       <p>No item found</p>
  //     </>
  //   );
}
export default ListGroup;
