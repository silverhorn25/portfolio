import moment from "moment";

export const Footer = () => {
  const year = moment().format("YYYY");
  return (
    <div className="w-full h-5/6 bg-gray-800 flex flex-col justify-center items-center dark:bg-primary-grey">
      <div className="flex flex-row items-center">
        <div className="justify-center">
          <h1 className="text-gray-100 font-bold text-4xl self-start">Get</h1>
          <h1 className="text-gray-100 font-bold text-4xl self-start">in</h1>
          <h1 className="text-gray-100 font-bold text-4xl self-start">Touch</h1>
        </div>
        <div className="flex flex-col items-center w-full mt-2 space-y-4 ml-40">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=imjetrodev@gmail.com&su=Portfolio Viewer&body=BODY"
            className="flex items-center space-x-2"
          >
            <svg
              className="w-6 h-6 text-gray-800 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"
              />
            </svg>
            <p className="text-gray-100">Gmail</p>
          </a>
          <a
            href="https://www.linkedin.com/in/jetro-verdida-9b009214b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="flex items-center space-x-2"
          >
            <svg
              className="w-6 h-6 text-gray-800 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clip-rule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
            <p className="text-gray-100">LinkedIn</p>
          </a>
          <a
            href="https://discordapp.com/users/1231171854912454733"
            className="flex items-center space-x-2"
          >
            <svg
              className="w-6 h-6 text-gray-800 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <p className="text-gray-100">Discord</p>
          </a>
          <a href="https://github.com/silverhorn25" className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gray-800 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"    
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.317-6.955 10.318 10.318 0 0 0-3.393-6.17A9.847 9.847 0 0 0 12.006 2Z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="text-gray-100">GitHub</p>
          </a>
        </div>
      </div>

      <h1 className="text-gray-100 text-lg mt-10 mb-5">
        Silverhorn's Portfolio | Alrights Reserved <span>{year}</span>
      </h1>
    </div>
  );
};
