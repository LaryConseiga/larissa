import Navbar from "../../component/navbar";
import Footer from "../../component/footer";

export default function TopLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
