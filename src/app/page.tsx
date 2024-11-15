import { db } from "~/server/db";
import Image from "next/image";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/Or0gSLzxIRbKsuvxVlEY58GZdHxkeUMqvOF0urVihWyXpPaz",
  "https://utfs.io/f/Or0gSLzxIRbK0WVxXY2ysWlmL9tq2eRFxXJUDkpjvHaf3VZC",
  "https://utfs.io/f/Or0gSLzxIRbKx02J15ZIsHTUj6pQLKnobDOCScdmNF1AMrG2",
  "https://utfs.io/f/Or0gSLzxIRbKeSjX6658oN9RPyF4lOahUA8vtKBk0b5GLYID",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}> {post.name} </div>
        ))}
        {mockImages.map((image, index) => (
          <div key={image.id + "-"+ index} className="w-48">
            <Image 
              src={image.url}
              alt="image"
              width={192}
              height={192}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <h1>Hello World</h1>
    </main>
  );
}
