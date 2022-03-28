import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Row } from '../../components/general/layout';

const Container = styled(Row)`
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    position: absolute;
    padding: 0px 20px;
    bottom: 0px;
    border-top: 1px solid #F2F2F2;
`

const Wrapper = styled(Row)`

`;

const Button = styled.button`
    font-family: var(--font-medium);
    font-size: 14px;
    padding: 0px;
    background-color: transparent;
    border: none;
    height: 32px;
    cursor: pointer;

    &.back-action {
        opacity: 0.75;
        
        &:hover {
            opacity: 1;
        }
    }

    &.reset-action {
        padding: 0px 12px;
        height: 32px;
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    }

    &.preview-action {
        border-radius: 3px;
        height: 32px;
        color: #FFFFFF;
        padding: 0px 12px;
        margin-left: 8px;
        background-color: #4242C3;

        &:hover {
            opacity: 1;
            background-color: #5151ee;
        }
    }
`

const Action = (props: any) => {
    const { text, onClick, styles } = props;
    return <Button className={styles} onClick={onClick}>{text}</Button>;
}

const BottomActions = (props: any) => {

    return (
        <Container>
            <Action styles={'back-action'} text={'Go back'} onClick={() => {}}/>
            <Wrapper>
                <Action styles={'reset-action'} text={'Reset'} onClick={() => {}}/>
                <Action styles={'preview-action'} text={'Preview'} onClick={() => {}}/>
            </Wrapper>
        </Container>
    )
}

export default BottomActions;