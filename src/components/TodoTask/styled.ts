import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;

    height: 50px;

    padding: 7px 20px;

    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

    border-left: 10px solid #80CB27;
    border-radius: 10px;

    margin-top: 20px;

    & span {
         background-color: #fff;
    }
`

export const ListTask = styled.p<{isCompleted: Boolean}>`
    font-size: 20px;
    color: #000;
    font-weight: bold;

    ${(props) => props.isCompleted && css` text-decoration: line-through;`}

`;

export const InputCheckbox = styled.input`
    width: auto;
   margin: 0;
`;

export const ButtonDelete = styled.span`
    cursor: pointer;
    text-align: center;
    color: #030303;
    font-size: 14px;

    border: none;
`;

export const Line = styled.div`
    margin: 0;
`