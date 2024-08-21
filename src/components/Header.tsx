import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-bold text-xl">MyLogo</span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Menu Items */}
        <nav className="flex space-x-4">
          <Link href="/">
            <a className="text-gray-700 hover:text-blue-500">Home</a>
          </Link>
          <Link href="/product">
            <a className="text-gray-700 hover:text-blue-500">Product</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700 hover:text-blue-500">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-700 hover:text-blue-500">Contact Us</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
