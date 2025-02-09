export type buttonProps = {
  title: string;
  onClick: any;
  className?: string;
};

export default function Button({ title, onClick , className }: buttonProps) {
  return <button onClick={onClick} className={className}>{title}</button>
};
