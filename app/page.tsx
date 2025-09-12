import { Navigation, Footer } from '../src/shared/ui';
import { HomePageLayout } from '../src';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HomePageLayout />
      <Footer />
    </div>
  );
}
