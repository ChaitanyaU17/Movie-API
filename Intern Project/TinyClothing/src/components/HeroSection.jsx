import outfit from '/outfit3.jpg';

const HeroSection = () => {
    return (
      <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1), rgba(0,0,0,.2)), url(${outfit})`,
        backgroundPosition: "0% 30%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      
       className="bg-yellow-50 py-28"
    >
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-black bg-white p-2 rounded-md text-red-500 mb-4">BABIES GROW FAST</h1>
            <p className="text-xl font-bold text-yellow-400 p-1 bg-white rounded-md mb-6">Simplify Your Life with Our </p>
            <button className='bg-red-500 text-white font-semibold rounded-md text-xl mb-3 p-2 hover:scale-95 transition-transform duration-300'>TinyClo Subscription</button>
            <div className="space-x-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:scale-95 transition-transform duration-300">How it works?</button>
              <button className="bg-yellow-400 text-white px-6 py-3 rounded-md hover:scale-95 transition-transform duration-300">Start Membership</button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;