export const GET = async (request) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });

    return res.json();
  } catch (err) {
    return new NextResponse("Error fetching Data", { status: 500 });
  }
};