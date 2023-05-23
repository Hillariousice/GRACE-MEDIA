import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request) {
    const { searchParam } = new URL(request.url);
   const query = searchParam.get('query');
   const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLowerCase());
    });
    return NextResponse.json(courses);
  }