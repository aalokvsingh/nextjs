export default function Aside({ children }: { children: React.ReactNode }) {
  return (
    <aside className="w-64 bg-gray-200 rounded p-4">
      {children}
    </aside>
  );
}
