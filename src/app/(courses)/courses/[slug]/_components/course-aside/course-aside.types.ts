import { CourseDetail } from "@/types/course-details.interface";

export type CourseAsideProps = Pick<
  CourseDetail,
  | "basePrice"
  | "numberOfLectures"
  | "numOfStudents"
  | "duration"
  | "recordStatus"
  | "isDownloadable"
  | "averageReviewRating"
  | "level"
  | "numOfReviews"
  | "authorName"
  | "authorSpecialty"
  | "profileImageId"
  | "levelNumber"
>;
