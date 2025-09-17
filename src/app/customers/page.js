import { auth } from '@/auth/auth';

export const metadata = {
  title: "Customers",
  description: "Customers which connected to Starlink in a bus page",
};

export default async function Customers() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>
  return (
    <div>
      <h1>Customers which connected to Starlink in a bus</h1>
    </div>

  );
}
