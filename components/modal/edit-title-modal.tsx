"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function EditTitleModal() {
  const formSchema = z.object({
    resumeTitle: z
      .string()
      .min(2, {
        message: "최소 2자 이상 입력해주세요",
      })
      .max(10, {
        message: "최대 10자까지 입력이 가능합니다",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeTitle: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="h-8 w-8 p-0 rounded-full"
          onClick={() => form.reset()}
        >
          <Pencil className="text-blue-500" size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>이력서 제목 수정</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-5"
          >
            <FormField
              control={form.control}
              name="resumeTitle"
              render={({ field }) => (
                <FormItem className="px-10 py-5">
                  <FormControl>
                    <Input
                      placeholder="제목을 입력해주세요"
                      {...field}
                      className="py-6 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full py-6">
              수정
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
