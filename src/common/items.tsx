import React from "react";

export const Item1: React.FC = () => (
  <div className="w-full h-80 items-center bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 mt-40 dark:bg-primary-grey">
    <div className="flex flex-col justify-between p-4 leading-normal dark:bg-primary-grey">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Back-End Development
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        In back-end development, I contributed to the project codebase by
        implementing a Security Filter Chain to handle API access. Additionally,
        I created a log rotation system that generates files to log process
        errors and saves them to a specific directory. I also developed CRUD
        functionality for an assigned module and used cross-origin methods to
        connect the front-end, handling responses to display output.
        Furthermore, I provided the file structure for our project codebase and
        contribute some common functionalities
      </p>
    </div>
  </div>
);

export const Item2: React.FC = () => (
  <div className="w-full h-80 items-center bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 mt-40 dark:bg-primary-grey">
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Front-End Development
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        In front-end development, I have experience handling backend responses
        and displaying them in the front-end. Additionally, I have experience
        designing UIs using the Ant Design framework and integrating custom
        designs into assigned modules. For testing API responses from both the
        frontend and backend, I use Postman to create, send, and monitor
        requests. Postman allows me to ensure that the APIs are functioning
        correctly, manage and store collections of API calls, and automate tests
        to verify that responses meet expected outcomes.
      </p>
    </div>
  </div>
);

export const Item3: React.FC = () => (
  <div className="w-full h-80 items-center bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 mt-40 dark:bg-primary-grey">
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Desktop Application Development
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        I had the opportunity to contribute to the development of a desktop
        application, where I created several common functionalities. I was
        responsible for implementing data reports for sales and working on
        hardware modules. This included functionalities for printing receipts
        and opening the cash drawer. Additionally, I constructed transaction
        receipts and developed features for sending receipts via email.
      </p>
    </div>
  </div>
);

export const Item4: React.FC = () => (
  <div className="w-full h-80 items-center bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 mt-40 dark:bg-primary-grey">
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Team Contribution
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        As a member of our project team, I actively shared ideas and contributed
        to collaborative discussions. I also assisted in reviewing my teammates'
        code to ensure quality and consistency. Additionally, we worked together
        to address client issues promptly and effectively, ensuring a high level
        of client satisfaction and project success
      </p>
    </div>
  </div>
);

export const H1: React.FC = () => (
  <div className="relative w-full h-80 bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="absolute inset-0">
      <img
        src="/h1.jpg"
        alt="Profile"
        className="w-full h-full object-cover opacity-75"
      />
    </div>
    <div className="relative flex flex-col justify-between p-4 leading-normal">
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-black text-white py-2 text-center w-full">
        Login Page
      </p>
    </div>
  </div>
);

export const H2: React.FC = () => (
  <div className="relative w-full h-80 bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="absolute inset-0">
      <img
        src="/h2.jpg"
        alt="Profile"
        className="w-full h-full object-cover opacity-75"
      />
    </div>
    <div className="relative flex flex-col justify-between p-4 leading-normal">
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-black text-white py-2 text-center w-full">
        Dashboard
      </p>
    </div>
  </div>
);

export const H3: React.FC = () => (
  <div className="relative w-full h-80 bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="absolute inset-0">
      <img
        src="/h3.jpg"
        alt="Profile"
        className="w-full h-full object-cover opacity-75"
      />
    </div>
    <div className="relative flex flex-col justify-between p-4 leading-normal">
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-black text-white py-2 text-center w-full">
        Product List
      </p>
    </div>
  </div>
);

// different screen
export const T1: React.FC = () => (
  <div className="relative w-full h-80 bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="absolute inset-0">
      <img
        src="/t1.jpg"
        alt="Profile"
        className="w-full h-full object-cover opacity-75"
      />
    </div>
    <div className="relative flex flex-col justify-between p-4 leading-normal">
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-black text-white py-2 text-center w-full">
        Login Screen
      </p>
    </div>
  </div>
);

export const T2: React.FC = () => (
  <div className="relative w-full h-80 bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="absolute inset-0">
      <img
        src="/t2.jpg"
        alt="Profile"
        className="w-full h-full object-cover opacity-75"
      />
    </div>
    <div className="relative flex flex-col justify-between p-4 leading-normal">
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-black text-white py-2 text-center w-full">
        Main Screen
      </p>
    </div>
  </div>
);

export const T3: React.FC = () => (
  <div className="relative w-full h-80 bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="absolute inset-0">
      <img
        src="/t3.jpg"
        alt="Profile"
        className="w-full h-full object-cover opacity-75"
      />
    </div>
    <div className="relative flex flex-col justify-between p-4 leading-normal">
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-black text-white py-2 text-center w-full">
        Option Screen
      </p>
    </div>
  </div>
);

export const P1: React.FC = () => (
  <div className="relative w-full h-80 bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="absolute inset-0">
      <img
        src="/p1.jpg"
        alt="Profile"
        className="w-full h-full object-cover dark:opacity-75"
      />
    </div>
    <div className="relative flex flex-col justify-between p-4 leading-normal">
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-black text-white py-2 text-center w-full">
        Home Screen
      </p>
    </div>
  </div>
);

export const P2: React.FC = () => (
  <div className="relative w-full h-80 bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="absolute inset-0">
      <img
        src="/p2.jpg"
        alt="Profile"
        className="w-full h-full object-cover dark:opacity-75"
      />
    </div>
    <div className="relative flex flex-col justify-between p-4 leading-normal">
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-black text-white py-2 text-center w-full">
        Experienced Project
      </p>
    </div>
  </div>
);

export const P3: React.FC = () => (
  <div className="relative w-full h-80 bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="absolute inset-0">
      <img
        src="/p3.jpg"
        alt="Profile"
        className="w-full h-full object-cover dark:opacity-75"
      />
    </div>
    <div className="relative flex flex-col justify-between p-4 leading-normal">
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 bg-black text-white py-2 text-center w-full">
        Tools and Languages
      </p>
    </div>
  </div>
);
