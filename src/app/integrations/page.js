import { auth } from '@/auth/auth';

export const metadata = {
  title: "Integrations",
  description: "Integrations table page",
};

export default async function Integrations() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>
  return (
    <div>
      <h1>Result table with all data. Bus,Routes,Starlink in bus</h1>
    </div>

  );
}
