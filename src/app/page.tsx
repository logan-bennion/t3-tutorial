import { db } from "~/server/db";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images(){    
  const images = await db.query.iamges.findMany({
  orderBy: (model, { desc }) => desc(model.id)
});
  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) =>(
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url} />
              <div>{image.name}</div>
      </div>
      ))}
    </div>
  );
}

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
