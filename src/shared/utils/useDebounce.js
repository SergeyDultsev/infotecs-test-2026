import { useCallback, useRef } from "react";

export const useDebounce = (fn, delay = 300) => {
    const timeout = useRef(null);

    return useCallback((...args) => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            fn(...args);
        }, delay);
    }, [fn, delay]);
}