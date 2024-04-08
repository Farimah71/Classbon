import { ReactNode } from "react";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <aside>
        <div className="flex flex-col gap-y-5 items-center py-6 bg-gray-100 w-80 h-full">
          <span className="cursor-pointer w-fit">Profile</span>
          <span className="cursor-pointer w-fit">Courses</span>
          <span className="cursor-pointer w-fit">Profile</span>
        </div>
      </aside>
      <main>{children}</main>
    </div>
  );
}
