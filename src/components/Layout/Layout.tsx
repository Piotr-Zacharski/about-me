import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";


export default function Layout({ children }: any) {
    return (
        <>
            <Nav />
            <div>{children}</div>
            <Footer />
        </>
    )
}