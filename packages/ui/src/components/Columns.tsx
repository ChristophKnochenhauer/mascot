export function Columns({ children }: { children: React.ReactNode }) {
  return <div className="columns">{children}</div>;
}
export function Left({ children }: { children: React.ReactNode }) {
  return <div className="col">{children}</div>;
}
export function Right({ children }: { children: React.ReactNode }) {
  return <div className="col">{children}</div>;
}