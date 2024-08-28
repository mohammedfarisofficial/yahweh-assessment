export const POST = async (request: Request) => {
  console.log("post route");
  //   const { title, university_id } = await request.json();
  //   if (!title || !university_id) {
  //     return new NextResponse("Title and University id are required!", {
  //       status: 400,
  //     });
  //   }
  //   try {
  //     await connect();
  //     // gen slug
  //     const slug = await generateUniqueSlug(Course, title);
  //     if (!slug) {
  //       return new NextResponse("Can't generate slug!", { status: 404 });
  //     }
  //     const newCourse = new Course({ slug, title, university_id });
  //     const courseSaved = await newCourse.save();
  //     if (courseSaved) {
  //       return new NextResponse(courseSaved, { status: 201 });
  //     }
  //     return new NextResponse("Can't create course!", { status: 404 });
  //   } catch (err) {
  //     console.log(err);
  //     return new NextResponse(`Error: ${err.message}`, { status: 404 });
  //   }
};

export const GET = async () => {
  console.log("get route");
};
