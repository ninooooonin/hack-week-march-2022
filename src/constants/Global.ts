const Global: any = {
    url: {
        home: '/',
    },
    action: {
        SWITCH: 'switch',
        BUTTON: 'button'
    },
    filter: {
        ALL: 'all',
        QUICKSTART: 'quick-start',
        COMMANDS: 'commands',
        CONTEXT: 'context',
        OTHER_RESOURCES: 'other-resources',
    },
    events: {
        OPENED: 'opened',
        CLOSED: 'closed',
        DEADEND: 'abandoned_search',
        SUGGEST: 'command_suggestion',
        EXECUTE: 'command_execution',
        NO_RESULTS: 'no_results_for_query'
    }
}

export default Global;