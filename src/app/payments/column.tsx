'use client';
import type { Payment } from '@/lib/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'amount',
    header: () => <div className='text-right'>{'Amount'}</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formated = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);

      return <div className='text-right font-medium'>{formated}</div>;
    }
  }
];
