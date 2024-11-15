import { db } from "~/server/db";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.iamges.findMany();

  console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) =>(
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
            </div>
        ))}
      </div>
      <h1>Hello World</h1>
    </main>
  );
}
