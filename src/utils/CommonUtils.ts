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
export type ThrottleFunction<T extends (...args: any[]) => any> = (
    func: T,
    delay: number
) => (...args: Parameters<T>) => void;

export const throttle: ThrottleFunction<(...args: any[]) => void> = (func, delay) => {
    let lastExecTime: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    return (...args: Parameters<typeof func>) => {
        const currentTime = Date.now();

        if (!lastExecTime || currentTime - lastExecTime >= delay) {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }

            lastExecTime = currentTime;
            func.apply(this, args);
        } else if (!timeoutId) {
            timeoutId = setTimeout(() => {
                lastExecTime = Date.now();
                timeoutId = null;
                func.apply(this, args);
            }, delay);
        }
    };
};

export function containsChineseCharacters(str:string) {
    const reg = /[\u4e00-\u9fa5]/; // 匹配中文字符的正则表达式
    return reg.test(str);
}
