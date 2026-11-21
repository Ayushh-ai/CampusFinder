import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WishlistProvider } from '@/lib/wishlist-context';

export const metadata = {
  title: { default: 'CampusFinder | Discover colleges in India', template: '%s | CampusFinder' },
  description: 'Explore colleges, compare courses and fees, and save your favourite institutions with CampusFinder.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><WishlistProvider><Header/><main>{children}</main><Footer/></WishlistProvider></body></html>;
}
