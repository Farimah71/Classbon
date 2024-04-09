import Image from "next/image";
import { Button } from "./_components/button";

export default function Home() {
  return (
    <section className="bg-hero-pattern bg-no-repeat bg-center xl:bg-left mt-5 xl:mt-20">
      <div className="container flex flex-col-reverse xl:flex-row">
        <div className="flex flex-col gap-y-8 text-center xl:text-right mt-12 pb-10">
          <h3 className="dark:text-info text-xl xl:text-2xl">
            خوش اومدی به ...
          </h3>
          <h1 className="text-xl xl:text-5xl font-black gradient">
            مسیر صعود به قله های برنامه نویسی
          </h1>
          <p className="text-lg font-bold leading-8">
            هر جای مسیر برنامه‌نویسی که باشی، با همراهی استادهای با تجربه کلاسبن
            می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه هواتو
            داریم.
          </p>
          <div className="flex gap-x-4">
            <Button variant="primary">دوره‌های ری‌اکت و نکست</Button>
            <Button variant="neutral">مشاوره برنامه‌نویسی</Button>
          </div>

          <Image
            src="/images/frameworks.png"
            width={412}
            height={39}
            alt=""
            className="grayscale opacity-70 m-auto xl:m-0 mt-8 xl:mt-5"
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          width={702}
          height={521}
          alt="کلاسبن"
        />
      </div>
    </section>
  );
}
