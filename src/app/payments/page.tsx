import { DataTable } from '@/components/common/Table/DataTable';
import type { Payment } from '@/lib/types';
import React from 'react';
import { columns } from './column';

const Payment = () => {
  const data = getData();
  return (
    <DataTable
      data={data}
      columns={columns}
    />
  );
};

export default Payment;

function getData(): Payment[] {
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com'
    }
  ];
}
