import React, {PropTypes} from 'react';
import { getOffset, getGlobalViewportPosition } from '../helpers/offset';
import Styles from '../helpers/styles';

const mediaTags = ['img', 'object', 'video'];

export default class Tooltip extends React.Component {
    static propTypes = {
        children: PropTypes.any.isRequired,
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
        ]),
        background: PropTypes.string,
        color: PropTypes.string,
        fontSize: PropTypes.string,
        innerPadding: PropTypes.string,
        margin: PropTypes.string,
        padding: PropTypes.string,
        radius: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.stylesFactory = new Styles({
            background: props.background,
            color: props.color,
            fontSize: props.fontSize,
            innerPadding: props.innerPadding,
            margin: props.margin,
            padding: props.padding,
            radius: props.radius,
        });
        this.state = {
            visible: false,
            styles: this.stylesFactory.getInitial(),
        };
    }

    show = () => this.setVisibility(true);
    hide = () => this.setVisibility(false);

    getOverflowMeasure = () => {
        const tooltipOffset = getOffset(this.tooltipReference);
        const docPosition = getGlobalViewportPosition();
        const relativePosition = {
            top: tooltipOffset.top - docPosition.top,
            bottom: docPosition.bottom - tooltipOffset.bottom,
            left: tooltipOffset.left - docPosition.left,
            right: docPosition.right - tooltipOffset.right,
        };
        return Math.max(0, -(Math.min(relativePosition.left, 0) + Math.min(relativePosition.right, 0) + Math.min(relativePosition.top, 0) + Math.min(relativePosition.bottom, 0)));
    }

    getStylesForPosition = (position) => {
        switch(position) {
            case 1: return this.stylesFactory.getBottom();
            case 2: return this.stylesFactory.getRight();
            case 3: return this.stylesFactory.getLeft();
            default: return this.stylesFactory.getTop();
        }
    }

    // the logic is simple - try step by step each position and choose the first one it doesn't overflow
    // otherwise display tooltip where it was the least overflow
    // better than unreliable complex calculations
    setNewPosition = (iteration = 0, bestPosition = undefined, bestPositionScore = undefined) => {
        const newState = Object.assign({}, this.state);
        if (iteration < 4) {
            newState.styles = this.getStylesForPosition(iteration);
            this.setState(newState, () => {
                const overflowMeasure = this.getOverflowMeasure();
                const isOverflown = overflowMeasure > 0;
                if (!bestPositionScore || !bestPosition || overflowMeasure < bestPositionScore) {
                    bestPosition = iteration;
                    bestPositionScore = overflowMeasure;
                }
                if (isOverflown) {
                    this.setNewPosition(iteration + 1, bestPosition, bestPositionScore);
                } else {
                    newState.styles = this.getStylesForPosition(iteration);
                    this.tooltipReference.style.visibility = 'visible';
                }
            });
        } else {
            newState.styles = this.getStylesForPosition(bestPosition);
            this.setState(newState, () => {
                this.tooltipReference.style.visibility = 'visible';
            });
        }
    }

    setVisibility = (visible) => {
        this.setState(Object.assign({}, this.state, {
            visible,
        }), () => {
            if (visible && this.tooltipReference) {
                //wait for all content to get the right tooltip size
                const media = this.tooltipReference.querySelector(mediaTags.join(', '));
                const loaded = () => {
                    this.setNewPosition();
                };
                if (!media || media.complete) {
                    loaded()
                } else {
                    media.addEventListener('load', loaded)
                    media.addEventListener('error', loaded);
                }                
            }
        });
    }

    handleTouch = () => {
        this.show();
        this.assignOutsideTouchHandler();
    }

    wrapperReference;
    getWrapperReference = (reference) => this.wrapperReference = reference;
    tooltipReference;
    getTooltipReference = (reference) => this.tooltipReference = reference;

    assignOutsideTouchHandler = () => {
        const handler = (e) => {
            let currentNode = e.target;
            const componentNode = this.wrapperReference;
            while (currentNode.parentNode) {
                if (currentNode === componentNode) return;
                currentNode = currentNode.parentNode;
            }
            if (currentNode !== document) return;
            this.hide();
            document.removeEventListener('touchstart', handler);
        }
        document.addEventListener('touchstart', handler);
    }

    render() {
        const {props, state, show, hide, handleTouch, getWrapperReference, getTooltipReference} = this;
        const {styles} = this.state;
        return (
            <div
                onMouseEnter={show}
                onMouseLeave={hide}
                onTouchStart={handleTouch}
                ref={getWrapperReference}
                style={styles.wrapper}
            >
                {props.children}
                {
                    state.visible
                    && <div ref={getTooltipReference} style={styles.tooltip}>
                        <div style={styles.content}>{props.content}</div>
                        <div style={styles.arrow}> </div>
                        <div style={styles.gap}><div style={styles.gapInner}> </div></div>
                    </div>
                }
            </div>
        )
    }
}
