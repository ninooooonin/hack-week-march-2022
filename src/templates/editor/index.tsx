import React, { useState } from 'react';
import styled from 'styled-components';
import { Column, Row } from '../../components/general/layout';
import { Paragraph } from '../../components/general/text';
import Section, { FormField, FieldContainer } from '../section';


// Icons
import { AngleDownIcon, BorderRadiusIcon, MarginBottomIcon, MarginLeftIcon, MarginRightIcon, MarginTopIcon, UploadIcon } from '../../components/general/icons';

// Templates
import Basic from './basic';
import Advance from './advance';
import BottomActions from './bottom-actions';

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

// TODO: Move to separate component
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
            color: #4242C3;
            opacity: 1;
        }
    }
`

export const Content = styled.div`
    min-height: 100px;
    padding: 0px 20px;
    overflow: auto;
    max-height: calc(100vh - 115px);
    padding-bottom: 20px;
`

// TODO: Move to separate component
export const FieldRadio = styled.button`
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

// TODO: Move to separate FieldSelect
const TabItem = (props: any) => {
    const { text, isActive, onClick } = props;
    return <button className={`${isActive ? 'active': ''}`} onClick={onClick}>{text}</button>
}

export const FormFieldRow = styled(Row)`
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
    min-height: 40px;
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
    height:0px;

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

export const FieldSelect = (props: any) => {
    const { value, data } = props;

    return (
        <FieldContainer className={'form-field-select'}>
            <input type="text" value={value} onChange={(e) => {}}/>
            <FieldSelectDropdown>
                <AngleDownIcon styles={'dropdown-icon'}/>
            </FieldSelectDropdown>

            <FieldSelection className={'dropdown'}>
                { data && data.map((item: any, index: any) => {
                    return (
                        <FieldSelectItem key={`form-select-${index}-${item.text}`}>
                            <span>{item.text}</span>
                        </FieldSelectItem>
                    )
                })}
            </FieldSelection>
        </FieldContainer>
    )
}

export const FieldUpload = () => {
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

    // Local States
    const [tab, setTab] = useState('basic');

    return (
      	<Container>
            <Wrapper>
                <Tabs>
                    <TabItem isActive={tab == 'basic'} text={'Basic'} onClick={() => setTab('basic')}/>
                    <TabItem isActive={tab == 'advance-styles'} text={'Advance styles'} onClick={() => setTab('advance-styles')} />
                </Tabs>
                { tab == 'basic' ? <Basic /> : tab == 'advance-styles'? <Advance /> : null }
                <BottomActions />
            </Wrapper>
        </Container>
    )
}

export default AppContainer;