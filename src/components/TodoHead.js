import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-left: 24px;

    border-bottom: 1px solid gray;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .days {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left {
        color: #20e997;
        font-size: 18px;
        margin-top: 40px;
        margin-bottom: 10px;
        font-weight: bold;
    }
`;
export default function TodoHead() {
    const todos = useTodoState();

    const today = new Date();
    const day = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const dayName = today.toLocaleDateString('ko-KR', {
        weekday: 'long',
    });

    const unDoneTasks = todos.filter((todo) => !todo.done);
    return (
        <TodoHeadBlock>
            <h1>{day}</h1>
            <div className='days'>{dayName}</div>
            <div className='tasks-left'>
                할 일이 {unDoneTasks.length} 개 남았습니다.
            </div>
        </TodoHeadBlock>
    );
}
