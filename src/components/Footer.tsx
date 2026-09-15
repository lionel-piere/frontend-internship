interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} {name}. Built for Frontend Internship Days 1-2.
        </p>
      </div>
    </footer>
  );
}
