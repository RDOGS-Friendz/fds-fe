import React from 'react';
import Icons from '../icons';
import DashboardCard from '../partials/DashboardCard';

function Dashboard() {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

        {/* Dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Dashboard 🚗</h1>
          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

            <button type="button" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
              <Icons.Add />
              <span className="hidden xs:block ml-2">Add Event</span>
            </button>
          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          <DashboardCard title="Events You May Like">Hi</DashboardCard>
        </div>

      </div>
    </main>
  );
}

export default Dashboard;
