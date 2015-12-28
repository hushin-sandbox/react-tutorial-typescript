import * as React from "react";

export interface IComment {
    author: string;
    text: string;
}

export interface ICommentList {
    data: IComment[];
}

export interface ICommentListProps extends React.Props<any>, ICommentList {}
