import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { darken, lighten } from 'polished';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: ${lighten(0.1, '#38d9a9')};
    }

    &:active {
        background: ${darken(0.1, '#38d9a9')};
    }

    z-index: 5;
    cursor: pointer;
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);

    font-size: 32px;
    color: white;
    border-radius: 40px;

    border: none;
    outline: none;

    transition: 0.125s all ease-in;
    ${(props) =>
        props.open &&
        css`
            background: red;

            &:hover {
                background: ${lighten(0.2, 'red')};
            }

            &:active {
                background: ${darken(0.2, 'red')};
            }

            transform: translate(-50%, 50%) rotate(45deg);
        `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: #e6e9eb;
    padding: 32px;
    padding-bottom: 72px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

export default function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => {
        setOpen(!open);
    };

    const onChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    };

    const onSubmit = (e) => {
        e.preventDefault(); //onSubmit은 내부적으로 자동으로 새로고침이 되서 데이터가 날아간다 이를 방지하기 위한 함수
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false,
            },
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input
                            placeholder='할 일을 입력하세요'
                            value={value}
                            onChange={onChange}
                            autoFocus
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton open={open} onClick={onToggle}>
                <MdAdd />
            </CircleButton>
        </>
    );
}
