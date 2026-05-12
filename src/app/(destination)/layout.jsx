import Footer from "@/components/Footer";
import Header from "@/components/Header";

const DestinationLayout = ({ children }) => {
    return (
        <div>
            <header className="w-11/12 lg:w-10/12 mx-auto">
                <Header/>
            </header>
            <main className="w-11/12 lg:w-10/12 mx-auto">
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default DestinationLayout;