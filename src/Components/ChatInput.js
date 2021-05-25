import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const ChatInput = ({ channelName, channelId }) => {
console.log(channelId);
    const sendMessage = e => {
        e.preventDefault();
    }
    return (
        <ChatInputContainer>
            <form action="">
                <input placeholder={`Messages #ROOM`} />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
};

export default ChatInput;

const ChatInputContainer = styled.div``;