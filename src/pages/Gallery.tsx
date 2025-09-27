import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Define the photo categories and their images
const photoCategories = {
  'Ameristar': [
    '1000002893001(1).jpg',
    '1000002894(1).jpg',
    '490654144_1083822673763818_6407982423294302308_n.jpg',
    '490754914_1085024603643625_8266391198350655194_n.jpg',
    '491509820_1083822503763835_8302664543931386057_n.jpg',
    'FB_IMG_1660151993717.jpg'
  ],
  'Commercial': [
    '488519825_1077025151110237_580836037559699280_n.jpg',
    '488544588_1077025094443576_7595472113235010536_n.jpg',
    '488962114_1077025047776914_537378424244966229_n.jpg',
    'Attachment(137).jpg',
    'Attachment(139).jpg'
  ],
  'Gates-and-Gate-Operators': [
    '488675040_1077025164443569_4432792265416510015_n.jpg',
    '488706680_1077025161110236_3664048956504830031_n.jpg',
    '488867158_1077025147776904_1813597507789668214_n.jpg',
    'Attachment(81).jpg',
    'Attachment(82).jpg'
  ],
  'Pre-Stained': [
    'FullSizeR.jpg',
    'Huemiller-All-Seasons-Colors-June-2022-1000-b 2.png',
    'Huemiller-All-Seasons-Colors-June-2022-1000-b.png',
    'IMG_5981.jpg',
    'IMG_5982.jpg'
  ],
  'Privacy': [
    '20230216_173524.jpg',
    '20230509_173703.jpg',
    '20230616_111240.jpg',
    'Attachment(100).jpg',
    'Attachment(102).jpg',
    'Attachment(104).jpg',
    'Attachment(52).jpg',
    'Attachment(78).jpg',
    'Attachment(81).jpg',
    'Attachment(98).jpg',
    'IMG_20230802_110624722(1).jpg',
    'Resized_20220717_202221.jpeg'
  ],
  'Round Rail': [
    'Attachment(88).jpg',
    'Attachment(94).jpg',
    'Attachment(95).jpg'
  ],
  'Vinyl': [
    '488769225_1075892637890155_6064129988108749659_n.jpg',
    '491410386_1085715473574538_338669842960035959_n.jpg',
    '491678158_1085715466907872_1597571667533114388_n.jpg',
    '492005296_1090761233069962_6048506380568357776_n.jpg',
    'IMG_20210908_185818560.jpg',
    'IMG_20210912_164937768.jpg'
  ]
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Get all categories including 'All'
  const categories = ['All', ...Object.keys(photoCategories)];

  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') {
      // Return all images with their category info
      return Object.entries(photoCategories).flatMap(([category, images]) =>
        images.map(image => ({
          src: `/${category}/${image}`,
          category,
          filename: image
        }))
      );
    } else {
      // Return images from selected category
      return photoCategories[selectedCategory as keyof typeof photoCategories]?.map(image => ({
        src: `/${selectedCategory}/${image}`,
        category: selectedCategory,
        filename: image
      })) || [];
    }
  }, [selectedCategory]);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Project Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our completed fence and deck projects. See the quality and craftsmanship that sets us apart.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-heading font-semibold mb-2">Filter by Project Type</h2>
            <p className="text-gray-600">Select a category to view specific project types</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                {category}
                {category !== 'All' && (
                  <Badge variant="secondary" className="ml-2">
                    {photoCategories[category as keyof typeof photoCategories]?.length || 0}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-12">
        <div className="container-custom">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Card 
                  key={`${image.category}-${index}`}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => openLightbox(image.src)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={`${image.category} project`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          console.error(`Failed to load image: ${image.src}`);
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {image.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found for the selected category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
              aria-label="Close image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us bring your vision to life with our expert craftsmanship and quality materials.
          </p>
          <Button asChild size="lg" className="btn-accent">
            <a href="/quote">Get Your Free Quote</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
