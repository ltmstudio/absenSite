import { Navigation, Footer } from '../../../src/shared/ui';
import { LocalizedAboutPageLayout } from '../../../src';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <LocalizedAboutPageLayout />
      <Footer />
    </div>
  );
}