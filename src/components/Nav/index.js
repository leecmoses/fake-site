import Link from "next/link";

function Nav() {
  return (
    <nav className="absolute w-full py-4">
      <ul className="items-center grid grid-cols-12">
        <li className="col-span-2 justify-self-center">
          <Link href="/">
            <a className="">
              <img src="/img/logo.png" alt="fakesite logo" />
            </a>
          </Link>
        </li>
        <li className="col-span-8 justify-self-end">
          <Link href="/account">
            <a className="text-white hover:text-blackish delay-100 mx-6">
              Account
            </a>
          </Link>

          <Link href="/help">
            <a className="text-white hover:text-blackish delay-100 mx-6">
              Help
            </a>
          </Link>
        </li>

        <li className="col-span-2 justify-self-center">
          <Link href="/account">
            <img
              className="rounded-full w-16 h-16 border-2 border-solid border-white hover:border-blackish cursor-pointer"
              src="/img/avatar.png"
            />
          </Link>
        </li>
      </ul>

      <style jsx>{``}</style>
    </nav>
  );
}

export default Nav;
