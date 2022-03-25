import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

// Templates
import AppContainer from '../templates/container';
import AppHead from '../templates/head';
import Editor from '../templates/editor';

// Styled Components
import { Wrapper as LayoutWrapper, Column, Row } from '../components/general/layout';

// Styles
import app from  '../scss/app.module.scss';

const Page = () => {
	const router = useRouter();

	// States
	const [title, setTitle] = useState<string>('Hack Week 🚀 2022 ');
	const [isMounted, setMount] = useState(false);

	// Component will mount
    const componentWillUnmount = () => {
        setMount(false);
    }

    const componentDidMount = () => {
        setMount(true);
    }

    // Life Cycle Handler | Did Mount and Did Unmount
    useEffect(() => {
        componentDidMount();
        return componentWillUnmount;
    }, []);

	return (
        <Fragment>
            <AppHead title={title} />
            <AppContainer>
                <Editor />
            </AppContainer>
        </Fragment>
	)
}

export default Page;