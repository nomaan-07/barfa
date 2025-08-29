function CartPopover() {
  return (
    <div className="invisible absolute top-9.5 left-0 hidden pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 lg:block">
      <div className="border-small rounded-small border-default-300 bg-background w-72 px-1 py-2"></div>
    </div>
  );
}

export default CartPopover;
