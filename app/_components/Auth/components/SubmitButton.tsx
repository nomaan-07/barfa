import { Button } from "@heroui/button";

interface SubmitButtonProps {
  title: string;
}

function SubmitButton({ title }: SubmitButtonProps) {
  return (
    <Button color="primary" fullWidth type="submit">
      {title}
    </Button>
  );
}

export default SubmitButton;
