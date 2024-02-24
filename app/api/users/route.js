// export const GET = async (request) => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//       cache: "no-store",
//     });

//     return res.json();
//   } catch (err) {
//     return new NextResponse("Error fetching Data", { status: 500 });
//   }
// };


// pages/api/users.js

export default async function handler(req, res) {
    try {
      const apiResponse = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
      });
  
      if (!apiResponse.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const data = await apiResponse.json();
  
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  