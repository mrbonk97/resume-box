import { Input } from "./ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "./ui/label";

interface InputYearProps {
  title: string;
}

export const InputYear: React.FC<InputYearProps> = ({ title }) => {
  return (
    <div className="">
      <Label htmlFor="date">{title}</Label>
      <InputOTP maxLength={6} id="date">
        <InputOTPGroup>
          <InputOTPSlot index={0} className="h-6 w-6" />
          <InputOTPSlot index={1} className="h-6 w-6" />
          <InputOTPSlot index={2} className="h-6 w-6" />
          <InputOTPSlot index={3} className="h-6 w-6" />
        </InputOTPGroup>
        .
        <InputOTPGroup>
          <InputOTPSlot index={4} className="h-6 w-6" />
          <InputOTPSlot index={5} className="h-6 w-6" />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};
