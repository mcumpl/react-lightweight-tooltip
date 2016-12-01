// inspirated from jQuery
export const getOffset = (elem) => {
    if (!elem) {
        return;
    }
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0, bottom: 0, right: 0 };
    }
    const rect = elem.getBoundingClientRect();
    if (rect.width || rect.height) {
        const doc = elem.ownerDocument;
        const win = getWindow(doc);
        const docElem = doc.documentElement;

        const topOffset = rect.top + win.pageYOffset - docElem.clientTop;
        const leftOffset = rect.left + win.pageXOffset - docElem.clientLeft;
        const elemHeight = parseFloat(window.getComputedStyle(elem).height);
        const elemWidth = parseFloat(window.getComputedStyle(elem).width);
        return {
            top: topOffset,
            bottom: topOffset + elemHeight,
            left: leftOffset,
            right: leftOffset + elemWidth,
        };
    }
    return rect;
}
const getWindow = (elem) => {
	return isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}
const isWindow = (obj) => {
    return obj != null && obj === obj.window;
}

export const getGlobalViewportPosition = () => {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];

    const top = document.body.scrollTop;
    const bottom = top + (w.innerHeight|| e.clientHeight|| g.clientHeight);
    const left = document.body.scrollLeft;
    const right = left + (w.innerWidth || e.clientWidth || g.clientWidth);
    return { top, bottom, left, right };
}
