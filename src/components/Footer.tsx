import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logoSvg from '@/assets/IN60Z_Logo.svg';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '/capabilities' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#api' }
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Contact', href: '/contact' }
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
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
              <img src={logoSvg} alt="IN60Z Logo" className="h-12 w-auto" />
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Delivering the essence of research in 60-word summaries. Stay informed, stay ahead.
            </p>

            {/* Contact Information */}
            <div className="mb-6 space-y-2 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Office Address:</strong><br />
                WJ88+69V BMTC Complex, Outer Ring Rd,<br />
                Old Madiwala, Kuvempu Nagar, BTM 2nd Stage,<br />
                BTM Layout, Bengaluru, Karnataka 560076
              </div>
              <div className="pt-2">
                <strong className="text-foreground">Email:</strong><br />
                <a href="mailto:contact@in60z.com" className="hover:text-primary transition-smooth">contact@in60z.com</a><br />
                <a href="mailto:niyaz@in60z.com" className="hover:text-primary transition-smooth">niyaz@in60z.com</a><br />
                <a href="mailto:siddhnath@in60z.com" className="hover:text-primary transition-smooth">siddhnath@in60z.com</a>
              </div>
            </div>

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

            {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {link.name}
                      </Link>
                    )}
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
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
              Terms
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;