"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(5, {
    message: "ФИО должно содержать не менее 5 символов"
  }),
  email: z.string().email({
    message: "Введите корректный email"
  }),
  phone: z.string().min(10, {
    message: "Введите корректный номер телефона"
  }),
  school: z.string().min(3, {
    message: "Укажите название школы"
  }),
  grade: z.string({
    required_error: "Выберите класс",
  }),
  club: z.string({
    required_error: "Выберите кружок",
  }),
});

export function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      school: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here would be the actual submission logic
    console.log(values);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg border border-green-100">
        <h3 className="text-xl font-bold text-green-700 mb-2">Заявка успешно отправлена!</h3>
        <p className="text-gray-600 mb-4">
          Благодарим за интерес к физическим кружкам НГТУ.
          Мы свяжемся с вами в ближайшее время.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-2"
        >
          Отправить еще одну заявку
        </Button>
      </div>
    );
  }

  return (
    <div className="nstu-form bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ФИО ученика</FormLabel>
                <FormControl>
                  <Input placeholder="Иванов Иван Иванович" {...field} />
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
                    <Input type="email" placeholder="ivan@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Предпочтительно адрес родителя
                  </FormDescription>
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
                    <Input placeholder="+7 (999) 123-45-67" {...field} />
                  </FormControl>
                  <FormDescription>
                    Для уточнения деталей
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="school"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Школа</FormLabel>
                  <FormControl>
                    <Input placeholder="Школа №123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Класс</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите класс" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="7">7 класс</SelectItem>
                      <SelectItem value="8">8 класс</SelectItem>
                      <SelectItem value="9">9 класс</SelectItem>
                      <SelectItem value="10">10 класс</SelectItem>
                      <SelectItem value="11">11 класс</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="club"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Выберите кружок</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите кружок" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="quantum">Квантовые технологии</SelectItem>
                    <SelectItem value="mechanics">Прикладная механика</SelectItem>
                    <SelectItem value="astrophysics">Астрофизика</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-nstu-red hover:bg-nstu-red/90 text-white"
          >
            Отправить заявку
          </Button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Нажимая кнопку "Отправить заявку", вы соглашаетесь с политикой
            обработки персональных данных НГТУ.
          </p>
        </form>
      </Form>
    </div>
  );
}
