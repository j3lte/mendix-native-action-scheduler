import { FC, createElement } from "react";
import useInterval from "react-use/lib/useInterval";
import useGetSet from "react-use/lib/useGetSet";
import { View } from "react-native";

export interface SchedulerProps {
    enabled: boolean;
    interval: number;
    onTimer: () => void;
    debug?: boolean;
}

export const Scheduler: FC<SchedulerProps> = ({ enabled, interval, onTimer, debug }) => {
    const [getInternalRender, setInternalRender] = useGetSet(0);
    useInterval(
        () => {
            setInternalRender(getInternalRender() + 1);
            if (debug) {
                console.log(`ActionScheduler: internal number ref: ${getInternalRender()}`);
            }
            onTimer();
        },
        enabled && interval > 0 ? interval : null
    );
    return <View />;
};

Scheduler.displayName = "Scheduler";
