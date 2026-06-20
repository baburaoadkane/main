import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand, X } from 'lucide-react';

const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <>
            <header className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-end px-6 py-4">
                <button
                    onClick={() => setMenuOpen(true)}
                    className="border px-2 py-2 rounded-full text-sm font-bold hover:cursor-pointer"
                >
                    <Expand size={16} color='green' strokeWidth={2.5} />
                </button>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        ref={menuRef}
                        className="fixed bottom-0 right-0 w-80 z-50 rounded-[2rem] flex flex-col"
                        initial={{ x: '100%' }}
                        animate={{ x: '-8%', y: '-1%' }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative text-[#1a1a1a] rounded-[0.5rem] rounded-tr-[5rem] p-8 w-[340px] font-sans shadow-lg bg-gradient-to-b from-purple-300 via-green-50 to-green-200">
                            <div className="flex justify-between items-start mb-2">
                                <h2 class="text-3xl font-bold mb-2 leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                                    Let's team up
                                </h2>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="border border-red-500 px-1 py-1 rounded-full text-sm hover:cursor-pointer"
                                >
                                    <X size={16} color='red' />
                                </button>
                            </div>
                            <p class="text-base font-semibold text-justify leading-relaxed mb-6">
                                Your ideas, my expertise, and a commitment to quality every step of the way.
                            </p>
                            <hr class="border-t border-[#b700ff] mb-4" />
                            <div>
                                <p class="text-sm">For Email</p>
                                <a
                                    href='mailto:connect2baburaoadkane@gmail.com'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-violet-600 hover:text-violet-800 mb-4 block"
                                >
                                    connect2baburaoadkane@gmail.com
                                </a>
                                <p class="text-sm">Contact number</p>
                                <a
                                    href='tel:+919309732510'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-violet-600 hover:text-violet-800 mb-4 block"
                                >
                                    9309732510
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Footer;