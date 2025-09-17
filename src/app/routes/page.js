import { auth } from '@/auth/auth';

export const metadata = {
  title: "Bus routes",
  description: "Bus routes page",
};

export default async function Routes() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>

  return (
    <div>
      <h1>Bus routes</h1>
    </div>

  );
}
