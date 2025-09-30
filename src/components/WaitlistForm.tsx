import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { X, Mail, User, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WaitlistFormProps {
  trigger?: React.ReactNode;
  className?: string;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ trigger, className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  // src/components/WaitlistForm.tsx

// src/components/WaitlistForm.tsx

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfO7kuNurAMu5PVNhof4AqgWYvlW_Ta940fW-_PRbxK5rBJIw/formResponse';
  const formDataToSubmit = new FormData();

  formDataToSubmit.append('entry.793333668', formData.name);      // Full Name ID
  formDataToSubmit.append('entry.827048938', formData.email);    //  Email Address ID
  formDataToSubmit.append('entry.448236374', formData.phone);    // Phone Number ID

  try {
    await fetch(googleFormUrl, {
      method: 'POST',
      body: formDataToSubmit,
      mode: 'no-cors', 
    });

    toast({
      title: "Successfully joined!",
      description: "Welcome to the In60z waitlist. We'll notify you when we launch!",
    });

    setFormData({ name: '', email: '', phone: '' });
    setIsOpen(false);

  } catch (error) {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Clone the trigger element and add onClick handler
  const triggerElement = trigger ? (
    <div onClick={handleOpenDialog} style={{ display: 'inline-block', cursor: 'pointer' }}>
      {trigger}
    </div>
  ) : (
    <Button 
      className={`bg-accent hover:bg-accent/90 text-accent-foreground ${className}`}
      onClick={handleOpenDialog}
    >
      Join Our Waitlist
    </Button>
  );

  return (
    <>
      {triggerElement}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Join Our Waitlist</DialogTitle>
          </DialogHeader>
          
          <Card className="p-6 border-0 shadow-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number (Optional)
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WaitlistForm;