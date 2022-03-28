import React from 'react';
import styled from 'styled-components';
import { Row } from '../components/general/layout';
import { Paragraph } from '../components/general/text';

const Container = styled.div`
    min-height: 50px;
    margin-top:  20px;

    &:first-child {
        margin-top:  0px;
    }

    &.with-sub-section {
        margin-top:  15px;
        border-top: 1px solid #F2F2F2;
       
        padding: 15px 0px 5px;


        .form-section {
            margin-top:  15px;

            .section-title {
                font-size: 13.5px;
                opacity: 0.75;
            }
        }

        &:first-child {
            margin-top:  0px;
            padding-top: 0px;
            border-top: 0px;
            border-bottom: 0px;
            padding-bottom: 0px;
        }

        &:last-child {
            padding: 15px 0px 18px;
        }

        &.unrepeat {
            border-bottom: 1px solid #F2F2F2;
            padding: 15px 0px 18px;
        }
    }
`

export const FormField = styled.div`
    margin-top: 12px;
`

export const FieldContainer = styled(Row)`
    position: relative;
    width: 100%;
    height: 32px;
    background-color: #F5F5F5;
    border-radius: 5px;
    margin-top: 8px;
    padding: 6px 10px;
    
    &:first-child {
        margin-top: 0px;
    }

    &:hover {
        outline: 1px solid #E5E5E5;
    }

    textarea,
    input[type='text'] {
        width: 100%;
        border: none;
        outline: none;
        background-color: transparent;
        font-family: var(--font-medium);
        font-size: 13.5px;
    }

    label {
        display: flex;
        align-items: center;
        font-family: var(--font-medium);
        font-size: 13.5px;
        opacity: 0.5;
    }

    &.with-label {
        justify-content: space-between;

        input {
            max-width: 80%;
            text-align: right;
        }
    }

    &.with-radio {
        padding: 0px;
        overflow: hidden;
    }

    &.with-meta {

        .field-row {
            
        }

        .input-row {
            justify-content: right;
        }

        input {
            width: 100%;
        }

        .meta {
            display: flex;
            align-items: center;
            font-family: var(--font-medium);
            font-size: 13.5px;
            opacity: 0.5;
        }
    }

    &.with-textarea {
        height: 85px;
        flex-direction: column;
        padding: 12px 10px;
        justify-content: flex-start;

        textarea {
            margin-top: 5px;
            width: 100%;
            max-width: 100%;
            height: 100%;
            resize: none;
        }
    }
`

const Header =  styled(Row)`
    justify-content: space-between;

    p {
        font-family: var(--font-medium);
        font-size: 15px;
    }
`

const Section = (props: any) => {
    const { title, children, multiple, unrepeat } = props;
    return (
        <Container className={`form-section ${multiple ? 'with-sub-section': ''} ${unrepeat? 'unrepeat': ''}`}>
            <Header>
                <Paragraph className={'section-title'}>{title}</Paragraph>
            </Header>
            { children }
        </Container>
    )
}

export default Section;