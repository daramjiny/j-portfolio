import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { Experience } from "@/app/components/Experience";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
