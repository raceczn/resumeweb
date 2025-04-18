interface CardProps {
  children: React.ReactNode;
  className?: string;
  [propName: string]: unknown;
}

const Card = ({ children, className = "", ...others }: CardProps) => {
  return (
    <div className="rounded-xl w-full border-[1.5px] border-neutral-300 p-1 shadow-sm ">
      <div
        className={`rounded-lg bg-gradient-to-b
        from-neutral-200 to-neutral-100 transition-all duration-300 hover:to-[#ffffff] ${className}`}
        {...others}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
