export type titleProps = {
  title: string;
  className?: string;
};

export default function Title({
    title,
    className
}:titleProps) {
  return <div className={className}>
    {title}
  </div>
};
