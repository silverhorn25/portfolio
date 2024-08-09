import React from "react";
import { FloatingButton } from "../common/floating-button";

export const Skills: React.FC = () => {
  return (
    <>
      <div className="w-full md:container md:mx-auto h-screen bg-gray-100 flex flex-col items-center gap-4 p-4 bg-black bg-opacity-8 dark:bg-dark-grey">
        <h1 className="font-bold text-2xl dark:text-gray-100">
          Languages Experience
        </h1>
        <div className="ml-10 mt-5 bottom-in">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <a
              href="https://spring.io/projects/spring-boot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/spring.png"
                alt=""
              />
            </a>

            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 dark:border-gray-900">
                Java Springboot
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I have substantial experience with Spring for backend
                development.I implemented core functionalities such as CRUD
                operations, API security management, and robust file
                structuring. Additionally, I developed log rotation mechanisms
                to ensure efficient logging and monitoring
              </p>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-5 bottom-in">
          <div className="w-full h-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <a
              href="https://www.typescriptlang.org/docs/handbook/react.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/react-ts.jpg"
                alt=""
              />
            </a>

            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 dark:border-gray-900">
                React Typescript
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I have extensive experience with React and TypeScript for
                frontend development, where I have designed and implemented user
                interfaces using Ant Design. My work includes creating reusable
                components and functions that enhance both the functionality.
              </p>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-5 bottom-in">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <a
              href="https://www.electronjs.org/docs/latest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/electron.png"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 dark:border-gray-900">
                Electron
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I have extensive experience with Electron, where I developed
                desktop applications for our Point of Sale (POS) system. These
                applications are deployed across various environments, including
                dining restaurants, boutiques, and other commercial settings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:container md:mx-auto h-screen bg-gray-100 flex flex-col items-center gap-4 p-4 bg-black bg-opacity-8 dark:bg-dark-grey">
        <h1 className="font-bold text-2xl dark:text-gray-100 mt-10">
          Tools Experience
        </h1>
        <div className="ml-10 mt-5 bottom-in">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <a
              href="https://www.mysql.com/products/workbench/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/sql.png"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 dark:border-gray-900">
                MySQL Workbench
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We use MySQL as our primary database management system for web
                applications. MySQL provides robust performance, reliability,
                and ease of use, making it ideal for handling complex queries
                and large datasets. Its support for transactional operations and
                high availability features ensures that our web applications run
                smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-5 bottom-in">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <a
              href="https://www.postman.com/product/what-is-postman/#:~:text=Postman%20is%20an%20API%20platform,can%20create%20better%20APIs%E2%80%94faster."
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/postman.png"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 dark:border-gray-900">
                Postman
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We utilize Postman as a powerful tool for both frontend and
                backend development. For the frontend, Postman helps us test and
                debug API endpoints, ensuring seamless integration with our user
                interface. On the backend, it allows us to simulate various
                request scenarios, validate responses, and monitor the
                performance of our API.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
    </>
  );
};
