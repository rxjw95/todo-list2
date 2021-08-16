import React from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId, useTodoState } from '../TodoContext';
import { darken, lighten } from 'polished';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-left: 24px;

    border-bottom: 1px solid gray;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

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
        float: left;
    }

    .reset-right {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #20e997;
        width: 52px;
        height: 24px;
        padding: 4px;
        margin-top: 35px;
        margin-bottom: 10px;
        font-size: 12px;
        color: white;
        font-weight: bold;
        border-radius: 6px;
        float: right;
        cursor: pointer;

        &:hover {
            background: ${darken(0.1, '#20e997')};
        }

        &:active {
            background: ${lighten(0.1, '#20e997')};
        }
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

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onReset = () => {
        dispatch({
            type: 'RESET',
        });
        nextId.current = 1;
    };

    return (
        <TodoHeadBlock>
            <h1>{day}</h1>
            <div className='days'>{dayName}</div>
            <div className='tasks-left'>
                할 일이 {unDoneTasks.length} 개 남았습니다.
            </div>
            <div className='reset-right' onClick={onReset}>
                RESET
            </div>
        </TodoHeadBlock>
    );
}
