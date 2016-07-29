import React = require("react");

interface TooltipStyles {
    wrapper: React.CSSProperties;
    tooltip: React.CSSProperties;
    content: React.CSSProperties;
    arrow: React.CSSProperties;
    gap: React.CSSProperties;
}

interface TooltipProps extends React.Props<any> {
    content: React.ReactText | React.ReactNode[];
    styles?: TooltipStyles;
}

interface TooltipStatic {
    new(props: TooltipProps): React.Component<TooltipProps, {}>
 }

export var Tooltip: TooltipStatic;