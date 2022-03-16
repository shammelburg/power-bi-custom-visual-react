import * as React from "react";
export interface State {
    textLabel: string;
    textValue: string;
    size: number;
    background?: string;
    borderWidth?: number;
}
export declare const initialState: State;
export declare class ReactCustomVisual extends React.Component<{}, State> {
    constructor(props: any);
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
