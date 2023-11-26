import { SideNav } from '@/components/side-nav';

export default function Home({
  searchParams,
}: {
  searchParams?: { limit?: string };
}) {
  const limit = Number(searchParams?.limit) || 5;

  return (
    <div className=' flex h-full items-center bg-white'>
      <SideNav limit={limit} />
    </div>
  );
}
