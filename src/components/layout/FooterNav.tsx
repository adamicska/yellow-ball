import { Footer } from "flowbite-react";

export default function FooterNav() {
  return (
    <div className="w-full">
      <Footer container>
        <Footer.Copyright href="#" by="YellowBall" year={2024} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
}
