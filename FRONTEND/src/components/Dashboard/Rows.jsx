import { React, useEffect, useState } from "react";
import "../Dashboard/QuestionList.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Rows(props) {
  const [solved, setSolved] = useState(false);
  const [favourite, setFavourite] = useState(false);

  function handleChange1(e) {
    if (solved == false) setSolved(true);
    else setSolved(false);
    console.log("clicked");
  }
  function handleChange2(e) {
    if (favourite == false) setFavourite(true);
    else setFavourite(false);

    console.log("bookmarked");
  }

  console.log(solved);
  // console.log(favourite);
  return (
    <tr className={"rows-bg" + (solved === true ? " solved " : " unsolved ")}>
      <td>
        <Checkbox {...label} onChange={handleChange1} />
      </td>
      <td>
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon className="bookmark" />}
          checkedIcon={<BookmarkIcon className="bookmark" />}
          className="bookmark"
          onChange={handleChange2}
        />
      </td>
      <td>
        <div> {props.no}</div>
      </td>
      <a href={props.link} className="prob-style">
        <td>{props.problem}</td>
      </a>
    </tr>
  );
}
