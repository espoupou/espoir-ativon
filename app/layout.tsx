import './styles/globals.css';

export const metadata = {
  title: 'Kokou Espoir ATIVON',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
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
