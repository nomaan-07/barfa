interface DoubleInputWrapperProps {
  children: React.ReactNode;
}

function DoubleInputWrapper({ children }: DoubleInputWrapperProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4 sm:flex-row">
      {children}
    </div>
  );
}

export default DoubleInputWrapper;
