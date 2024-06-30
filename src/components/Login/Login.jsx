import React from 'react';

const LoginPage = () => {
  return (
    <div className="relative w-full h-full p-6  flex items-center justify-end rounded-xl overflow-hidden bg-custom-dark-gray bg-opacity-15">
      <div className="max-w-xl w-full bg-black bg-opacity-45 rounded-2xl shadow-md p-16 mr-10  h-[80%] flex flex-col justify-center relative z-10">
        <h2 className="text-5xl tracking-widest text-white font-bold text-center mb-4 font-fjalla">WELCOME BACK</h2>
        <p className="text-center text-white text-lato mb-8">SIGN IN TO SEE IF EVERYTHING IS ALL RIGHT</p>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-custom-dark-gray focus:ring-opacity-35"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="ENTER YOUR PASSWORD"
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-custom-dark-gray focus:ring-opacity-35"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-b from-custom-green to-custom-light-gray text-black font-Beba text-xl py-2 rounded-full hover:border hover:border-black hover:border-opacity-10 hover:from-custom-green hover:drop-shadow-md transition duration-300"
            >
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
