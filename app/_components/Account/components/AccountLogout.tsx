import { useLogout } from "@/app/_hooks/useLogout";
import ConfirmModal from "../../Common/ConfirmModal";

interface AccountLogoutProps {
  afterLogout?: () => void;
  logout: ReturnType<typeof useLogout>;
}

function AccountLogout({ afterLogout, logout }: AccountLogoutProps) {
  const { isLoading, isOpen, onClose, onOpenChange, handleLogout } = logout;

  function handleClose() {
    onClose();
    afterLogout?.();
  }

  return (
    <ConfirmModal
      title="خروج از حساب کاربری"
      caption="با خروج از حساب کاربری،‌ سبد خرید شما حذف می‌شود،‌ آیا مطمئن هستید؟"
      confirmButtonText="خروج از حساب"
      isOpen={isOpen}
      isLoading={isLoading}
      onOpenChange={onOpenChange}
      onCancel={handleClose}
      onConfirm={() => handleLogout(afterLogout)}
    />
  );
}

export default AccountLogout;
