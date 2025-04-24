// A more complex example.
// Try to write a naive implementation first, then try to improve it.
// Optional/Advanced: Try to write a generic function which would work for any type of data.

/**
 * Filters out courses by returning courses that match the query object.
 */
type Courses = {
  name: string;
  level: string;
  grade: number;
  language: string;
  isRemote: boolean;
};
interface Query {
  name?: string;
  level?: string;
  grade?: number;
  language?: string;
  isRemote?: boolean;
}
export default function queryCourses(
  courses: Courses[],
  query: Query
): Courses[] {
  // Here you will need to implement the logic to filter out courses.
  // Use the tests as a guide to what you need to do.
  // const Matchoingcourse: Courses[] = [];
  // for (let index = 0; index < courses.length; index++) {
  //   const course = courses[index];
  //   let isMatch = true;
  //   for (const key in query) {
  //     if (query[key as keyof Query] !== undefined) {
  //       if (course[key as keyof Courses] !== query[key as keyof Query]) {
  //         isMatch = false;
  //         break;
  //       }
  //     }
  //   }
  //   if (isMatch) {
  //     Matchoingcourse.push(course);
  //   }
  // }
  // return Matchoingcourse;
  return courses.filter(course =>
    Object.entries(query).every(
      ([key, value]) => course[key as keyof Courses] === value
    )
  );
}
