import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import logoSvg from '@/assets/IN60Z_Logo.svg';

const Footer = () => {
  const navigate = useNavigate();
  
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Contact Us', href: '/contact' }
    ],
    Resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'AI Explainer', href: '/ai-explainer' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  const handleNavClick = (href: string) => {
    // Disable AI Explainer navigation
    if (href === '/ai-explainer') {
      return;
    }
    navigate(href);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, href: 'https://x.com/in60z_ai', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/formetry-labs/', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: 'https://github.com/Xneuronz-AI/', label: 'GitHub' },
    { icon: <Mail size={20} />, href: 'mailto:niyaz@in60z.com', label: 'Email' }
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
                <a href="mailto:niyaz@in60z.com" className="hover:text-primary transition-smooth">niyaz@in60z.com</a><br />
                <a href="mailto:siddhanth@in60z.com" className="hover:text-primary transition-smooth">siddhanth@in60z.com</a>
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
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-muted-foreground hover:text-primary transition-smooth text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Formetry Labs Pvt Ltd. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => handleNavClick('/privacy')}
              className="text-muted-foreground hover:text-primary text-sm transition-smooth"
            >
              Privacy
            </button>
            <button 
              onClick={() => handleNavClick('/terms')}
              className="text-muted-foreground hover:text-primary text-sm transition-smooth"
            >
              Terms
            </button>
            <button 
              onClick={() => handleNavClick('/cookies')}
              className="text-muted-foreground hover:text-primary text-sm transition-smooth"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
