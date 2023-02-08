import { Link } from 'react-router-dom';

function HomeNavbar() {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-xl font-medium text-white">My App</Link>
        <div className="flex items-center">
          <Link to="/" className="text-lg mr-6 text-white hover:text-gray-300">Home</Link>
          <Link to="/eventList" className="text-lg mr-6 text-white hover:text-gray-300">Event List</Link>
          <Link to="/" className="text-lg text-white hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar
