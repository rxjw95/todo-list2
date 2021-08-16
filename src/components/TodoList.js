import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    border-radius: 5px;
`;

export default function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem done={true} text='리액트 공부' />
            <TodoItem done={false} text='자바 공부' />
            <TodoItem done={false} text='자바스크립트 공부' />
        </TodoListBlock>
    );
}
