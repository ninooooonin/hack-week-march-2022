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
        border-bottom: 1px solid #F2F2F2;
        padding: 15px 0px 18px;

        .form-section {
            margin-top:  15px;

            .section-title {
                font-size: 13.5px;
                opacity: 0.75;
            }
        }
    }
`

export const FormField = styled.div`
    margin-top: 12px;
`

const Header =  styled(Row)`
    justify-content: space-between;

    p {
        font-family: var(--font-medium);
        font-size: 15px;
    }
`

const Section = (props: any) => {
    const { title, children, multiple } = props;
    return (
        <Container className={`form-section ${multiple ? 'with-sub-section': ''}`}>
            <Header>
                <Paragraph className={'section-title'}>{title}</Paragraph>
            </Header>
            { children }
        </Container>
    )
}

export default Section;