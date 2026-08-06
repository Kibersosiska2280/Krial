import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Building2, User, Phone, Mail, FileText, Send } from "lucide-react";

interface B2BRequestFormProps {
  serviceType?: string;
  productName?: string;
}

const B2BRequestForm = ({ serviceType, productName }: B2BRequestFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    inn: "",
    contactPerson: "",
    phone: "",
    email: "",
    message: productName ? `Запрос на: ${productName}` : "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Сохраняем заявку в localStorage
      const existingRequests = JSON.parse(localStorage.getItem("b2b_requests") || "[]");
      const newRequest = {
        id: Date.now().toString(),
        ...formData,
        serviceType: serviceType || "Общий запрос",
        createdAt: new Date().toISOString(),
        status: "new"
      };
      existingRequests.push(newRequest);
      localStorage.setItem("b2b_requests", JSON.stringify(existingRequests));

      toast({
        title: "Заявка отправлена!",
        description: "Наш менеджер свяжется с вами в течение рабочего дня.",
      });

      setFormData({
        companyName: "",
        inn: "",
        contactPerson: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-secondary border border-border rounded-xl p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold mb-6">Запросить стоимость</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="companyName" className="flex items-center gap-2">
              <Building2 size={16} className="text-accent" />
              Название компании *
            </Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="ООО «Компания»"
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="inn" className="flex items-center gap-2">
              <FileText size={16} className="text-accent" />
              ИНН
            </Label>
            <Input
              id="inn"
              name="inn"
              value={formData.inn}
              onChange={handleChange}
              placeholder="1234567890"
              className="bg-background border-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contactPerson" className="flex items-center gap-2">
              <User size={16} className="text-accent" />
              Контактное лицо *
            </Label>
            <Input
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Иван Иванов"
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              Телефон *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (999) 123-45-67"
              required
              className="bg-background border-border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail size={16} className="text-accent" />
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="info@company.ru"
            required
            className="bg-background border-border"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Комментарий к заявке</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Опишите ваш запрос, укажите объём, сроки и другие детали..."
            rows={4}
            className="bg-background border-border resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-white"
          size="lg"
        >
          {isSubmitting ? (
            "Отправка..."
          ) : (
            <>
              <Send size={18} className="mr-2" />
              Отправить заявку
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default B2BRequestForm;
