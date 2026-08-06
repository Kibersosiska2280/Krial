import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const CallbackButton = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(data) as Record<string, string>;

    try {
      const existing = JSON.parse(localStorage.getItem("b2b_requests") || "[]");
      existing.push({
        id: Date.now().toString(),
        companyName: values.company || "",
        inn: "",
        contactPerson: values.name || "",
        phone: values.phone || "",
        email: "",
        message: values.message || "",
        serviceType: "Получить расчёт (обратный звонок)",
        createdAt: new Date().toISOString(),
        status: "new",
      });
      localStorage.setItem("b2b_requests", JSON.stringify(existing));
    } catch (err) {
      console.error("Не удалось сохранить заявку:", err);
    }

    await new Promise((r) => setTimeout(r, 400));
    setLoading(false);
    setOpen(false);
    form.reset();
    toast({
      title: "Заявка отправлена",
      description: "Менеджер свяжется с вами в течение 15 минут.",
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-5 py-4 rounded-full shadow-2xl shadow-accent/30 transition-all hover:scale-105"
          aria-label="Получить расчёт"
        >
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40"></span>
            <Phone size={20} className="relative" />
          </span>
          <span className="hidden sm:inline font-medium text-sm">Получить расчёт</span>
        </button>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Получить расчёт за 1 день</DialogTitle>
            <DialogDescription>
              Оставьте заявку — менеджер перезвонит в течение 15 минут и подготовит коммерческое предложение.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <Input name="name" placeholder="Ваше имя" required />
            <Input name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
            <Input name="company" placeholder="Компания (необязательно)" />
            <Textarea name="message" placeholder="Кратко о задаче" rows={3} />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={loading}>
              {loading ? "Отправляем..." : "Заказать звонок"}
            </Button>
            <p className="text-xs text-white/50 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CallbackButton;
