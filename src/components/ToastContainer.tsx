import { Check } from "lucide-react";
import type { Toast } from "../types";

const ToastContainer = ({ toasts }: { toasts: Toast[] }) =>  {
    // houses all toasts with added checkmark to accompany message
    return (
        <div aria-live="polite" className="fixed bottom-6 right-6 z-100 flex flex-col gap-2 items-end pointer-events-none">
            {toasts.map((toast) => (
                <div key={toast.id} className="relative flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-3 text-m font-semibold
                 text-white <-50 shadow-lg transition-all duration-500 ml-5">
                    <Check size={20} strokeWidth={4} color="white" aria-hidden="true"/>
                    {toast.message}
                </div>
            ))}
        </div>
    );
}

export default ToastContainer;