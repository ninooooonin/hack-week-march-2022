import React from 'react';
import styled from 'styled-components';
import { Row } from '../components/general/layout';
import { Paragraph } from '../components/general/text';

import Section, { FormField } from '../templates/section';


const Container = styled.div`
    position: fixed;
    right: 0px;
    /* width: 100%; */
`

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 400px;
    border-left: 2px solid #F2F2F2;
    padding: 20px 0px 0px;
`

const Tabs = styled.nav`
    display: flex;
    padding: 0px 20px;

    button {
        font-family: var(--font-medium);
        font-size: 16px;
        padding: 0px;
        background-color: transparent;
        border: none;
        margin-right: 24px;
        opacity: 0.5;
        cursor: pointer;

        &:last-child {
            margin-right: 0px;
        }
        
        &:hover {
            opacity: 0.8;
        }

        &.active {
            font-family: var(--font-semiBold);
            color: #4242C3;
            opacity: 1;
        }
    }
`

const Content = styled.div`
    min-height: 100px;
    padding: 0px 20px;
    overflow: auto;
    max-height: calc(100vh - 115px);
    padding-bottom: 20px;
`

const FieldRadio = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-family: var(--font-medium);
    font-size: 12.5px;
    border: none;
    border-right: 1px solid #E2E2E2;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;
    
    &:last-child {
        border-right: none;
    }

    &:focus,
    &.active {
        background-color: #4242C3;
        color: #FFFFFF;
    }
`

// TODO; Move to separate component
const TabItem = (props: any) => {
    const { text, isActive, onClick } = props;
    return <button className={`${isActive ? 'active': ''}`} onClick={onClick}>{text}</button>
}

const FormFieldRow = styled(Row)`
    margin-top: 8px;

    &:first-child {
        margin-top: 0px;
    }

    .form-field {
        margin-top: 0px;
        margin-right: 8px;

        &:last-child {
            margin-right: 0px;
        }
    }
`

const FieldContainer = styled(Row)`
    width: 100%;
    height: 32px;
    background-color: #F5F5F5;
    border-radius: 5px;
    margin-top: 8px;
    padding: 5px 10px;
    
    &:first-child {
        margin-top: 0px;
    }

    &:focus-within {
        outline: 1px solid #F2F2F2;
    }

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

        span {
            display: flex;
            align-items: center;
            font-family: var(--font-medium);
            font-size: 13.5px;
            opacity: 0.5;
        }
    }
`

const BottomActionContainer = styled(Row)`
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    position: absolute;
    padding: 0px 20px;
    bottom: 0px;
    border-top: 1px solid #F2F2F2;

    button {
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
            color: #FE3F3F;
            opacity: 0.75;

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
    }
`


const FieldUploadContainer = styled.div`
    
`;

const BottomAction = (props: any) => {
    return (
        <BottomActionContainer>
            <button className={'back-action'}>Go back</button>
            <Row>
                <button className={'reset-action'}>Reset</button>
                <button className={'preview-action'}>Preview</button>
            </Row>
        </BottomActionContainer>
    )
}

const FieldUpload = () => {
    return (
        <FieldUploadContainer>
            asd
        </FieldUploadContainer>
    )
}

const AppContainer = (props: any) => {
    const { styles, children } = props;

    return (
      	<Container>
            <Wrapper>
                <Tabs>
                    <TabItem text={'Basic'} isActive={true}/>
                    <TabItem text={'Advance styles'} />
                </Tabs>
                <Content style={{ marginTop: 25 }}>
                    <Section title={'Theme'}>
                        <FormField>
                            <FieldContainer>
                                <input type="text" value={'Light Mode Classic'} placeholder={'Theme name'} onChange={(e) => {}}/>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label'}>
                                <label>Slug</label>
                                <input type="text" value={'light-mode-classic'} onChange={(e) => {}}/>
                            </FieldContainer>
                        </FormField>
                    </Section>
                    <Section title={'Font'}>
                        <FormField>
                            <FieldContainer />
                            <FieldContainer />
                            <FieldContainer />
                        </FormField>
                    </Section>
                    <Section title={'Width'}>
                        <FormField>
                            <FieldContainer className={'form-field with-radio'}>
                                <FieldRadio>450px</FieldRadio>
                                <FieldRadio>600px</FieldRadio>
                                <FieldRadio>900px</FieldRadio>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <label>Custom width</label>
                                <Row className={'input-row'}>
                                    <input type="text" value={'500'} onChange={(e) => {}}/>
                                    <span>px</span>
                                </Row>
                            </FieldContainer>
                            <FormFieldRow>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>Max. height</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'500'} onChange={(e) => {}}/>
                                        <span>px</span>
                                    </Row>
                                </FieldContainer>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>Min. height</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'500'}  onChange={(e) => {}}/>
                                        <span>px</span>
                                    </Row>
                                </FieldContainer>
                            </FormFieldRow>
                        </FormField>     
                    </Section>
                    <Section title={'Height'}>
                        <FormField>
                            <FieldContainer className={'form-field with-radio'}>
                                <FieldRadio>450px</FieldRadio>
                                <FieldRadio>600px</FieldRadio>
                                <FieldRadio>900px</FieldRadio>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <label>Custom width</label>
                                <Row className={'input-row'}>
                                    <input type="text" value={'500'} onChange={(e) => {}}/>
                                    <span>px</span>
                                </Row>
                            </FieldContainer>
                            <FormFieldRow>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>Max. height</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'500'} onChange={(e) => {}}/>
                                        <span>px</span>
                                    </Row>
                                </FieldContainer>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>Min. height</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'500'}  onChange={(e) => {}}/>
                                        <span>px</span>
                                    </Row>
                                </FieldContainer>
                            </FormFieldRow>
                        </FormField>     
                    </Section>
                    <FieldUpload />
                    <Section title={'Brand icon'}>
                        <FormField>
                            <FieldContainer />
                            <FieldContainer />
                            <FieldContainer />
                        </FormField>     
                    </Section>
                    <Section title={'Input'}>
                        <FormField>
                            <FieldContainer />
                            <FieldContainer />
                            <FieldContainer />
                        </FormField>     
                    </Section>
                    <Section title={'Placeholder'}>
                        <FormField>
                            <FieldContainer />
                            <FieldContainer />
                            <FieldContainer />
                        </FormField>     
                    </Section>
                    <Section title={'Placeholder'}>
                        <FormField>
                            <FieldContainer />
                            <FieldContainer />
                            <FieldContainer />
                        </FormField>     
                    </Section>
                    <Section title={'Placeholder'}>
                        <FormField>
                            <FieldContainer />
                            <FieldContainer />
                            <FieldContainer />
                        </FormField>     
                    </Section>
                    <Section title={'Placeholder'}>
                        <FormField>
                            <FieldContainer />
                            <FieldContainer />
                            <FieldContainer />
                        </FormField>     
                    </Section>
                    <Section title={'Placeholder'}>
                        <FormField>
                            <FieldContainer />
                            <FieldContainer />
                            <FieldContainer />
                        </FormField>     
                    </Section>
                    <Section title={'Placeholder'}>
                        <FormField>
                            <FieldContainer />
                            <FieldContainer />
                            <FieldContainer />
                        </FormField>     
                    </Section>
                </Content>
                <BottomAction />
            </Wrapper>
        </Container>
    )
}

export default AppContainer;