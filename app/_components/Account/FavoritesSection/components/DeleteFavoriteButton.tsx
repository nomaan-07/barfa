import ConfirmModal from "@/app/_components/Common/ConfirmModal";
import { updateUser } from "@/app/_lib/actions";
import { useUserStore } from "@/app/_store/userStore";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/react";
import { addToast } from "@heroui/toast";
import { LucideTrash2 } from "lucide-react";
import { useState } from "react";

interface DeleteFavoriteButtonProps {
  id: number;
  title: string;
}

function DeleteFavoriteButton({ id, title }: DeleteFavoriteButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const favoriteProducts = useUserStore((state) => state.favorites);
  const setInitialUser = useUserStore((state) => state.setInitialUser);

  async function handleDelete() {
    const favorites = favoriteProducts.filter((p) => p.id !== id);

    setIsLoading(true);

    const { error, updatedUser } = await updateUser({ favorites });

    setIsLoading(false);

    if (error) {
      addToast({
        title: "خطا در حذف از لیست علاقه‌مندی‌ها",

        variant: "bordered",
        color: "danger",
      });
    } else if (updatedUser) {
      addToast({
        title: "از لیست علاقه‌مندی‌ها حذف شد",
        description: title,
        variant: "bordered",
        color: "warning",
      });

      setInitialUser(updatedUser);
    }
  }

  return (
    <>
      <Button
        color="danger"
        startContent={<LucideTrash2 size={20} />}
        onPress={onOpen}
        isDisabled={isLoading}
        fullWidth
        variant="flat"
      >
        حذف از لیست علاقه‌مندی‌ها
      </Button>

      <ConfirmModal
        title="حذف از لیست"
        caption="آیا از حذف این محصول از لیست علاقه‌مندی‌ها مطمئن هستید؟"
        confirmButtonText="حذف محصول"
        isLoading={isLoading}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onCancel={onClose}
        onConfirm={handleDelete}
      />
    </>
  );
}

export default DeleteFavoriteButton;
