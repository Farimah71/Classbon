import { CourseSummary } from "@/types/course-summary.interface";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseCardList } from "./(courses)/_components/course-card-list";
import { IconBasket } from "./_components/icons/icons";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`
  );
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);

  const x = newestCourses.map((course: CourseSummary) => {
    return <div>{course.title}</div>;
  });

  return (
    <>
      <HomeHeroSection />
      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="font-extrabold text-2xl">جدیدترین دوره های آموزشی</h2>
          <p>برای به‌روز بودن، یاد گرفتن نکات تازه ضروریه!</p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
