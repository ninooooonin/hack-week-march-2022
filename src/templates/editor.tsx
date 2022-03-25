import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '../components/general/layout';
import { Paragraph } from '../components/general/text';
import Section, { FormField } from '../templates/section';


// Icons
import { AngleDownIcon, BorderRadiusIcon, MarginBottomIcon, MarginLeftIcon, MarginRightIcon, MarginTopIcon, UploadIcon } from '../components/general/icons';

const Container = styled.div`
    position: fixed;
    right: 0px;
    /* width: 100%; */
`

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 415px;
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


    &.with-fields {

        .form-field-select {
            margin-top: 0px;
            margin-left: 8px;

            &:first-child {
                margin-left: 0px;
            }
        }
    }
`

const FieldContainer = styled(Row)`
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
    }
`

const FieldUploadContainer = styled(Row)`
    height: 65px;
    border-radius: 8px;
    margin-top:  20px;
    background-color: #EBEBF9;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;

    p {
        font-family: var(--font-medium);
        font-size: 15px;
    }

    .description {
        color: #75757D;
        font-family: var(--font-medium);
        font-size: 12px;
        margin-top: 5px;
    }
`

const FieldSelectDropdown = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 5px 0px 8px;
    margin-left: 8px;
    border: none;
    border-left: 1px solid #E2E2E2;
    background-color: transparent;
    cursor: pointer;

    .dropdown-icon {

    }

    &:focus+.dropdown {
        top: 0px;
        opacity: 1;
        visibility: visible;
        height: fit-content;
    }
`

const FieldSelection = styled(Column)`
    position: absolute;
    width: 100%;
    /* min-height: 200px; */
    z-index: 1;
    top: 32px;
    right: 0px;
    background-color: #333333;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.03s ease-in; 
    overflow: hidden;
    padding: 8px 0;

    button {
        font-size: 13.5px;
        font-family: var(--font-regular);
        background-color: transparent;
        color: #FFFFFF;
        border: none;
        display: flex;
        padding: 8px 10px;
        margin: 0px;
        cursor: pointer;

        &:hover {
            background-color: #4242C3;
        }
    }
`

const FieldSelectItem = styled.button`
    
`

const FieldSelect = (props: any) => {
    return (
        <FieldContainer className={'form-field-select'}>
            <input type="text" value={'Avenir Next'} onChange={(e) => {}}/>
            <FieldSelectDropdown>
                <AngleDownIcon styles={'dropdown-icon'}/>
            </FieldSelectDropdown>
            <FieldSelection className={'dropdown'}>
                <FieldSelectItem>
                    <span>Avenir Next</span>
                </FieldSelectItem>
                <FieldSelectItem>
                    <span>Inter</span>
                </FieldSelectItem>
                <FieldSelectItem>
                    <span>Roboto</span>
                </FieldSelectItem>
                <FieldSelectItem>
                    <span>Open Sans</span>
                </FieldSelectItem>
                <FieldSelectItem>
                    <span>Lato</span>
                </FieldSelectItem>
                <FieldSelectItem>
                    <span>Poppins</span>
                </FieldSelectItem>
                <FieldSelectItem>
                    <span>Source Sans Pro</span>
                </FieldSelectItem>
            </FieldSelection>
        </FieldContainer>
    )
}

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
            <Column>
                <Paragraph>Upload brand icon</Paragraph>
                <span className={'description'}>only .svg file at 5mb or less.</span>
            </Column>
            <UploadIcon />
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
                            <FieldSelect />
                            <FormFieldRow className={'with-fields'}>
                                <FieldSelect />
                                <FieldSelect />
                                <FieldSelect />
                            </FormFieldRow>
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
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FormFieldRow>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>Max. height</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'500'} onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
                                    </Row>
                                </FieldContainer>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>Min. height</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'500'}  onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
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
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FormFieldRow>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>Max. height</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'500'} onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
                                    </Row>
                                </FieldContainer>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>Min. height</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'500'}  onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
                                    </Row>
                                </FieldContainer>
                            </FormFieldRow>
                        </FormField>     
                    </Section>
                    <FieldUpload />
                    <Section title={'Brand icon'}>
                        <FormField>
                            <FormFieldRow>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>Size</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'18'} onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
                                    </Row>
                                </FieldContainer>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <Row>
                                        <MarginRightIcon />
                                        <label style={{ minWidth: '50%', marginLeft: 6 }}>Spacer</label>
                                    </Row>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'18'}  onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
                                    </Row>
                                </FieldContainer>
                            </FormFieldRow>
                            <FormFieldRow>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <Row>
                                        <MarginTopIcon />
                                        <label style={{ minWidth: '50%', marginLeft: 6 }}>Top</label>
                                    </Row>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'18'} onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
                                    </Row>
                                </FieldContainer>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <Row>
                                        <MarginBottomIcon />
                                        <label style={{ minWidth: '50%', marginLeft: 6 }}>Bottom</label>
                                    </Row>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'18'}  onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
                                    </Row>
                                </FieldContainer>
                            </FormFieldRow>
                        </FormField>     
                    </Section>
                    <Section title={'Input'} multiple={true}>
                        <FormField>
                            <FieldSelect />
                            <FormFieldRow className={'with-fields'}>
                                <FieldSelect />
                                <FieldSelect />
                                <FieldSelect />
                            </FormFieldRow>
                        </FormField>
                        <Section title={'Background'}>
                            <FormField>
                                <FormFieldRow>
                                    <FieldContainer className={'form-field with-label with-meta'}>
                                        <label style={{ minWidth: '50%' }}>Active</label>
                                        <Row className={'input-row'}>
                                            <input type="text" value={'18'} onChange={(e) => {}}/>
                                            <span className={'meta'}>px</span>
                                        </Row>
                                    </FieldContainer>
                                    <FieldContainer className={'form-field with-label with-meta'}>
                                        <label style={{ minWidth: '50%' }}>Inactive</label>
                                        <Row className={'input-row'}>
                                            <input type="text" value={'18'}  onChange={(e) => {}}/>
                                            <span className={'meta'}>px</span>
                                        </Row>
                                    </FieldContainer>
                                </FormFieldRow>
                            </FormField>  
                        </Section>
                        <Section title={'Border'}>
                            <FormField>
                                <FormFieldRow>
                                    <FieldContainer className={'form-field with-label with-meta'}>
                                        <label style={{ minWidth: '50%', marginLeft: 6 }}>none</label>
                                        <Row className={'input-row'}>
                                            <input type="text" value={'18'} onChange={(e) => {}}/>
                                            <span className={'meta'}>px</span>
                                        </Row>
                                    </FieldContainer>
                                    <FieldContainer className={'form-field with-label with-meta'}>
                                        <Row>
                                            <BorderRadiusIcon />
                                            <label style={{ minWidth: '50%', marginLeft: 6 }}>Radius</label>
                                        </Row>
                                        <Row className={'input-row'}>
                                            <input type="text" value={'18'}  onChange={(e) => {}}/>
                                            <span className={'meta'}>px</span>
                                        </Row>
                                    </FieldContainer>
                                </FormFieldRow>
                            </FormField>     
                        </Section>
                        <Section title={'Padding'}>
                            <FormField>
                                <FormFieldRow>
                                    <FieldContainer className={'form-field with-label with-meta'}>
                                        <MarginTopIcon />
                                        <Row className={'input-row'}>
                                            <input type="text" value={'18'} onChange={(e) => {}}/>
                                            <span className={'meta'}>px</span>
                                        </Row>
                                    </FieldContainer>
                                    <FieldContainer className={'form-field with-label with-meta'}>
                                        <MarginBottomIcon />
                                        <Row className={'input-row'}>
                                            <input type="text" value={'18'} onChange={(e) => {}}/>
                                            <span className={'meta'}>px</span>
                                        </Row>
                                    </FieldContainer>
                                    <FieldContainer className={'form-field with-label with-meta'}>
                                        <MarginLeftIcon />
                                        <Row className={'input-row'}>
                                            <input type="text" value={'18'} onChange={(e) => {}}/>
                                            <span className={'meta'}>px</span>
                                        </Row>
                                    </FieldContainer>
                                    <FieldContainer className={'form-field with-label with-meta'}>
                                        <MarginRightIcon />
                                        <Row className={'input-row'}>
                                            <input type="text" value={'18'} onChange={(e) => {}}/>
                                            <span className={'meta'}>px</span>
                                        </Row>
                                    </FieldContainer>
                                </FormFieldRow>
                            </FormField>     
                        </Section>
                    </Section>
                    <Section title={'Placeholder'}>
                        <FormField>
                            <FieldSelect />
                            <FormFieldRow className={'with-fields'}>
                                <FieldSelect />
                                <FieldSelect />
                                <FieldSelect />
                            </FormFieldRow>
                        </FormField>
                    </Section>
                    <Section title={'Bar shadow / Elevation'}>
                        <FormField>
                            <FormFieldRow>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>V-offset</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'18'} onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
                                    </Row>
                                </FieldContainer>
                                <FieldContainer className={'form-field with-label with-meta'}>
                                    <label style={{ minWidth: '50%' }}>H-offset</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'18'}  onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
                                    </Row>
                                </FieldContainer>
                                <FieldContainer className={'form-field with-label with-meta'} style={{ maxWidth: '25%' }}>
                                    <label style={{ minWidth: '50%' }}>Blur</label>
                                    <Row className={'input-row'}>
                                        <input type="text" value={'18'}  onChange={(e) => {}}/>
                                        <span className={'meta'}>px</span>
                                    </Row>
                                </FieldContainer>
                            </FormFieldRow>
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