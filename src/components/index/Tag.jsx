/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { scrollToId } from "../../function/function";

function Tag({ tag, name }) {
  return (
    <>
      <a onClick={() => scrollToId(tag)}>{name}</a>
    </>
  );
}

export default Tag;
