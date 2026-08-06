import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionTitle from "@/components/SectionTitle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Схема валидации для формы контактов
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }),
  email: z.string().email({
    message: "Введите корректный email",
  }),
  phone: z.string().min(10, {
    message: "Введите корректный номер телефона",
  }),
  message: z.string().min(10, {
    message: "Сообщение должно содержать минимум 10 символов",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contacts = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Готовим данные для отправки (все поля обязательны согласно типам)
      const contactData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
      };
      
      console.log("Отправка данных формы:", contactData);
      
      // Отправка данных через мок Supabase
      const result = await supabase.from('contact_requests').insert(contactData);
      
      if (result.error) {
        console.error('Ошибка при сохранении заявки:', result.error);
        throw new Error('Не удалось отправить заявку');
      }

      // Ставим флаг успешной отправки
      setIsSuccess(true);
      setIsSubmitting(false);
      form.reset();
      
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      // Сбрасываем статус успеха через некоторое время
      setTimeout(() => setIsSuccess(false), 3000);
      
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      setIsSubmitting(false);
      
      toast({
        title: "Ошибка при отправке",
        description: "Пожалуйста, попробуйте еще раз позже",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <SectionTitle
        title="Контакты"
        subtitle="Свяжитесь с нами для получения дополнительной информации"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold">Наш адрес</h3>
          
          <div className="rounded-xl overflow-hidden h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d279.93512648647436!2d46.571326377624956!3d53.119707122351144!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sru!4v1772834801784!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h4 className="font-medium">Адрес:</h4>
                <p className="text-muted-foreground">г. Кузнецк, ул. Гагарина 53/1</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h4 className="font-medium">Телефон:</h4>
                <p className="text-muted-foreground">+7 (937) 401-97-38</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h4 className="font-medium">Email:</h4>
                <p className="text-muted-foreground">domlight@mail.ru</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h4 className="font-medium">Время работы:</h4>
                <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                <p className="text-muted-foreground">Сб-Вс: 11:00 - 18:00</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-card p-8 rounded-xl border shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ваше имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Иванов" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="example@mail.ru" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Телефон</FormLabel>
                        <FormControl>
                          <Input placeholder="+7 (900) 123-45-67" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Сообщение</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Напишите ваше сообщение здесь..."
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Отправить сообщение
                    </span>
                  )}
                </Button>
                
                {isSuccess && (
                  <div className="text-center text-green-600 mt-4">
                    Сообщение успешно отправлено!
                  </div>
                )}
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;
