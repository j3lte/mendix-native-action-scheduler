/**
 * This file was generated from NativeActionScheduler.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";
import { Big } from "big.js";

export interface NativeActionSchedulerProps<Style> {
    name: string;
    style: Style[];
    timerEnabled: DynamicValue<boolean>;
    timerInterval: DynamicValue<Big>;
    timerAction?: ActionValue;
    fireOnce: DynamicValue<boolean>;
}

export interface NativeActionSchedulerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    timerEnabled: string;
    timerInterval: string;
    timerAction: {} | null;
    fireOnce: string;
}
