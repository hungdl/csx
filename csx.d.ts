export declare function extend(...args: any[]): any;
export declare var flexRoot: {
    display: string;
};
export declare var inlineRoot: {
    display: string;
};
export declare var horizontal: any, vertical: any;
export declare var wrap: {
    flexWrap: string;
};
export declare var wrapReverse: {
    flexWrap: string;
};
export declare var flexAuto: {
    flex: string;
};
export declare var flexNone: {
    flex: string;
};
export declare var flex: {
    flex: number;
};
export declare var flex1: {
    flex: number;
};
export declare var flex2: {
    flex: number;
};
export declare var flex3: {
    flex: number;
};
export declare var flex4: {
    flex: number;
};
export declare var flex5: {
    flex: number;
};
export declare var flex6: {
    flex: number;
};
export declare var flex7: {
    flex: number;
};
export declare var flex8: {
    flex: number;
};
export declare var flex9: {
    flex: number;
};
export declare var flex10: {
    flex: number;
};
export declare var flex11: {
    flex: number;
};
export declare var flex12: {
    flex: number;
};
export declare var start: {
    alignItems: string;
};
export declare var center: {
    alignItems: string;
};
export declare var end: {
    alignItems: string;
};
export declare var startJustified: {
    justifyContent: string;
};
export declare var centerJustified: {
    justifyContent: string;
};
export declare var endJustified: {
    justifyContent: string;
};
export declare var aroundJustified: {
    justifyContent: string;
};
export declare var betweenJustified: {
    justifyContent: string;
};
export declare var centerCenter: any;
export declare var selfStart: {
    alignSelf: string;
};
export declare var selfCenter: {
    alignSelf: string;
};
export declare var selfEnd: {
    alignSelf: string;
};
export declare var selfStretch: {
    alignSelf: string;
};
export declare var block: {
    display: string;
};
export declare var hidden: {
    display: string;
};
export declare var invisible: {
    visibility: string;
};
export declare var relative: {
    position: string;
};
export declare var fit: {
    position: string;
    top: number;
    right: number;
    bottom: number;
    left: number;
};
export declare var fullBleedBody: {
    margin: number;
    height: string;
};
export declare var scroll: {
    overflow: string;
};
export declare var fixed: {
    position: string;
};
export declare var fixedBottom: any, fixedLeft: any, fixedRight: any, fixedTop: any;
export declare var newLayerParent: {
    position: string;
};
export declare var newLayer: {
    position: string;
    left: number;
    right: number;
    top: number;
    bottom: number;
};
export declare namespace Box {
    type BoxUnit = number | string;
    interface BoxFunction<T> {
        (all: BoxUnit): T;
        (topAndBottom: BoxUnit, leftAndRight: BoxUnit): T;
        (top: BoxUnit, right: BoxUnit, bottom: BoxUnit, left: BoxUnit): T;
    }
    const padding: BoxFunction<{
        paddingTop: string;
        paddingRight: string;
        paddingBottom: string;
        paddingLeft: string;
    }>;
    const margin: BoxFunction<{
        marginTop: string;
        marginRight: string;
        marginBottom: string;
        marginLeft: string;
    }>;
    const border: BoxFunction<{
        borderTop: string;
        borderRight: string;
        borderBottom: string;
        borderLeft: string;
    }>;
}
