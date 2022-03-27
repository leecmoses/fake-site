import Link from "next/link";

function Footer() {
  return (
    <footer className="mx-6 my-24 sm:mx-24">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 mb-20">
        <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2">
          <h3 className="text-reddish font-semibold">Fakesite</h3>
          <ul className="">
            <li className="">
              <Link href="/about">
                <a className="text-blueish hover:text-blackish delay-100">
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/press">
                <a className="text-blueish hover:text-blackish delay-100">
                  Press
                </a>
              </Link>
            </li>
            <li>
              <Link href="/policies">
                <a className="text-blueish hover:text-blackish delay-100">
                  Policies
                </a>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <a className="text-blueish hover:text-blackish delay-100">
                  Help
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2">
          <h3 className="text-reddish font-semibold">Account</h3>
          <ul className="">
            <li className="">
              <a href="#" className="text-blueish hover:text-blackish">
                Edit Profile
              </a>
            </li>
            <li>
              <a href="#" className="text-blueish hover:text-blackish">
                Friends
              </a>
            </li>
            <li>
              <a href="#" className="text-blueish hover:text-blackish">
                Social
              </a>
            </li>
            <li>
              <a href="#" className="text-blueish hover:text-blackish">
                Delete Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="">
            <img src="/img/logo.png" className="" alt="fakesite logo" />
          </a>
        </Link>
        <ul className="flex flex-wrap items-center">
          <li>
            <a
              href="#"
              className="mr-4 text-blueish hover:text-blackish delay-100 md:mr-6 "
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-blueish hover:text-blackish delay-100 md:mr-6"
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-blueish hover:text-blackish delay-100 md:mr-6 "
            >
              Site Map
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
