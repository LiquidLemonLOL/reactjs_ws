import {useCallback, useState } from "react";
import type { Toast } from "../types";

export function useToast() {
    // track state of toast messages, toasts are the notifs, setToast updates that array and no notifs are
    // found at init hook
    const [toasts, setToast] = useState<Toast[]>([]);

    //useCallback means other components can use it to display the notification
    const showToast = useCallback((message: string) => {
        // simply assigns id to separate identical message notifs
        const id = crypto.randomUUID();

        //updates the array of toasts, takes latest array (prev), keeps last 3 toasts by slicing array
        // -3 = 4 max toasts
        setToast((prev) => [...prev.slice(-3), { id, message }]);

        //sets timeout for when toasts are removed from the page, removes the correct toast by filtering latest array
        // to only include toasts that do not have the id of specified toast that is to be removed
        setTimeout(() => setToast((prev) => prev.filter((toast) => toast.id !== id)), 2500);
    }, []);

    return {toasts, showToast}
}