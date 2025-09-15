import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoSvg from '@/assets/IN60Z_Logo.svg';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#api' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' }
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logoSvg} alt="IN60Z Logo" className="h-8 w-auto" />
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Delivering the essence of research in 60-word summaries. Stay informed, stay ahead.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-smooth"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 In60z. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
              Privacy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
              Terms
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;