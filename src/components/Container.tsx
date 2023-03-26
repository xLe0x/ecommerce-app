export default function Container({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes: string;
}) {
  return <div className={`px-8 mx-auto container ${classes}`}>{children}</div>;
}
