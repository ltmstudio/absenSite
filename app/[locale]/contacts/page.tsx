import { Navigation, Footer } from '../../../src/shared/ui';
import { ContactsPageLayout } from '../../../src';

export default function Contacts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <ContactsPageLayout />
      <Footer />
    </div>
  );
}