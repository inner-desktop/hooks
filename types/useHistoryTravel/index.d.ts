export default function useHistoryTravel<T>(initialValue?: T): {
    value: T | undefined;
    setValue: (val: T) => void;
    backLength: number;
    forwardLength: number;
    go: (step: number) => void;
    back: () => void;
    forward: () => void;
};
