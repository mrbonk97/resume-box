import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

interface RemoveButtonProps {
  handleRemove: () => void;
}

export const RemoveButton = ({ handleRemove }: RemoveButtonProps) => {
  return (
    <Button
      className="p-0 aspect-square"
      variant={"secondary"}
      tabIndex={-1}
      onClick={handleRemove}
    >
      <XIcon />
    </Button>
  );
};
