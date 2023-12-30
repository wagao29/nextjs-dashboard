import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { lusitana } from '@/app/ui/fonts';
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import { Suspense } from 'react';
import CardWrapper from '../../ui/dashboard/cards';
import LatestInvoices from '../../ui/dashboard/latest-invoices';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          {/* @ts-expect-error */}
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          {/* @ts-expect-error */}
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          {/* @ts-expect-error */}
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
