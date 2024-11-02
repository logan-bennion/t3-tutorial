import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      <h1>Hello World</h1>
    </main>
  );
}
