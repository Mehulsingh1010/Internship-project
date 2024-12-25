import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        <div className='mt-[40px]'> {children} </div>
      </body>
    </html>
  );
}
