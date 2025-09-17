import { auth } from '@/auth/auth';

export const metadata = {
  title: "Starlink",
  description: "Starlink on bus page",
};

export default async function Starlink() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>
  return (
    <div>
      <h1>Starlink on bus</h1>
    </div>

  );
}
