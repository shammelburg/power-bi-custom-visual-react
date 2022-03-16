import * as React from "react";

export interface State {
    textLabel: string,
    textValue: string,
    size: number,
    background?: string,
    borderWidth?: number
}

export const initialState: State = {
    textLabel: "",
    textValue: "",
    size: 200
}

export class ReactCustomVisual extends React.Component<{}, State>{
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof ReactCustomVisual.updateCallback === 'function') {
            ReactCustomVisual.updateCallback(newState);
        }
    }

    public state: State = initialState;

    public componentWillMount() {
        ReactCustomVisual.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        ReactCustomVisual.updateCallback = null;
    }

    render() {
        const { textLabel, textValue, size, background, borderWidth } = this.state;

        const style: React.CSSProperties = { width: size, height: size, background, borderWidth };

        return (
            <div className="circleCard" style={style}>
                <p>
                    {textLabel}
                    <br />
                    <em>{textValue}</em>
                </p>
            </div>
        )
    }
}