import * as React from "react";
import Comment from "./Comment";
import {ICommentListProps} from "../interfaces";

export default class CommentList extends React.Component<ICommentListProps, any> {
    render() {
        let commentNodes = this.props.data.map((comment) => {
            return (<Comment author={comment.author}>{comment.text}</Comment>);
        });
        return (<div className="commentList">{commentNodes}</div>);
    }
}
