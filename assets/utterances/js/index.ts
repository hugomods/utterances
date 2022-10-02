class Utterances {
    private endpoint = ''

    constructor(endpoint: string) {
        this.endpoint = endpoint.replace(/\/$/, '')
    }

    setTheme(theme: string) {
        const msg = {
            type: 'set-theme',
            theme: theme,
        };
        const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame');
        iframe?.contentWindow?.postMessage(msg, this.endpoint);
    }
}

export default Utterances;
