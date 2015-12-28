import * as React from "react";
import * as ReactDOM from "react-dom";
import CommentBox from "./component/CommentBox";

window.addEventListener("load", (e) => {
    ReactDOM.render(
        <CommentBox url="api/comments" />,
        document.getElementById("container")
    );
});
