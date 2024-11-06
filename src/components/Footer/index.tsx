import Link from "next/link";
import { contacts, social } from "@/mock/footer";
import NavList from "@/components/NavList";

const Footer = () => {
  return (
    <footer className="bg-stone-900">
      <div className="container mx-auto flex max-w-screen-2xl flex-col px-1 py-8 text-stone-200 md:px-2 lg:px-4 xl:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Contacts</p>
            <div className="flex flex-col gap-1">
              <div>
                <p>
                  Email:
                  <Link
                    href={`mailto:${contacts.email}`}
                    target="_blank"
                    className="ml-1 underline"
                  >
                    {contacts.email}
                  </Link>
                </p>
              </div>
              <div>
                <p>
                  Address:
                  <span className="ml-1">{contacts.address}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Navigation</p>
            <div className="flex flex-col gap-1">
              <NavList />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl font-semibold">Social Links</p>
            <div className="flex flex-col gap-1">
              {social.map(({ label, href }, idx: number) => (
                <Link
                  key={idx}
                  href={href}
                  className="transition-all duration-150 hover:text-sky-500"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">All rights reserved ©</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
