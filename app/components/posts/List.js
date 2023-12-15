import React from "react";

function List({ children }) {
  const items = children.filter((element) => element.type === "item");

  const itemContent = items.map((element) => element.props.children[0]);

  return (
    <ul className="list">
      {itemContent.map((item, index) => (
        <li key={index}>&bull;&nbsp;{item}</li>
      ))}
    </ul>
  );
}

export default List;
