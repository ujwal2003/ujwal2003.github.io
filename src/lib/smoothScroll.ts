// source: https://svelte.dev/repl/0a9f812027da4d99b253f39a1941986c?version=3.31.0
type MouseClickEvent = MouseEvent & {
    currentTarget: EventTarget & HTMLAnchorElement;
};

export function handleAnchorClick (event: MouseClickEvent) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);

    if(anchor) {
        window.scrollTo({
            top: anchor.offsetTop,
            behavior: 'smooth'
        });
    }
}