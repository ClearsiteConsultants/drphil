# Dr. Phil Mobile Chiropractic - Website Rebuild Plan

**Date:** January 26, 2026  
**Template:** Modern React + TypeScript + Tailwind CSS (emoto-repair-hub)  
**Status:** Planning Phase

---

## Executive Summary

This plan outlines the complete rebuild of Dr. Phil's mobile chiropractic website using a modern, professional template based on the emoto-repair-hub project. The rebuild leverages modern frameworks (React + TypeScript), styling (Tailwind CSS), and UI components (shadcn/ui) to create a faster, more maintainable, and feature-rich website.

---

## Template Technology Stack

### Framework & Build Tools
- **Build Tool:** Vite (fast, modern bundler)
- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS 3+ with custom configuration
- **UI Component Library:** shadcn/ui (Radix UI primitives + Tailwind)
- **Icons:** lucide-react (modern, clean SVG icons)
- **Carousel:** Embla Carousel (lightweight, performant)
- **Forms:** React Hook Form + Zod validation
- **Data Fetching:** TanStack React Query
- **Deployment:** Vercel (optimized for Next.js/Vite)

### Key Template Features
- Full TypeScript type safety
- Responsive design with Tailwind CSS
- Component-based architecture
- Modern animations and transitions
- CSS-in-JS with Tailwind
- Hot module replacement (HMR) for development
- Optimized production builds

---

## Website Architecture

### Current Template Components
The emoto-repair-hub template includes these core components:

1. **Header** - Navigation bar with logo and menu
2. **Hero** - Full-screen hero section with background image and CTA
3. **Services** - 3-column grid of service cards with icons
4. **WhyUs** - Two-column layout with features and benefits list
5. **Contact** - Form submission + contact info cards
6. **Footer** - Footer with navigation and social links
7. **Carousel** - Embla-powered carousel component (UI primitive)
8. **UI Components** - Pre-built shadcn/ui components (buttons, inputs, forms, etc.)

### Dr. Phil Content Sections Needed
From scraped HTML analysis:

**Homepage Sections:**
- [ ] Hero Section (with chiropractic tagline)
- [ ] 3-Column Features (Convenience, Personalized Care, Exercise Rx)
- [ ] Service Area Map (with 11 cities listed)
- [ ] Doctor Profile Section
- [ ] What to Expect Checklist
- [ ] Testimonials Carousel (4+ customer testimonials)
- [ ] Pricing Cards (3-tier pricing structure)
- [ ] Discounts Section (Educators, Military, Law Enforcement, Firefighters)
- [ ] CTA Buttons (Schedule Now → JaneApp)

**About Page:**
- [ ] Doctor Biography (education, certifications, experience)
- [ ] Photo Carousel (3 professional photos)
- [ ] Practice Philosophy
- [ ] Certifications Display (BS Sports Med, ATC, Chiropractic, Neurophysiology)

**Why House Calls Page:**
- [ ] Value Proposition Content
- [ ] Advantages vs. Traditional Clinic
- [ ] Benefits List
- [ ] Hero Image Background

---

## Implementation Plan - Phase Breakdown

### Phase 1: Project Setup & Configuration ✅ (Template Ready)
**Status:** Complete - template already copied to workspace

**Completed Items:**
- [x] Copy emoto-template to drphil project
- [x] Verify Vite configuration
- [x] Verify Tailwind CSS setup
- [x] Verify TypeScript configuration
- [x] Verify component structure

**Dependencies Already Installed:**
- React 18+
- TypeScript
- Tailwind CSS
- Embla Carousel
- shadcn/ui components
- Lucide icons
- React Hook Form
- TanStack React Query

### Phase 2: Branding & Customization
**Timeline:** 2-3 hours

**Tasks:**
1. **Color Theme Update**
   - Primary Color: #6c9932 (Green - Dr. Phil branding)
   - Secondary Color: #10315a (Navy)
   - Accent Colors: White borders on buttons
   - Update tailwind.config.ts CSS variables
   - Replace template's electric-blue theme with chiropractic green

2. **Typography Customization**
   - Keep Bebas Neue for display (headings) - professional feel
   - Keep Inter for body text - clean, readable
   - Adjust font sizes if needed for medical/professional context

3. **Logo & Branding**
   - Replace template bike images with Dr. Phil logo assets
   - Add logo variants (logo_simple.png, logo_white.png)
   - Create favicon from logo

4. **Remove Template Assets**
   - Delete hero-bike.png and other emoto assets
   - Delete emoto-specific images from /public folder
   - Add Dr. Phil images (DSC_0040, DSC_0165, DSC_0255, map screenshot)

### Phase 3: Homepage Rebuild
**Timeline:** 4-5 hours

**Component Modifications:**

#### 3.1 Hero Section Component
- **Current:** "WE KEEP YOUR ELECTRIC RIDE RUNNING"
- **New:** "Adaptive Mobile Chiropractic" or "Mobile Care To Your Home Or Office"
- **Change:** Update headline, subheadline, CTA button text
- **Image:** Replace bike image with chiropractic/wellness image
- **Stats:** Change from "500+ Bikes Repaired" to relevant Dr. Phil stats
  - Option: "1000+ Patients Served" or similar
  - "Same-Day Appointments Available"
  - "15+ Years Experience"

**File to modify:** `src/components/Hero.tsx`

#### 3.2 Features Section (3-Column Grid)
- **Current:** Parts Installation, Metal Polishing, Tires & Tubes, etc.
- **New:** Adapt to show Dr. Phil's value propositions

**New Feature Cards:**
1. **Convenience & Longer Appointments**
   - Icon: Clock/Hourglass
   - Description: "No waiting room. Dedicated time with your doctor."

2. **Personalized & Gentle Treatment**
   - Icon: Fingerprint or Heart
   - Description: "Customized care based on your specific needs and health goals."

3. **Exercise Prescription & Prevention**
   - Icon: Running/Activity
   - Description: "Get exercises and preventative care to support your recovery."

**File to modify:** `src/components/Services.tsx`

#### 3.3 Create New Components

##### ServiceAreaMap Component
```tsx
// Location: src/components/ServiceAreaMap.tsx
// Display:
// - Map image (static)
// - List of 11 service cities:
//   Alpine, American Fork, Cedar Hills, Highland, Lehi,
//   Orem, Provo, Pleasant Grove, Lindon, Saratoga Springs,
//   Eagle Mountain
// - Optional: Upgrade to Google Maps API (interactive)
```

**Decision Point:** Static Image vs. Google Maps
- **Static Image:** Fast, no API key needed, same as current
- **Google Maps:** Interactive, users can get directions, modern look
- **Recommendation:** Implement Google Maps with fallback to static image

##### DoctorProfile Component
```tsx
// Location: src/components/DoctorProfile.tsx
// Content:
// - Doctor name: Dr. Phil Wilkins
// - Credentials: DC, ATC, CNIM
// - Photo carousel (3 professional photos)
// - Short bio excerpt
// - Certifications list
// - Call to action: "Free Consultation"
```

##### WhatsToExpect Component
```tsx
// Location: src/components/WhatsToExpect.tsx
// Content:
// - 3-4 numbered checklist items describing patient experience
// - From scraped content, adapt to chiropractic context
// - Icons for each step
// - Estimated time for each step
```

##### Testimonials Component (Carousel)
```tsx
// Location: src/components/Testimonials.tsx
// Uses: Embla Carousel (already available)
// Content:
// - 4+ customer testimonials with names
// - Star ratings (if available)
// - Photos (if available)
// - Auto-play carousel with navigation arrows
// - Responsive: 1 slide mobile, 2-3 slides desktop
// 
// Testimonial Data:
// 1. Melissa M. - [testimonial text]
// 2. Ashlee E. - [testimonial text]
// 3. Kolt E. - [testimonial text]
// 4. Crystal P. - [testimonial text]
```

**Carousel Implementation Details:**
- Import Embla Carousel hook from template
- Use carousel.tsx UI component from shadcn/ui
- Configure auto-play with autoplay plugin
- Add manual navigation arrows
- Add dot indicators (optional)

##### Pricing Component
```tsx
// Location: src/components/Pricing.tsx
// Layout: 3-column card grid
// Pricing Tiers:
// 1. Getting Started: $125 (initial visit, 45-60 min)
// 2. Follow Up Treatment: $75 (30 min)
// 3. Adjustment Only: $50 (15 min)
// 
// Additional Section:
// - Discount callout for:
//   • Educators
//   • Military
//   • Law Enforcement
//   • Firefighters
//   • Multiple Family Members
// - "Contact for discount details" CTA
```

#### 3.4 Update WhyUs Component
- **Current:** "Built by Riders, For Riders"
- **Adapt to:** "Built for Your Health, By a Caring Professional"
- Replace feature icons to match healthcare context
- Update benefits list for chiropractic care

**File to modify:** `src/components/WhyUs.tsx`

#### 3.5 Update Contact Component
- **Current contact info:** emoto-repair details
- **New contact info:**
  - Phone: 801-369-3122
  - Email: doctorphilchiro@gmail.com
  - Address: Eagle Mountain, UT (from service area)
  - Hours: [Need from current site]
- **Form fields:**
  - Name
  - Email
  - Phone
  - Preferred Appointment Time (optional)
  - Message
- **CTA:** "Schedule Free Consultation" → Link to JaneApp scheduling

**File to modify:** `src/components/Contact.tsx`

#### 3.6 Create Testimonials Carousel Example
```tsx
// src/components/Testimonials.tsx
// Uses Embla Carousel with auto-play
// Displays testimonials in rotating carousel
// Shows 1 at a time on mobile, 2-3 on desktop
```

### Phase 4: Supporting Pages
**Timeline:** 2-3 hours

#### 4.1 About Page
```
src/pages/About.tsx
├── Header/Hero Section
├── Full Doctor Biography
│   ├── Education
│   ├── Certifications
│   ├── Experience
│   └── Practice Philosophy
├── Photo Carousel (3 professional photos)
│   └── Uses Embla Carousel
├── Certifications Display
└── CTA: "Free Consultation"
```

**Component to create:** `src/components/DoctorBio.tsx`
- Display bio content
- Optional sidebar with quick facts
- Professional layout with readability focus

#### 4.2 Why House Calls Page
```
src/pages/WhyHouseCalls.tsx
├── Hero with background image
├── Main value proposition content
├── 3-4 benefit blocks:
│   ├── Avoid waiting room stress
│   ├── More comfortable at home
│   ├── Longer appointment times
│   └── Personalized environment
├── Comparison chart (optional)
└── CTA: "Free Consultation"
```

**Component to create:** `src/components/BenefitsGrid.tsx`

### Phase 5: Google Maps Integration
**Timeline:** 1-2 hours

**Tasks:**
1. **Get Google Maps API Key**
   - Create/configure in Google Cloud Console
   - Add to environment variables (.env.local)

2. **Create MapComponent**
   ```tsx
   // src/components/Map.tsx
   // Uses: @react-google-maps/api library
   // Display: Interactive map showing service area
   // Markers: Eagle Mountain location or service area boundaries
   // Fallback: Static image if API unavailable
   ```

3. **Update ServiceAreaMap**
   - Replace static image with interactive Google Map
   - Show service cities as markers or highlighted region
   - Embed map in dedicated section on homepage

4. **Install Map Library**
   ```bash
   npm install @react-google-maps/api
   ```

### Phase 6: Image Assets & Optimization
**Timeline:** 1-2 hours

**Tasks:**
1. **Extract Images from Scraped Content**
   - Professional photos (DSC_0040, DSC_0165, DSC_0255)
   - Service area map screenshot
   - Logo variants (logo_simple.png, logo_white.png)

2. **Organize in Project**
   ```
   src/assets/
   ├── logo-simple.png
   ├── logo-white.png
   ├── doctor-photo-1.jpg
   ├── doctor-photo-2.jpg
   ├── doctor-photo-3.jpg
   ├── service-area-map.png
   └── [any other images needed]
   ```

3. **Image Optimization**
   - Resize photos to optimal dimensions
   - Compress for web (tinypng, imageoptim)
   - Create responsive variants if needed
   - Add alt text to all images

4. **Favicon**
   - Create from Dr. Phil logo
   - Add to /public folder

### Phase 7: Content Migration & Data Structure
**Timeline:** 1-2 hours

**Tasks:**
1. **Extract Text Content**
   - Copy all text from scraped HTML files
   - Organize into content files (optional: create data/content.ts)
   - Format testimonials with names, text, dates

2. **Create Data Files** (Optional - for easier updates)
   ```typescript
   // src/data/services.ts
   // src/data/testimonials.ts
   // src/data/pricing.ts
   // src/data/team.ts
   // src/data/contact.ts
   ```

3. **Convert to Component Props**
   - Pass data to components via props
   - Easier to update content without code changes

### Phase 8: Routing & Navigation
**Timeline:** 1 hour

**Setup React Router:**
1. Install React Router
   ```bash
   npm install react-router-dom
   ```

2. Create routing structure
   ```typescript
   // src/App.tsx
   Routes:
   ├── / (Homepage)
   ├── /about (About Dr. Phil)
   ├── /why-house-calls (Why House Calls)
   └── /404 (Not Found)
   ```

3. Update Header Navigation
   - Links to all pages
   - Active state indicators
   - Mobile menu support

4. Ensure navigation consistency across all pages

### Phase 9: SEO & Meta Tags
**Timeline:** 1-2 hours

**Tasks:**
1. **Update HTML Meta Tags**
   - Title: "Dr. Phil Mobile Chiropractic | House Call Chiropractor in Utah"
   - Description: "Adaptive mobile chiropractic services for your home or office in Utah. Expert care, convenient appointments."
   - OG tags for social sharing

2. **Page-Specific Meta Tags**
   - About page
   - Why House Calls page

3. **Structured Data** (Optional)
   - Schema.org markup for business
   - Medical professional schema

4. **Open Graph Tags**
   - og:title, og:description, og:image
   - og:url, og:type

### Phase 10: Accessibility & Performance
**Timeline:** 1-2 hours

**Tasks:**
1. **Accessibility Audit**
   - ARIA labels on interactive elements
   - Keyboard navigation support
   - Color contrast verification
   - Alt text on all images

2. **Performance Optimization**
   - Image lazy loading
   - Code splitting for pages
   - Bundle analysis
   - Cache strategy

3. **Mobile Responsiveness Testing**
   - All breakpoints (mobile, tablet, desktop)
   - Touch-friendly buttons
   - Viewport configuration

### Phase 11: Form & API Integration
**Timeline:** 2-3 hours

**Tasks:**
1. **Contact Form Setup**
   - Validation with React Hook Form + Zod
   - Email submission backend (current: /api/contact)
   - Success/error messages
   - CAPTCHA (optional for spam prevention)

2. **Scheduling Integration**
   - Link "Schedule Now" buttons to JaneApp
   - Or embed JaneApp scheduling widget (if available)
   - Deep linking to specific service appointments

3. **Newsletter Signup** (Optional)
   - Email capture form
   - Integration with email service

### Phase 12: Testing & QA
**Timeline:** 2-3 hours

**Tasks:**
1. **Functional Testing**
   - All links work
   - Forms submit correctly
   - Images load properly
   - Carousels function

2. **Browser Testing**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

3. **Cross-Device Testing**
   - Desktop (1920px, 1366px)
   - Tablet (768px, 1024px)
   - Mobile (375px, 414px)

4. **Performance Testing**
   - Lighthouse audit
   - PageSpeed insights
   - Core Web Vitals

### Phase 13: Deployment
**Timeline:** 1 hour

**Tasks:**
1. **Build Optimization**
   ```bash
   npm run build
   ```

2. **Deploy to Production**
   - Connect to Vercel (recommended - already configured)
   - Or deploy to custom hosting
   - Configure custom domain

3. **DNS & Hosting**
   - Update domain settings if needed
   - SSL certificate setup
   - Email forwarding (if using custom domain)

4. **Post-Launch**
   - Monitor uptime
   - Check analytics
   - Monitor error logs
   - Gather user feedback

---

## Technology Implementation Details

### Carousel Component (Testimonials & Photo Gallery)

The template uses **Embla Carousel** - a lightweight, feature-rich carousel library.

**Example Implementation:**
```typescript
// src/components/Testimonials.tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Melissa M.",
    text: "Dr. Phil's care changed my life. The convenience of house calls made it easy to stick with treatment.",
    date: "2024"
  },
  // ... more testimonials
];

export function Testimonials() {
  return (
    <Carousel>
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
```

### Google Maps Integration

**Example Implementation:**
```typescript
// src/components/ServiceAreaMap.tsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '12px'
};

const center = {
  lat: 40.4517, // Eagle Mountain, UT
  lng: -111.6246
};

export function ServiceAreaMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
```

**Environment Setup:**
- Add to `.env.local`:
  ```
  REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
  ```

---

## Component Tree Overview

```
App.tsx
├── Header (Navigation)
├── Routes
│   ├── Index.tsx (Homepage)
│   │   ├── Hero
│   │   ├── Features (Services for chiropractic)
│   │   ├── ServiceAreaMap (Google Maps)
│   │   ├── DoctorProfile
│   │   ├── WhatsToExpect
│   │   ├── Testimonials (Carousel)
│   │   ├── Pricing
│   │   ├── Discounts
│   │   ├── WhyUs (adapted)
│   │   ├── Contact (Form)
│   │   └── Footer
│   ├── About.tsx
│   │   ├── Hero/Header
│   │   ├── DoctorBio
│   │   ├── PhotoCarousel (Embla)
│   │   ├── Certifications
│   │   ├── Contact
│   │   └── Footer
│   ├── WhyHouseCalls.tsx
│   │   ├── Hero with background
│   │   ├── ValueProposition
│   │   ├── BenefitsGrid
│   │   ├── Contact
│   │   └── Footer
│   └── NotFound.tsx
└── Footer (Consistent across all pages)
```

---

## File Structure to Create

```
src/
├── components/
│   ├── Header.tsx (Update for Dr. Phil)
│   ├── Hero.tsx (Update headline, images, stats)
│   ├── Services.tsx (Rename to Features, update content)
│   ├── ServiceAreaMap.tsx (NEW - Google Maps)
│   ├── DoctorProfile.tsx (NEW - Doctor bio + carousel)
│   ├── WhatsToExpect.tsx (NEW - Step checklist)
│   ├── Testimonials.tsx (NEW - Carousel testimonials)
│   ├── Pricing.tsx (NEW - 3-tier pricing cards)
│   ├── Discounts.tsx (NEW - Professional discounts)
│   ├── WhyUs.tsx (Update for chiropractic)
│   ├── Contact.tsx (Update contact info + API)
│   ├── Footer.tsx (Update for Dr. Phil)
│   └── ui/ (Keep existing shadcn/ui components)
├── pages/
│   ├── Index.tsx (Homepage)
│   ├── About.tsx (NEW)
│   ├── WhyHouseCalls.tsx (NEW)
│   └── NotFound.tsx (Keep)
├── data/
│   ├── services.ts (NEW)
│   ├── testimonials.ts (NEW)
│   ├── pricing.ts (NEW)
│   ├── contact.ts (NEW)
│   └── doctor.ts (NEW)
├── assets/
│   ├── logo-simple.png (NEW)
│   ├── logo-white.png (NEW)
│   ├── doctor-photo-1.jpg (NEW)
│   ├── doctor-photo-2.jpg (NEW)
│   ├── doctor-photo-3.jpg (NEW)
│   └── service-area-map.png (NEW)
├── App.tsx (Update with routing)
├── App.css (Update styles if needed)
├── index.css (Keep or update colors)
├── main.tsx (Keep)
└── vite-env.d.ts (Keep)
```

---

## Environment Variables Setup

Create `.env.local` file:
```
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_JANEAPP_SCHEDULE_URL=your_janeapp_booking_link
```

---

## Color Theme Update Guide

**In tailwind.config.ts or src/index.css:**

Current (Emoto - Electric Blue):
```css
--primary: hsl(200, 100%, 50%); /* Electric Blue */
```

New (Dr. Phil - Healing Green):
```css
--primary: hsl(92, 36%, 42%); /* #6c9932 Green */
--secondary: hsl(213, 64%, 23%); /* #10315a Navy */
```

---

## Estimated Timeline

| Phase | Task | Hours |
|-------|------|-------|
| 1 | Project Setup | ✅ Done |
| 2 | Branding & Customization | 2-3 |
| 3 | Homepage Rebuild | 4-5 |
| 4 | Supporting Pages | 2-3 |
| 5 | Google Maps Integration | 1-2 |
| 6 | Image Assets & Optimization | 1-2 |
| 7 | Content Migration | 1-2 |
| 8 | Routing & Navigation | 1 |
| 9 | SEO & Meta Tags | 1-2 |
| 10 | Accessibility & Performance | 1-2 |
| 11 | Form & API Integration | 2-3 |
| 12 | Testing & QA | 2-3 |
| 13 | Deployment | 1 |
| **TOTAL** | | **23-34 hours** |

---

## Key Dependencies to Install

```bash
# Google Maps
npm install @react-google-maps/api

# Router
npm install react-router-dom

# Already Installed:
# - embla-carousel-react
# - lucide-react
# - react-hook-form
# - zod
# - tailwindcss
# - shadcn/ui components
```

---

## Success Criteria

- [ ] Homepage displays correctly with all sections
- [ ] Testimonials carousel functions smoothly
- [ ] Google Maps displays service area
- [ ] All forms submit successfully
- [ ] Links to JaneApp scheduling work
- [ ] Mobile responsive on all devices
- [ ] Lighthouse score > 80
- [ ] All pages have proper meta tags
- [ ] Social media sharing displays correctly
- [ ] Contact information is accurate
- [ ] All images load quickly
- [ ] Navigation works across all pages

---

## Next Steps

1. **Immediate:** Proceed with Phase 2 - Branding & Customization
2. **Quick Wins:** Update colors, logo, text on existing components
3. **Build Components:** Create new components for chiropractic-specific sections
4. **Integrate Maps:** Add Google Maps API and create service area map
5. **Test & Deploy:** Full testing before launching to production

---

## Notes & Considerations

1. **JaneApp Integration:** Clarify if JaneApp has an API for deep linking or if we should embed their widget
2. **Contact Form Backend:** Current setup uses `/api/contact` endpoint - ensure email provider is configured (SendGrid, Nodemailer, etc.)
3. **Testimonials:** Gather complete testimonial text, author names, and dates from current website
4. **Images:** Ensure professional photos meet modern web standards (high quality, optimized for web)
5. **Analytics:** Consider adding Google Analytics or similar after launch
6. **Backup:** Keep original scraped HTML files in `/scraped` directory for reference

---

**Created:** January 26, 2026  
**Version:** 1.0 - Initial Planning
