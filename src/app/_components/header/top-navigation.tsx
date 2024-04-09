"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItems[] = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره های ری اکت و نکست", href: "/courses" },
  { title: "مطالب و مقالات", href: "/blog" },
];

export const TopNavigation: React.FC = () => {
  const pathName = usePathname();
  return (
    <ul className="flex gap-x-8">
      {menuItems.map((item) => {
        const isActive = item.href === pathName;
        return (
          <Link
            href={item.href}
            className={`hover:text-primary pb-2 transition-colors duration-300 ${
              isActive && "border-b-2 border-primary/30 text-primary"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </ul>
  );
};
