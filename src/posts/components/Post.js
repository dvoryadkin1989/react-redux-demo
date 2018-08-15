import React from 'react';
import { Panel, Button } from 'react-bootstrap';

const makeParagraphs = (text) => {
    return text.split('\n').map((line, index) => <p key={index}>{line}</p>);
} 

const Post = (props) => {
    return (
        <div className='post'>
        <Panel>
            <Panel.Heading>
                <Panel.Title componentClass="h3">
                    <Button bsStyle="link"><h4>{props.post.title}</h4></Button>
                </Panel.Title>
            </Panel.Heading>
            <Panel.Body>{makeParagraphs(props.post.body)}</Panel.Body>
        </Panel>
        </div>
    );
}

export default Post;
