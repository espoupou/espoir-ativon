import './styles/globals.css';

export const metadata = {
  title: 'ONEOF - Boss Overcoming',
  description: 'Portfolio de sbi7i',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
