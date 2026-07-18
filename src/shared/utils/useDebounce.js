import { useCallback, useRef } from "react";

export const useDebounce = (fn, delay = 900) => {
    const timeout = useRef(null);
    const fnRef = useRef(fn);
    fnRef.current = fn;

    return useCallback((...args) => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            fnRef.current(...args);
        }, delay);
    }, [delay]);
}