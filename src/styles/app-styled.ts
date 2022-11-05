import styled  from 'styled-components';

export const Container = styled.div`
    padding: 20px 0;
    width: 85%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;

    & h2 {
         font-weight: 600;
        color: #84878A;
        font-size: 30px;

        display: flex;
        justify-content: center;

        margin: 30px 0;
    }

    @media (min-width: 500px) {
         max-width: 400px;
    }
`; 

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



`;

export const InputForm = styled.input`
    margin-bottom: 25px;
    padding-left: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    width: 100%;
    height: 50px;
`;

export const ButtonSubmit = styled.button`
    width: 100%;
    height: 50px;
    background-color: #80CB27;
    font-size: 16px;
    font-weight: 700;

    color: #fff;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #6FAF1E;
    }

`;
