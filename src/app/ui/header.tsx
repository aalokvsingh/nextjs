export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold tracking-wide">Myna Company</h1>

      <div className="flex items-center gap-4">
        <button className="hover:bg-gray-700 px-3 py-2 rounded">Login</button>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </header>
  );
}
