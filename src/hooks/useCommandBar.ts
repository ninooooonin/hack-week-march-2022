import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// CommandBar
import { init } from 'commandbar';

const useCommandBar = (props: any) => {
    const {} = props;
	const router = useRouter();

    const componentWillUnmount = () => {
        console.log('CommandBar Hooks Unmount')
    };

    const componentDidMount = () => {
        init('91aaa579'); // TODO: Move ID to .env
        // window.CommandBar.boot('34aa5745-51c7', {});
        // window.CommandBar.boot('34aa5745-51c7', {}, { version: 'v1' });
        window.CommandBar.boot('34aa5745-51c7', {}, { hmac: '35ecb44ae57a8f22a8cc7134184caf0a9c41c7f5f415dc70a5eab653bc0c747b' });
    }

	// Life Cycle
	useEffect(() => {
        componentDidMount();
        return componentWillUnmount;
    }, []);

    // Initialized CommandBar Router
	useEffect(() => {
		const routerFunc = (newUrl: any) => router.push(newUrl);
      	
        // Add Router
        window.CommandBar.addRouter(routerFunc);
    });
}

export default useCommandBar;