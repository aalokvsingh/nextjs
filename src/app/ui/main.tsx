export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 gap-4 p-4">
      {children}
    </main>
  );
}