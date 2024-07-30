// app/layout.js
'use client'
import './globals.css'
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import {usePathname} from 'next/navigation';
import {AnimatePresence, motion} from 'framer-motion';

export default function RootLayout({children, session}) {
    const pathname = usePathname();

    return (
        <html lang="en">
        <body>
        <main className={'min-h-[100vh] flex flex-col'}>
            <SessionProviderWrapper session={session}>
                <Navbar/>
                <AnimatePresence mode={"wait"}>
                    <motion.div
                        key={pathname}
                        initial={{opacity: 0, rotate: 10, scale: 0.8}}
                        animate={{opacity: 1, rotate: 0, scale: 1}}
                        exit={{opacity: 0, rotate: -10, scale: 0.8}}
                        transition={{duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96]}}
                        className={'flex justify-center items-center min-w-8'}
                    >
                        <Container>
                            {children}
                        </Container>
                    </motion.div>
                </AnimatePresence>
                <Footer/>
            </SessionProviderWrapper>
        </main>
        </body>
        </html>
    );
}
