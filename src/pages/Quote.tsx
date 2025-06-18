import * as React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Home, 
  Wrench, 
  FileText, 
  CheckCircle, 
  Calendar,
  DollarSign,
  Clock
} from "lucide-react";

const Quote = () => {
  const location = useLocation();
  const serviceFromState = location.state?.service || '';
  const locationFromState = location.state?.location || '';

  const [formData, setFormData] = React.useState({
    // Contact Information
    name: '',
    phone: '',
    email: '',
    
    // Address Information
    address: '',
    cityZip: '',
    
    // Project Information
    serviceType: serviceFromState,
    materialStyle: '',
    projectNotes: '',
    
    // Preferences
    timeframe: '',
    budgetRange: '',
    preferredContact: 'phone'
  });

  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const totalSteps = 3;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In the future, this will POST to /api/quote
      console.log('Full quote form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Thank you! Your quote request has been submitted. We\'ll contact you within 24 hours with a personalized estimate.');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        cityZip: '',
        serviceType: '',
        materialStyle: '',
        projectNotes: '',
        timeframe: '',
        budgetRange: '',
        preferredContact: 'phone'
      });
      setCurrentStep(1);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.name && formData.phone && formData.email;
      case 2:
        return formData.cityZip && formData.serviceType;
      case 3:
        return true; // Optional fields
      default:
        return false;
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <main className="overflow-hidden bg-gradient-to-b from-white to-secondary/30 min-h-screen">
      {/* Header Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Tell us about your project and we'll provide a detailed, personalized estimate
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm mb-2">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                {currentStep === 1 && <Phone className="h-8 w-8 text-primary" />}
                {currentStep === 2 && <Wrench className="h-8 w-8 text-primary" />}
                {currentStep === 3 && <FileText className="h-8 w-8 text-primary" />}
              </div>
              <CardTitle className="text-2xl font-heading text-primary">
                {currentStep === 1 && "Contact Information"}
                {currentStep === 2 && "Project Details"}
                {currentStep === 3 && "Additional Information"}
              </CardTitle>
              <CardDescription className="text-lg">
                {currentStep === 1 && "Let's start with your contact details"}
                {currentStep === 2 && "Tell us about your fencing or deck project"}
                {currentStep === 3 && "Help us provide the most accurate estimate"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium flex items-center">
                          <span className="mr-2">Full Name</span>
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          Phone Number
                          <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(918) 555-0123"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Address
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredContact" className="text-sm font-medium">
                        Preferred Contact Method
                      </Label>
                      <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="text">Text Message</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-sm font-medium flex items-center">
                        <Home className="h-4 w-4 mr-2" />
                        Project Address (Optional)
                      </Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="123 Main Street"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cityZip" className="text-sm font-medium flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        City / ZIP Code
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="cityZip"
                        type="text"
                        placeholder="Tulsa, OK 74101"
                        value={formData.cityZip}
                        onChange={(e) => handleInputChange('cityZip', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType" className="text-sm font-medium flex items-center">
                        <Wrench className="h-4 w-4 mr-2" />
                        Service Type
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select the service you need" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential-fencing">Residential Fencing</SelectItem>
                          <SelectItem value="commercial-fencing">Commercial Fencing</SelectItem>
                          <SelectItem value="custom-decks">Custom Decks</SelectItem>
                          <SelectItem value="gates-operators">Gates & Gate Operators</SelectItem>
                          <SelectItem value="multiple-services">Multiple Services</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="materialStyle" className="text-sm font-medium">
                        Preferred Material/Style (Optional)
                      </Label>
                      <Select value={formData.materialStyle} onValueChange={(value) => handleInputChange('materialStyle', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select material preference (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wood-cedar">Cedar Wood</SelectItem>
                          <SelectItem value="wood-pine">Pine Wood</SelectItem>
                          <SelectItem value="vinyl-white">White Vinyl</SelectItem>
                          <SelectItem value="vinyl-tan">Tan Vinyl</SelectItem>
                          <SelectItem value="aluminum">Aluminum</SelectItem>
                          <SelectItem value="chain-link">Chain Link</SelectItem>
                          <SelectItem value="steel">Steel</SelectItem>
                          <SelectItem value="composite">Composite Decking</SelectItem>
                          <SelectItem value="pressure-treated">Pressure Treated Wood</SelectItem>
                          <SelectItem value="not-sure">Not Sure / Need Recommendations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="timeframe" className="text-sm font-medium flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Project Timeframe
                        </Label>
                        <Select value={formData.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="When do you want to start?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">As Soon As Possible</SelectItem>
                            <SelectItem value="1-month">Within 1 Month</SelectItem>
                            <SelectItem value="2-3-months">2-3 Months</SelectItem>
                            <SelectItem value="3-6-months">3-6 Months</SelectItem>
                            <SelectItem value="planning">Just Planning Ahead</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budgetRange" className="text-sm font-medium flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          Budget Range (Optional)
                        </Label>
                        <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-2k">Under $2,000</SelectItem>
                            <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                            <SelectItem value="over-20k">Over $20,000</SelectItem>
                            <SelectItem value="not-sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectNotes" className="text-sm font-medium flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Project Notes & Details
                      </Label>
                      <Textarea
                        id="projectNotes"
                        placeholder="Tell us more about your project... measurements, special requirements, style preferences, etc."
                        value={formData.projectNotes}
                        onChange={(e) => handleInputChange('projectNotes', e.target.value)}
                        className="min-h-32 resize-none"
                      />
                    </div>

                    {/* What Happens Next */}
                    <div className="bg-secondary/30 rounded-lg p-6">
                      <h3 className="font-semibold text-primary mb-4 flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        What Happens Next?
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span>We'll review your project details within 24 hours</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span>Schedule a free on-site consultation at your convenience</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span>Provide detailed estimate with materials and timeline</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span>No obligation - free quote with competitive pricing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <Separator className="my-8" />

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center">
                  <div>
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        className="px-6"
                      >
                        Previous
                      </Button>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    {Array.from({ length: totalSteps }, (_, i) => (
                      <div
                        key={i + 1}
                        className={`w-3 h-3 rounded-full ${
                          i + 1 <= currentStep ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <div>
                    {currentStep < totalSteps ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        disabled={!isStepValid(currentStep)}
                        className="btn-primary px-8"
                      >
                        Next Step
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-accent px-8"
                      >
                        {isSubmitting ? 'Submitting...' : 'Get My Quote'}
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Licensed & Insured
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free Estimates
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                10+ Years Experience
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Quality Guarantee
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quote; 