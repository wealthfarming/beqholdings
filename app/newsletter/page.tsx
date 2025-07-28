import NewsletterComponent from "@/components/NewsletterComponent";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NewsletterPage() {
  return (
    <div className="mx-auto px-4">
      <div className="w-full flex relative">
            <div className="w-full flex flex-col items-center justify-center absolute top-0 z-20 mt-5">
                <Header />
            </div>
        </div>
      <NewsletterComponent />
      <Footer />
      <div className="h-16"></div>
    </div>
  );
}