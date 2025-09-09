import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";

interface SubmitButtonProps {
  title: string;
  isLoading: boolean;
}

function SubmitButton({ title, isLoading }: SubmitButtonProps) {
  return (
    <Button
      color="primary"
      className="mt-2"
      fullWidth
      isDisabled={isLoading}
      type="submit"
    >
      {isLoading ? <Spinner size="sm" color="white" /> : title}
    </Button>
  );
}

export default SubmitButton;
