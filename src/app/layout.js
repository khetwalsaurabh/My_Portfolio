import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Toaster position="top-right" />
        <Header />
        
          {children}
        <Footer />
        
      </body>
    </html>
  );
}
