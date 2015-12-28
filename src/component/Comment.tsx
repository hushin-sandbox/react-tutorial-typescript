import * as React from "react";

export interface CommentProps extends React.Props<any> {
    author: String;
}

export default class Comment extends React.Component<CommentProps, any> {
    render() {
        return (
            <div className="comment">
                <h3 className="commentAuthor">
                    {this.props.author}
                </h3>
                {this.props.children}
            </div>
        );
    }
}
