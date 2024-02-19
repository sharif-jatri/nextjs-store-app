import Link from "next/link";

export default function HomePage() {
  return (
      <div>
          <h1 className='text-5xl mb-8 font-bold'>Store App</h1>
          <Link href='/client' className='btn btn-accent'>
              get started
          </Link>
      </div>
  );
}
