import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Better Auth Next.js
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A starter project for authentication in Next.js using TypeScript,
          Tailwind CSS, and a PostgreSQL database.
        </p>
      </main>
    </div>
  );
}
