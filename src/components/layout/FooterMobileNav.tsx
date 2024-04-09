import { Footer } from "flowbite-react";

export default function FooterMobileNav() {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <Footer container>
        <Footer.LinkGroup>
          <Footer.Link href="#">Feed</Footer.Link>
          <Footer.Link href="#">Profile</Footer.Link>
          <Footer.Link href="#">Search</Footer.Link>
          <Footer.Link href="#">Stats</Footer.Link>
          <Footer.Link href="#">Chat</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
}
