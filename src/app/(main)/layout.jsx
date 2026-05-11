import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout = ({ children }) => {
    return (
        <div>
            <header className="w-11/12 lg:w-10/12 mx-auto">
                <Header/>
            </header>
            <section>
                <Banner/>
            </section>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;