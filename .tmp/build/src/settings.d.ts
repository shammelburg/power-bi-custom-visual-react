import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class CircleSettings {
    circleColor: string;
    circleThickness: number;
}
export declare class VisualSettings extends DataViewObjectsParser {
    circle: CircleSettings;
}
