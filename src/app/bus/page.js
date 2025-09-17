import BusModal from '@/components/UI/modals/bus.modal';
import BusTable from '@/components/UI/tables/bus.table';
import { auth } from '@/auth/auth';

export const metadata = {
  title: "Bus",
  description: "Bus page",
};

export default async function Bus() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>

  return (
    <div>
      <BusModal />
      <div className="flex justify-center w-full p-8 overflow-x-auto">
        <BusTable />
      </div>

    </div>

  );
}
