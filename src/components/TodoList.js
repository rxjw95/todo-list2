import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    border-radius: 5px;
`;

export default function TodoList() {
    return <TodoListBlock>TodoList</TodoListBlock>;
}
