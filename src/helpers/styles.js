export default class Styles {
    constructor(userStyles) {
        this.rewritable = {
            background: userStyles.background || '#000',
            color: userStyles.color || '#fff',
            fontSize: userStyles.fontSize || '.8em',
            innerPadding: userStyles.innerPadding || '.3em 1em',
            margin: userStyles.margin || '10px',
            padding: userStyles.padding || '5px',
            radius: userStyles.radius || '0',
        };
    }

    getInitial = () => this.getTop();
    getLeft = () => this.merge(this.left());
    getRight = () => this.merge(this.right());
    getTop = () => this.merge(this.top());
    getBottom = () => this.merge(this.bottom());

    merge = (stylesModificator) => {
        const mergedStyles = {};
        Object.keys(this.base()).forEach((name) => {
            mergedStyles[name] = {};
            Object.assign(mergedStyles[name], this.base()[name]);
            Object.assign(mergedStyles[name], stylesModificator[name]);
        });
        return mergedStyles;
    }

    base = (instance = this) => ({
        wrapper: {
            position: 'relative',
            display: 'inline-block',
            color: '#555',
            cursor: 'help',
        },
        tooltip: {
            position: 'absolute',
            zIndex: '99',
            minWidth: '200px',
            maxWidth: '420px',
            background: instance.rewritable.background,
            padding: instance.rewritable.padding,
            borderRadius: instance.rewritable.radius,
            // prevent blinking when position is changed
            // sure, there is one huge disadvantage
            // tooltip will be shown on onload, so if it would contains some huge picture or video, it ostensibly doesn't show
            // but it can be hardly expected, so this solution should be ok
            visibility: 'hidden',
        },
        content: {
            background: instance.rewritable.background,
            color: instance.rewritable.color,
            display: 'inline',
            fontSize: instance.rewritable.fontSize,
            padding: instance.rewritable.innerPadding,
        },
        arrow: {
            position: 'absolute',
            width: '0',
            height: '0',
        },
        gap: {
            position: 'absolute',
            width: '100%',
            height: '100%',
        },
        gapInner: {
            position: 'absolute',
            width: '100%',
            height: '100%',
        },
    });

    left = (instance = this) => ({
        tooltip: {
        right: '100%',
        top: '50%',
        marginRight: instance.rewritable.margin,
        WebkitTransform: 'translateY(-50%)',
        msTransform: 'translateY(-50%)',
        OTransform: 'translateY(-50%)',
        transform: 'translateY(-50%)',
        },
        arrow: {
        bottom: '50%',
        right: '-5px',
        marginBottom: '-5px',
        borderTop: 'solid transparent 5px',
        borderBottom: 'solid transparent 5px',
        borderLeft: 'solid ' + instance.rewritable.background + ' 5px',
        },
        gap: {
            width: instance.rewritable.margin,
            height: '100%',
            left: '100%',
            top: '0',
        },
        gapInner: {
            width: '200%',
            bottom: '0',
            right: '0',
        },
    });

    right = (instance = this) => ({
        tooltip: {
        left: '100%',
        top: '50%',
        marginLeft: instance.rewritable.margin,
        WebkitTransform: 'translateY(-50%)',
        msTransform: 'translateY(-50%)',
        OTransform: 'translateY(-50%)',
        transform: 'translateY(-50%)',
        },
        arrow: {
        bottom: '50%',
        left: '-5px',
        marginBottom: '-5px',
        borderTop: 'solid transparent 5px',
        borderBottom: 'solid transparent 5px',
        borderRight: 'solid ' + instance.rewritable.background + ' 5px',
        },
        gap: {
            width: instance.rewritable.margin,
            height: '100%',
            right: '100%',
            top: '0',
        },
        gapInner: {
            width: '200%',
            bottom: '0',
            left: '0',
        },
    });

    top = (instance = this) => ({
        tooltip: {
        bottom: '100%',
        left: '50%',
        marginBottom: instance.rewritable.margin,
        WebkitTransform: 'translateX(-50%)',
        msTransform: 'translateX(-50%)',
        OTransform: 'translateX(-50%)',
        transform: 'translateX(-50%)',
        },
        arrow: {
        bottom: '-5px',
        left: '50%',
        marginLeft: '-5px',
        borderLeft: 'solid transparent 5px',
        borderRight: 'solid transparent 5px',
        borderTop: 'solid ' + instance.rewritable.background + ' 5px',
        },
        gap: {
            height: instance.rewritable.margin,
            top: '100%',
            left: '0',
        },
        gapInner: {
            height: '200%',
            top: '0',
            left: '0',
        },
    });

    bottom = (instance = this) => ({
        tooltip: {
        top: '100%',
        left: '50%',
        marginTop: instance.rewritable.margin,
        WebkitTransform: 'translateX(-50%)',
        msTransform: 'translateX(-50%)',
        OTransform: 'translateX(-50%)',
        transform: 'translateX(-50%)',
        },
        arrow: {
        top: '-5px',
        left: '50%',
        marginLeft: '-5px',
        borderLeft: 'solid transparent 5px',
        borderRight: 'solid transparent 5px',
        borderBottom: 'solid ' + instance.rewritable.background + ' 5px',
        },
        gap: {
            height: instance.rewritable.margin,
            bottom: '100%',
            left: '0',
        },
        gapInner: {
            height: '200%',
            bottom: '0',
            left: '0',
        },
    });
}
