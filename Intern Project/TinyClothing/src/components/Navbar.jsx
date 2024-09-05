import weblogo  from '/tinyclologo.png';

const Navbar = () => {
    return (
      <>
      <p className='py-3 bg-red-400 text-white text-center font-semibold text-base'>TRY RENTING WITH 50% OFF YPUR FIRST TWO MONTHS 💚 EASILY SAVE MONEY WHILST CREATING A SUSTAINABLE WORDROBE🌍</p>
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <div className="flex items-center">
          <img src={weblogo} alt="TinyClo" className="h-12" />
          <h1 className="text-2xl font-bold ml-2">TinyClo</h1>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">Why Rent?</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">Clean Out Closet</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">About Us</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">Store</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">Contact Us</a></li>
        </ul>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">Login/Sign Up</button>
      </nav>
      </>
      
    );
  };

  export default Navbar;