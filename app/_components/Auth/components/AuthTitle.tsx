interface AuthTitleProps {
  title: string;
}

function AuthTitle({ title }: AuthTitleProps) {
  return <h2 className="w-full text-center text-xl font-black">{title}</h2>;
}

export default AuthTitle;
