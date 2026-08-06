
// Correctly import from components/ui/toast
import { useToast as useToastOriginal, toast } from "@/components/ui/toast";

// Ре-экспортируем хук
export const useToast = useToastOriginal;
export { toast };
