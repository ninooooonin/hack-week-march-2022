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
    const { title, children } = props;

    return (
        <Container>
            <Header>
                <Paragraph>{title}</Paragraph>
            </Header>
            { children }
        </Container>
    )
}

export default Section;