export type DebounceFunction<T extends (...args: any[]) => any> = (
    func: T,
    delay: number
) => (...args: Parameters<T>) => void;

export const debounce: DebounceFunction<(...args: any[]) => void> = (func, delay) => {
    let timerId: NodeJS.Timeout;

    return (...args: Parameters<typeof func>) => {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};
