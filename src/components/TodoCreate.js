import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { darken, lighten } from 'polished';

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

const InsertForm = styled.div`
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

    const onToggle = () => {
        setOpen(!open);
        console.log('click');
    };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm>
                        <Input placeholder='할 일을 입력하세요' autoFocus />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton open={open} onClick={onToggle}>
                <MdAdd />
            </CircleButton>
        </>
    );
}
