import React from 'react';
import { Link } from 'react-router-dom';

function CampaignCard(props) {

  const typeColor = (type) => {
    switch (type) {
      case 'One-Time':
        return 'bg-green-100 text-green-600';
      case 'At Risk':
        return 'bg-yellow-100 text-yellow-600';
      case 'Off-Track':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };

  const categoryIcon = (category) => {
    switch (category) {
      case '1':
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-500">
            <svg className="w-9 h-9 fill-current text-red-50" viewBox="0 0 36 36">
              <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
            </svg>
          </div>
        );
      case '2':
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-green-500">
            <svg className="w-9 h-9 fill-current text-green-50" viewBox="0 0 36 36">
              <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
            </svg>
          </div>
        );
      case '3':
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-light-blue-500">
            <svg className="w-9 h-9 fill-current text-light-blue-50" viewBox="0 0 36 36">
              <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
            </svg>
          </div>
        );
      case '4':
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-indigo-500">
            <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36">
              <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </svg>
          </div>
        );
      default:
        return (<div></div>);
    }
  };

  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="flex flex-col h-full p-5">
        <header>
          <div className="flex items-center justify-between">
            {categoryIcon(props.category)}
            <div className="flex flex-shrink-0 -space-x-3 -ml-px">
              {
                props.members.map(member => {
                  return (
                    <Link key={member.name} className="block" to={member.link}>
                      <img className="rounded-full border-2 border-white box-content" src={member.image} width="28" height="28" alt={member.name} />
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </header>
        <div className="flex-grow mt-2">
          <a className="inline-flex text-gray-800 hover:text-gray-900 mb-1" href={props.link}>
            <h2 className="text-xl font-semibold">{props.title}</h2>
          </a>
          <div className="text-sm">{props.content}</div>
        </div>
        <footer className="mt-5">
          <div className="text-sm font-medium text-gray-500 mb-2">{props.dates.from} <span className="text-gray-400">-&gt;</span> {props.dates.to}</div>
          <div className="flex justify-between items-center">
            <div>
              <div className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 ${typeColor(props.type)}`}>{props.type}</div>
            </div>
            <div>
              <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600" to={props.link}>View -&gt;</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CampaignCard;
