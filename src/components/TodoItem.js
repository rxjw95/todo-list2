import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: lightgray;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: red;
    }
`;

const CheckCircle = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid gray;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${(props) =>
        props.done &&
        css`
            border: 1px solid #38d9a9;
            background: #38d9a9;
            color: white;
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: black;
    ${(props) =>
        props.done &&
        css`
            color: lightgray;
        `}
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;

export default function TodoItem({ id, done, text }) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}> {text} </Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}
