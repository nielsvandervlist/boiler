// app/layout.js
import './globals.css'
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function RootLayout({children, session}) {
    return (
        <html lang="en">
        <body>
        <main className={'min-h-[100vh] flex flex-col'}>
            <SessionProviderWrapper session={session}>
                <Navbar/>
                <Container>
                    {children}
                </Container>
            </SessionProviderWrapper>
            <Footer/>
        </main>
        </body>
        </html>
    );
}
