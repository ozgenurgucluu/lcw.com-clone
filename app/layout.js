import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default async function RootLayout({ children }) {
  let categories = await fetch("http://localhost:3001/categories").then((res) =>
    res.json()
  );

  return (
    <html lang="en">
      <body>
        <Header categories={categories} />

        <main className="flex-1"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
