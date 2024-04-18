import { Background } from '../ui/layout/Background';
import { Navbar } from '../ui/layout/Navbar';
import { NavbarMovil } from '../ui/layout/NavbarMovil ';
import AccessibilityComponent from '../ui/layout/Accesibility';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <header>
        <Background />
      </header>
      <NavbarMovil />
      <div className="flex">
        <Navbar />
        {children}
      </div>
      <footer>
        <AccessibilityComponent />
      </footer>
    </section>
  );
}
