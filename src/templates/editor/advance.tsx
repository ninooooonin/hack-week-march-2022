import React from 'react';
import styled from 'styled-components';
import { Content, FieldSelect,FormFieldRow, FieldRadio, FieldUpload } from './index';
import { Column, Row } from '../../components/general/layout';

// Templates
import Section, { FormField, FieldContainer } from '../section';


// Icons
import { AngleDownIcon, BorderRadiusIcon, MarginBottomIcon, MarginLeftIcon, MarginRightIcon, MarginTopIcon, UploadIcon } from '../../components/general/icons';

const Advance = (props: any) => {

    return (
      	<Content style={{ marginTop: 25 }}>
            <Section title={'Category header'} multiple={true}>
                <FormField>
                    <FieldContainer>
                        <input type="text" value={''} placeholder={'Recommended'} onChange={(e) => {}}/>
                    </FieldContainer>
                    <FieldSelect
                        value={'Avenir Next'} 
                        data={[
                            { text: 'Avenir Next' },
                            { text: 'Inter' },
                            { text: 'Roboto' },
                            { text: 'Open Sans' },
                            { text: 'Lato' },
                            { text: 'Poppins' },
                            { text: 'Source Sans Pro' }
                        ]}
                    />
                    <FormFieldRow className={'with-fields'}>
                        <FieldSelect 
                            value={'15'} 
                            data={[
                                { text: '10' },
                                { text: '11' },
                                { text: '12' },
                                { text: '13' },
                                { text: '14' },
                                { text: '15' },
                                { text: '16' }
                            ]}
                        />
                        <FieldSelect 
                            value={'Medium'} 
                            data={[
                                { text: 'Thin' },
                                { text: 'Regular' },
                                { text: 'Medium' },
                                { text: 'SemiBold' },
                                { text: 'Bold' },
                                { text: 'Bolder' }
                            ]}
                        />
                        <FieldSelect 
                            value={'#000000'} 
                        />
                    </FormFieldRow>
                </FormField>
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
            <Section title={'Option'} multiple={true}>
                <FormField>
                    <FieldSelect
                        value={'Avenir Next'} 
                        data={[
                            { text: 'Avenir Next' },
                            { text: 'Inter' },
                            { text: 'Roboto' },
                            { text: 'Open Sans' },
                            { text: 'Lato' },
                            { text: 'Poppins' },
                            { text: 'Source Sans Pro' }
                        ]}
                    />
                    <FormFieldRow className={'with-fields'}>
                        <FieldSelect 
                            value={'15'} 
                            data={[
                                { text: '10' },
                                { text: '11' },
                                { text: '12' },
                                { text: '13' },
                                { text: '14' },
                                { text: '15' },
                                { text: '16' }
                            ]}
                        />
                        <FieldSelect 
                            value={'Medium'} 
                            data={[
                                { text: 'Thin' },
                                { text: 'Regular' },
                                { text: 'Medium' },
                                { text: 'SemiBold' },
                                { text: 'Bold' },
                                { text: 'Bolder' }
                            ]}
                        />
                        <FieldSelect 
                            value={'#000000'} 
                        />
                    </FormFieldRow>
                </FormField>
                <Section title={'Padding'}>
                    <FormField>
                        <FormFieldRow>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginTopIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginBottomIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginLeftIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginRightIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                        </FormFieldRow>
                    </FormField>     
                </Section>
                <Section title={'Margin'}>
                    <FormField>
                        <FormFieldRow>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginTopIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginBottomIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginLeftIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginRightIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                        </FormFieldRow>
                    </FormField>     
                </Section>
            </Section>
            <Section title={'Keyboard shortcut'} multiple={true}>
                <FormField>
                    <FieldSelect
                        value={'Avenir Next'} 
                        data={[
                            { text: 'Avenir Next' },
                            { text: 'Inter' },
                            { text: 'Roboto' },
                            { text: 'Open Sans' },
                            { text: 'Lato' },
                            { text: 'Poppins' },
                            { text: 'Source Sans Pro' }
                        ]}
                    />
                    <FormFieldRow className={'with-fields'}>
                        <FieldSelect 
                            value={'15'} 
                            data={[
                                { text: '10' },
                                { text: '11' },
                                { text: '12' },
                                { text: '13' },
                                { text: '14' },
                                { text: '15' },
                                { text: '16' }
                            ]}
                        />
                        <FieldSelect 
                            value={'Medium'} 
                            data={[
                                { text: 'Thin' },
                                { text: 'Regular' },
                                { text: 'Medium' },
                                { text: 'SemiBold' },
                                { text: 'Bold' },
                                { text: 'Bolder' }
                            ]}
                        />
                        <FieldSelect 
                            value={'#000000'} 
                        />
                    </FormFieldRow>
                </FormField>
                <Section title={'Padding'}>
                    <FormField>
                        <FormFieldRow>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginTopIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginBottomIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginLeftIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginRightIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                        </FormFieldRow>
                    </FormField>     
                </Section>
                <Section title={'Margin'}>
                    <FormField>
                        <FormFieldRow>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginTopIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginBottomIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginLeftIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginRightIcon />
                                <Row className={'input-row'}>
                                    <input type="text" value={'4'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                        </FormFieldRow>
                    </FormField>     
                </Section>
            </Section>
            <Section title={'Feedback'} multiple={true}>
                <FormField>
                    <FieldContainer>
                        <input type="text" value={'Give feedback'} placeholder={'Feedback text'} onChange={(e) => {}}/>
                    </FieldContainer>
                    <FieldContainer className={'form-field with-textarea'}>
                        <label>Submission text</label>
                        <textarea name="" id="" value={`Hey! Thanks for the feedback. We'll get back on you as soon as possible.`}/>
                    </FieldContainer>
                    <FieldSelect
                        value={'Avenir Next'} 
                        data={[
                            { text: 'Avenir Next' },
                            { text: 'Inter' },
                            { text: 'Roboto' },
                            { text: 'Open Sans' },
                            { text: 'Lato' },
                            { text: 'Poppins' },
                            { text: 'Source Sans Pro' }
                        ]}
                    />
                    <FormFieldRow className={'with-fields'}>
                        <FieldSelect 
                            value={'15'} 
                            data={[
                                { text: '10' },
                                { text: '11' },
                                { text: '12' },
                                { text: '13' },
                                { text: '14' },
                                { text: '15' },
                                { text: '16' }
                            ]}
                        />
                        <FieldSelect 
                            value={'Medium'} 
                            data={[
                                { text: 'Thin' },
                                { text: 'Regular' },
                                { text: 'Medium' },
                                { text: 'SemiBold' },
                                { text: 'Bold' },
                                { text: 'Bolder' }
                            ]}
                        />
                        <FieldSelect 
                            value={'#000000'} 
                        />
                    </FormFieldRow>
                </FormField>
            </Section>
            <Section title={'Footer'} multiple={true}>
                <FormField>
                    <FormFieldRow>
                        <FieldContainer className={'form-field with-label with-meta'}>
                            <label style={{ minWidth: '50%' }}>Background</label>
                            <Row className={'input-row'}>
                                <input type="text" value={'#000000'} onChange={(e) => {}}/>
                            </Row>
                        </FieldContainer>
                    </FormFieldRow>
                </FormField>  
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
        </Content>
    )
}

export default Advance;