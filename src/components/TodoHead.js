import React from 'react';
import styled from 'styled-components';

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
    return (
        <TodoHeadBlock>
            <h1>오늘의 할 일</h1>
            <div className='days'>월요일, Mon</div>
            <div className='tasks-left'>할일 몇개 남음</div>
        </TodoHeadBlock>
    );
}
