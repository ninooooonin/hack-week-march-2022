import React, { useState } from 'react';
import styled from 'styled-components';
import { Content, FieldSelect,FormFieldRow, FieldRadio, FieldUpload } from './index';
import { Column, Row } from '../../components/general/layout';

// Templates
import Section, { FormField, FieldContainer } from '../section';

// Icons
import { AngleDownIcon, BorderRadiusIcon, MarginBottomIcon, MarginLeftIcon, MarginRightIcon, MarginTopIcon, UploadIcon } from '../../components/general/icons';

const Basic = (props: any) => {
    const { } = props;

    const [theme, setTheme] = useState('Light Mode Classic');
    const [slug, setSlug] = useState('light-mode-classic');

    const [width, setWidth] = useState('450');
    const [customWidth, setCustomWidth] = useState('0');
    const [widthMaxHeight, setWidthMaxHeight] = useState('0');
    const [widthMinHeight, setWidthMinHeight] = useState('0');

    const [height, setHeight] = useState('600');
    const [customHeight, setCustomHeight] = useState('0');
    const [heightMaxHeight, setHeightMaxHeight] = useState('0');
    const [heightMinHeight, setHeightMinHeight] = useState('0');

    const [brandIconSize, setBrandIconSize] = useState('21');
    const [brandIconSpacer, setBrandIconSpacer] = useState('12');
    const [brandIconTop, setBrandIconTop] = useState('8');
    const [brandIconBottom, setBrandIconBottom] = useState('8');

    const setValue = (e: any, callBack: any) => {
        return callBack(e.currentTarget.value);
    }

    return (
      	<Content style={{ marginTop: 25 }}>
            <Section title={'Theme'}>
                <FormField>
                    <FieldContainer>
                        <input type='text' value={theme} placeholder={'Theme name'} onChange={(e:any) => { setValue(e, setTheme)}}/>
                    </FieldContainer>
                    <FieldContainer className={'form-field with-label'}>
                        <label>Slug</label>
                        <input type='text' value={slug} onChange={(e) => { setValue(e, setSlug)}}/>
                    </FieldContainer>
                </FormField>
            </Section>
            <Section title={'Font'}>
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
            </Section>
            <Section title={'Width'}>
                <FormField>
                    <FieldContainer className={'form-field with-radio'}>
                        <FieldRadio className={ width === '450' ? 'active' : '' } onClick={() => setWidth('450')}>450px</FieldRadio>
                        <FieldRadio className={ width === '600' ? 'active' : '' } onClick={() => setWidth('600')}>600px</FieldRadio>
                        <FieldRadio className={ width === '900' ? 'active' : '' } onClick={() => setWidth('900')}>900px</FieldRadio>
                    </FieldContainer>
                    <FieldContainer className={'form-field with-label with-meta'}>
                        <label>Custom width</label>
                        <Row className={'input-row'}>
                            <input type='text' value={customWidth} onChange={(e:any) => { setValue(e, setCustomWidth)}}/>
                            <span className={'meta'}>px</span>
                        </Row>
                    </FieldContainer>
                    <FormFieldRow>
                        <FieldContainer className={'form-field with-label with-meta'}>
                            <label style={{ minWidth: '50%' }}>Max. height</label>
                            <Row className={'input-row'}>
                                <input type='text' value={widthMaxHeight} onChange={(e:any) => { setValue(e, setWidthMaxHeight)}}/>
                                <span className={'meta'}>px</span>
                            </Row>
                        </FieldContainer>
                        <FieldContainer className={'form-field with-label with-meta'}>
                            <label style={{ minWidth: '50%' }}>Min. height</label>
                            <Row className={'input-row'}>
                                <input type='text' value={widthMinHeight} onChange={(e:any) => { setValue(e, setWidthMinHeight)}}/>
                                <span className={'meta'}>px</span>
                            </Row>
                        </FieldContainer>
                    </FormFieldRow>
                </FormField>     
            </Section>
            <Section title={'Height'}>
                <FormField>
                    <FieldContainer className={'form-field with-radio'}>
                        <FieldRadio className={ height === '450' ? 'active' : '' } onClick={() => setHeight('450')}>450px</FieldRadio>
                        <FieldRadio className={ height === '600' ? 'active' : '' } onClick={() => setHeight('600')}>600px</FieldRadio>
                        <FieldRadio className={ height === '900' ? 'active' : '' } onClick={() => setHeight('900')}>900px</FieldRadio>
                    </FieldContainer>
                    <FieldContainer className={'form-field with-label with-meta'}>
                        <label>Custom width</label>
                        <Row className={'input-row'}>
                            <input type='text' value={customHeight} onChange={(e:any) => { setValue(e, setCustomHeight)}}/>
                            <span className={'meta'}>px</span>
                        </Row>
                    </FieldContainer>
                    <FormFieldRow>
                        <FieldContainer className={'form-field with-label with-meta'}>
                            <label style={{ minWidth: '50%' }}>Max. height</label>
                            <Row className={'input-row'}>
                                <input type='text' value={heightMaxHeight} onChange={(e:any) => { setValue(e, setHeightMaxHeight)}}/>
                                <span className={'meta'}>px</span>
                            </Row>
                        </FieldContainer>
                        <FieldContainer className={'form-field with-label with-meta'}>
                            <label style={{ minWidth: '50%' }}>Min. height</label>
                            <Row className={'input-row'}>
                                <input type='text' value={heightMinHeight} onChange={(e:any) => { setValue(e, setHeightMinHeight)}}/>
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
                                <input type='text' value={brandIconSize} onChange={(e:any) => { setValue(e, setBrandIconSize)}}/>
                                <span className={'meta'}>px</span>
                            </Row>
                        </FieldContainer>
                        <FieldContainer className={'form-field with-label with-meta'}>
                            <Row>
                                <MarginRightIcon />
                                <label style={{ minWidth: '50%', marginLeft: 6 }}>Spacer</label>
                            </Row>
                            <Row className={'input-row'}>
                                <input type='text' value={brandIconSpacer}  onChange={(e:any) => { setValue(e, setBrandIconSpacer)}}/>
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
                                <input type='text' value={brandIconTop} onChange={(e:any) => { setValue(e, setBrandIconTop)}}/>
                                <span className={'meta'}>px</span>
                            </Row>
                        </FieldContainer>
                        <FieldContainer className={'form-field with-label with-meta'}>
                            <Row>
                                <MarginBottomIcon />
                                <label style={{ minWidth: '50%', marginLeft: 6 }}>Bottom</label>
                            </Row>
                            <Row className={'input-row'}>
                                <input type='text' value={brandIconBottom}  onChange={(e:any) => { setValue(e, setBrandIconBottom)}}/>
                                <span className={'meta'}>px</span>
                            </Row>
                        </FieldContainer>
                    </FormFieldRow>
                </FormField>     
            </Section>
            <Section title={'Input'} multiple={true} unrepeat={true}>
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
                <Section title={'Background'}>
                    <FormField>
                        <FormFieldRow>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <label style={{ minWidth: '50%' }}>Active</label>
                                <Row className={'input-row'}>
                                    <input type='text' value={'#0000000'} onChange={(e) => {}}/>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                
                                <label style={{ minWidth: '50%' }}>Inactive</label>
                                <Row className={'input-row'}>
                                    <input type='text' value={'#0000000'}  onChange={(e) => {}}/>
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
                                    <input type='text' value={'18'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <Row>
                                    <BorderRadiusIcon />
                                    <label style={{ minWidth: '50%', marginLeft: 6 }}>Radius</label>
                                </Row>
                                <Row className={'input-row'}>
                                    <input type='text' value={'18'}  onChange={(e) => {}}/>
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
                                    <input type='text' value={'18'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginBottomIcon />
                                <Row className={'input-row'}>
                                    <input type='text' value={'18'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginLeftIcon />
                                <Row className={'input-row'}>
                                    <input type='text' value={'18'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                            <FieldContainer className={'form-field with-label with-meta'}>
                                <MarginRightIcon />
                                <Row className={'input-row'}>
                                    <input type='text' value={'18'} onChange={(e) => {}}/>
                                    <span className={'meta'}>px</span>
                                </Row>
                            </FieldContainer>
                        </FormFieldRow>
                    </FormField>     
                </Section>
            </Section>
            <Section title={'Placeholder'}>
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
            </Section>
            <Section title={'Bar shadow / Elevation'}>
                <FormField>
                    <FormFieldRow>
                        <FieldContainer className={'form-field with-label with-meta'}>
                            <label style={{ minWidth: '50%' }}>V-offset</label>
                            <Row className={'input-row'}>
                                <input type='text' value={'18'} onChange={(e) => {}}/>
                                <span className={'meta'}>px</span>
                            </Row>
                        </FieldContainer>
                        <FieldContainer className={'form-field with-label with-meta'}>
                            <label style={{ minWidth: '50%' }}>H-offset</label>
                            <Row className={'input-row'}>
                                <input type='text' value={'18'}  onChange={(e) => {}}/>
                                <span className={'meta'}>px</span>
                            </Row>
                        </FieldContainer>
                        <FieldContainer className={'form-field with-label with-meta'} style={{ maxWidth: '25%' }}>
                            <label style={{ minWidth: '50%' }}>Blur</label>
                            <Row className={'input-row'}>
                                <input type='text' value={'18'}  onChange={(e) => {}}/>
                                <span className={'meta'}>px</span>
                            </Row>
                        </FieldContainer>
                    </FormFieldRow>
                    <FieldContainer className={'form-field with-label with-meta'}>
                        <label>Background color</label>
                        <Row className={'input-row'}>
                            <input type='text' value={'#000000'} onChange={(e) => {}}/>
                        </Row>
                    </FieldContainer>
                </FormField>
            </Section>
        </Content>
    )
}

export default Basic;