import * as React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import * as request from "superagent";
import {ICommentListProps} from "../interfaces";


export interface CommentBoxProps extends React.Props<any> {
    url: string;
}

export default class CommentBox extends React.Component<CommentBoxProps, ICommentListProps> {
    constructor(props: CommentBoxProps) {
        super(props);
        this.state = {data: []};
    }
    componentDidMount() {
        request
            .get(this.props.url)
            .end((err, res) => {
                if (err) {
                    console.error(this.props.url);
                    throw err;
                }
                this.setState({data: res.body});
            });
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
}
