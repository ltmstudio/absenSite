import { Navigation, Footer } from '../../src/shared/ui';
import { AboutPageLayout } from '../../src/presentation/pages/AboutPageLayout';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <AboutPageLayout />
      <Footer />
    </div>
  );
}
