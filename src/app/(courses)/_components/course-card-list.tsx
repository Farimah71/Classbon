import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCard } from "./course-card";

type CourseCardListProps = {
  courses: CourseSummary[];
};

export const CourseCardList: React.FC<CourseCardListProps> = ({
  courses,
}: CourseCardListProps) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center xl:justify-start mt-10">
      {courses.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
