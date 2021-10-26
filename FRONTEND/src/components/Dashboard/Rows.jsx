import React from "react";
import "../Dashboard/QuestionList.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Rows(props) {
  return (
    <tr className="rows-bg">
      <td>
        <Checkbox {...label} />
      </td>
      <td>
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon className="bookmark" />}
          checkedIcon={<BookmarkIcon className="bookmark" />}
          className="bookmark"
        />
      </td>
      <td>{props.no}</td>
      <td>{props.problem}</td>
    </tr>
  );
}
