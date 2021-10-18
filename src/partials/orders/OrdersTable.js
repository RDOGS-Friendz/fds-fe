import React, { useState, useEffect } from 'react';
import { focusHandling } from 'cruip-js-toolkit';
import Orders from './OrdersTableItem';

import Image01 from '../../images/icon-01.svg';
import Image02 from '../../images/icon-02.svg';
import Image03 from '../../images/icon-03.svg';

function OrdersTable({
  selectedItems,
}) {
  const orders = [
    {
      id: '0',
      image: Image01,
      order: '#123567',
      date: '22/01/2021',
      customer: 'Patricia Semklo',
      total: '$129.00',
      status: 'Refunded',
      items: '1',
      location: '🇨🇳 Shanghai, CN',
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '1',
      image: Image01,
      order: '#779912',
      date: '22/01/2021',
      customer: 'Dominik Lamakani',
      total: '$89.00',
      status: 'Approved',
      items: '2',
      location: '🇲🇽 Mexico City, MX',
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '2',
      image: Image02,
      order: '#889924',
      date: '22/01/2021',
      customer: 'Ivan Mesaros',
      total: '$89.00',
      status: 'Approved',
      items: '2',
      location: '🇮🇹 Milan, IT',
      type: 'One-time',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '3',
      image: Image01,
      order: '#897726',
      date: '22/01/2021',
      customer: 'Maria Martinez',
      total: '$59.00',
      status: 'Pending',
      items: '1',
      location: '🇮🇹 Bologna, IT',
      type: 'One-time',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '4',
      image: Image03,
      order: '#123567',
      date: '22/01/2021',
      customer: 'Vicky Jung',
      total: '$39.00',
      status: 'Refunded',
      items: '1',
      location: '🇬🇧 London, UK',
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '5',
      image: Image01,
      order: '#896644',
      date: '21/01/2021',
      customer: 'Tisho Yanchev',
      total: '$59.00',
      status: 'Approved',
      items: '1',
      location: '🇫🇷 Paris, FR',
      type: 'One-time',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '6',
      image: Image03,
      order: '#136988',
      date: '21/01/2021',
      customer: 'James Cameron',
      total: '$89.00',
      status: 'Approved',
      items: '1',
      location: '🇫🇷 Marseille, FR',
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '7',
      image: Image03,
      order: '#442206',
      date: '21/01/2021',
      customer: 'Haruki Masuno',
      total: '$129.00',
      status: 'Approved',
      items: '2',
      location: '🇺🇸 New York, USA',
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '8',
      image: Image02,
      order: '#764321',
      date: '21/01/2021',
      customer: 'Joe Huang',
      total: '$89.00',
      status: 'Pending',
      items: '2',
      location: '🇨🇳 Shanghai, CN',
      type: 'One-time',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '9',
      image: Image01,
      order: '#908764',
      date: '21/01/2021',
      customer: 'Carolyn McNeail',
      total: '$59.00',
      status: 'Refunded',
      items: '1',
      location: '🇬🇧 Sheffield, UK',
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(orders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    focusHandling('outline');
  }, [list]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map((li) => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  return (
    <div className="bg-white shadow-lg rounded-sm border border-gray-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800">
          All Orders
          <span className="text-gray-400 font-medium">442</span>
        </h2>
      </header>
      <div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full divide-y divide-gray-200">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-500 bg-gray-50 border-t border-gray-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Order</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Customer</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Total</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Items</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Location</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Payment type</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="sr-only">Menu</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            {
              list.map((order) => (
                <Orders
                  key={order.id}
                  id={order.id}
                  image={order.image}
                  order={order.order}
                  date={order.date}
                  customer={order.customer}
                  total={order.total}
                  status={order.status}
                  items={order.items}
                  location={order.location}
                  type={order.type}
                  description={order.description}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(order.id)}
                />
              ))
            }
          </table>

        </div>
      </div>
    </div>
  );
}

export default OrdersTable;
