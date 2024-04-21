"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_apis/get-comments";

export const CourseComments = () => {
  const { slug } = useParams();
  const { data: comments } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });
  return (
    <>
      {comments?.data.map((c) => (
        <p key={`comment-${c.id}`} className="mt-10">
          {c.commentText}
        </p>
      ))}
    </>
  );
};
