class Utterances {
    setTheme(theme: string) {
        const msg = {
            type: 'set-theme',
            theme: theme,
        }
        document.querySelectorAll<HTMLIFrameElement>('.utterances-frame').forEach((frame) => {
            const endpoint = (new URL(frame.src)).origin
            frame.contentWindow?.postMessage(msg, endpoint)
        })
    }
}

export default Utterances
