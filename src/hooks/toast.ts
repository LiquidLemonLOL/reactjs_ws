import {useCallback, useState } from "react";
import type { Toast } from "../types";

export function useToast() {
    const [toasts, setToast] = useState<Toast[]>([]);

    const showToast = useCallback((message: string) => {
        const id = crypto.randomUUID();

        setToast((prev) => [...prev.slice(-3), { id, message }]);

        setTimeout(() => setToast((prev) => prev.filter((toast) => toast.id !== id)), 2500);
    }, []);

    return {toasts, showToast}
}