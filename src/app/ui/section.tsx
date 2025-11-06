export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex-1 bg-white rounded shadow p-4">
      {children}
    </section>
  );
}
