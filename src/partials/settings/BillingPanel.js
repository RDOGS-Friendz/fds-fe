import React from 'react';

function BillingPanel() {
  return (
    <div className="flex-grow">

      {/* Panel body */}
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl text-gray-800 font-bold mb-4">Billing & Invoices</h2>
          <div className="text-sm">This workspace’s Basic Plan is set to <strong className="font-medium">$34</strong> per month and will renew on <strong className="font-medium">July 9, 2021</strong>.</div>
        </div>

        {/* Billing Information */}
        <section>
          <h3 className="text-xl leading-snug text-gray-800 font-bold mb-1">Billing Information</h3>
          <ul>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-gray-200">
              {/* Left */}
              <div className="text-sm text-gray-800 font-medium">Payment Method</div>
              {/* Right */}
              <div className="text-sm text-gray-800ml-4">
                <span className="mr-3">Mastercard ending 9282</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Edit</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-gray-200">
              {/* Left */}
              <div className="text-sm text-gray-800 font-medium">Billing Interval</div>
              {/* Right */}
              <div className="text-sm text-gray-800ml-4">
                <span className="mr-3">Annually</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Edit</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-gray-200">
              {/* Left */}
              <div className="text-sm text-gray-800 font-medium">VAT/GST Number</div>
              {/* Right */}
              <div className="text-sm text-gray-800ml-4">
                <span className="mr-3">UK849700927</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Edit</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-gray-200">
              {/* Left */}
              <div className="text-sm text-gray-800 font-medium">Your Address</div>
              {/* Right */}
              <div className="text-sm text-gray-800ml-4">
                <span className="mr-3">34 Savoy Street, London, UK, 24E8X</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Edit</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-gray-200">
              {/* Left */}
              <div className="text-sm text-gray-800 font-medium">Billing Address</div>
              {/* Right */}
              <div className="text-sm text-gray-800ml-4">
                <span className="mr-3">hello@cruip.com</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Edit</a>
              </div>
            </li>
          </ul>
        </section>

        {/* Invoices */}
        <section>
          <h3 className="text-xl leading-snug text-gray-800 font-bold mb-1">Invoices</h3>
          {/* Table */}
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400">
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap">
                <th className="w-full block md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Year</div>
                </th>
                <th className="w-full hidden md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Plan</div>
                </th>
                <th className="w-full hidden md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Amount</div>
                </th>
                <th className="w-full hidden md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-right"></div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm">
              {/* Row */}
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-gray-200 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-gray-800">2021</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Basic Plan - Annualy</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium">$349.00</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-right flex items-center md:justify-end">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">HTML</a>
                    <span className="block w-px h-4 bg-gray-200 mx-2" aria-hidden="true"></span>
                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">PDF</a>
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-gray-200 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-gray-800">2020</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Basic Plan - Annualy</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium">$349.00</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-right flex items-center md:justify-end">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">HTML</a>
                    <span className="block w-px h-4 bg-gray-200 mx-2" aria-hidden="true"></span>
                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">PDF</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-gray-200">
          <div className="flex self-end">
            <button className="btn border-gray-200 hover:border-gray-300 text-gray-600">Cancel</button>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default BillingPanel;