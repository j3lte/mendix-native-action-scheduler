import { createElement, useCallback, useMemo, useRef, FC } from "react";
import { TextStyle, View, ViewStyle } from "react-native";
import useUnmount from "react-use/lib/useUnmount";
import { executeAction } from "@j3lte/pluggable-widget-utils";
import { Style } from "@mendix/pluggable-widgets-tools";

import { NativeActionSchedulerProps } from "../typings/NativeActionSchedulerProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

import { Scheduler } from "./components/Scheduler";
import { useDynamicValue, useDynamicBigValue } from "./utils/hooks";

export const NativeActionScheduler: FC<NativeActionSchedulerProps<Style>> = ({
    timerEnabled,
    timerInterval,
    timerAction,
    fireOnce
}) => {
    const firedOnce = useRef(false);
    const firedOnceTimeout = useRef(-1);

    const [enabled, loadinEnabled] = useDynamicValue(timerEnabled);
    const [interval, loadingInterval] = useDynamicBigValue(timerInterval);
    const [once, loadingOnce] = useDynamicValue(fireOnce);

    const onTimer = useCallback(() => {
        executeAction(timerAction);
    }, [timerAction]);

    const schedulerProps = useMemo(
        () => ({
            enabled: enabled !== null && interval !== null && !once ? enabled : false,
            interval: interval !== null ? interval : -1
        }),
        [enabled, interval, once]
    );

    useUnmount(() => {
        if (firedOnceTimeout.current !== -1) {
            clearTimeout(firedOnceTimeout.current);
        }
    });

    if (loadinEnabled || loadingInterval || loadingOnce) {
        return null;
    }

    if (once) {
        if (!firedOnce.current) {
            if (firedOnceTimeout.current !== -1) {
                clearTimeout(firedOnceTimeout.current);
            }
            firedOnceTimeout.current = setTimeout(
                () => {
                    onTimer();
                },
                interval !== null ? interval : 0
            ) as unknown as number;
            firedOnce.current = true;
        }
        return <View />;
    }

    return <Scheduler {...schedulerProps} onTimer={onTimer} />;
};

NativeActionScheduler.displayName = "NativeActionScheduler";
