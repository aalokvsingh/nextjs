"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="bg-gray-800 text-gray-200 p-3 flex gap-4 overflow-x-auto">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-2 pb-1 border-b-2 transition-colors ${
              active
                ? "border-blue-500 text-white"
                : "border-transparent hover:text-white hover:border-blue-400"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
