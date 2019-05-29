import React, {
    Component
} from 'react';
import {
    Button,
    Header,
    Container,
    MessageHeader,
    Segment,
    Comment,
    Input,
    Icon
} from 'semantic-ui-react';
import socket  from "socket.io-client";
window.socket=socket(window.location.origin, {
    path:'/chat'
}, {transport:['websocket']});

const socketUrl = 'http://localhost:3002/';

export default class Chat extends Component {
    state = { 
        online:1,
        input: '',
        message:[],
        newMessage: true
     }
    render() {
        const {input, messages} = this.state;
        return ( 
            <Container>
                <MessageHeader/>
                <Segment clearing>
                    <Header 
                    fluide="true"
                    as="h2" floated='left'>
                        
                        <Header.Subheader>
                            Online Users: {online}
                        </Header.Subheader>
                    </Header>
                </Segment>
            </Container>
        );
    }
}
