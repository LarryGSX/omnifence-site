import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Wrench } from 'lucide-react';

const ShortQuoteForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    cityZip: '',
    serviceType: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For now, just log the data - will POST to /api/quote later
      console.log('Quote form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        cityZip: '',
        serviceType: ''
      });
      
      alert('Thank you! We\'ll contact you soon with your quote.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-secondary/30 to-white">
      <div className="container-custom">
        <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-heading text-primary">Get Your Free Quote</CardTitle>
            <CardDescription className="text-lg">
              Tell us about your project and we'll provide a personalized estimate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium flex items-center">
                    <span className="mr-2">Full Name</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(918) 555-0123"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cityZip" className="text-sm font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    City / ZIP Code
                  </Label>
                  <Input
                    id="cityZip"
                    type="text"
                    placeholder="Tulsa, OK 74101"
                    value={formData.cityZip}
                    onChange={(e) => handleInputChange('cityZip', e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType" className="text-sm font-medium flex items-center">
                  <Wrench className="h-4 w-4 mr-2" />
                  Service Type
                </Label>
                <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select the service you need" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential-fencing">Residential Fencing</SelectItem>
                    <SelectItem value="commercial-fencing">Commercial Fencing</SelectItem>
                    <SelectItem value="custom-decks">Custom Decks</SelectItem>
                    <SelectItem value="gates-operators">Gates & Gate Operators</SelectItem>
                    <SelectItem value="not-sure">Not Sure / Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold btn-accent"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Request...' : 'Get My Free Quote'}
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                We'll contact you within 24 hours with your personalized quote.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ShortQuoteForm; 