// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SiteLogo from "@/components/SiteLogo";
import { navLinks } from "@/lib/site-config";
import { tapSpring } from "@/lib/motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Left: Brand */}
          <Link href="/" className="flex items-center gap-2" aria-label="Cornerstone Marketing Studio — Home">
            <SiteLogo
              variant="horizontal"
              width={168}
              className="transition-opacity duration-150 hover:opacity-80"
            />
          </Link>

          {/* Center / Right: Nav links (Desktop) */}
          <nav
            className="hidden items-center gap-10 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA (Desktop) */}
          <div className="hidden md:block">
            <motion.a
              href="/contact"
              className="btn-primary"
              {...tapSpring}
            >
              Contact Us
            </motion.a>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <motion.button
            type="button"
            className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-ink md:hidden"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            {...tapSpring}
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <motion.span
                className="block h-0.5 w-5 rounded-full bg-ink"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 4 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 w-5 rounded-full bg-ink"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-0.5 w-5 rounded-full bg-ink"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -4 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-40 h-full w-80 max-w-[85vw] bg-white shadow-2xl md:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex h-20 items-center justify-between border-b border-border px-6">
                  <span className="text-sm font-medium text-muted">Menu</span>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile navigation">
                  <ul className="space-y-2">
                    {navLinks.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-border/40"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Button */}
                <div className="border-t border-border p-6">
                  <motion.a
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="btn-primary block w-full text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    {...tapSpring}
                  >
                    Contact Us
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
