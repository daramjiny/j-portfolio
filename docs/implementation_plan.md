# Implement Mobile Mockup Slider

## Goal
Create a realistic mobile phone mockup component that displays a slideshow of images. This will be used in the `ProjectDetail` page to showcase mobile app designs or responsive views.

## User Review Required
- Need mobile screen images (screenshots) to populate the slider.

## Proposed Changes

### Data
#### [MODIFY] [projects.ts](file:///Users/igyeongjin/Downloads/Modern%20Portfolio%20Site/src/data/projects.ts)
- Add `mobileImages?: string[]` to the `Project` interface.
- Add sample data or placeholder images to one of the projects (e.g., `brand-identity-website` or `government-promo`) to test.

### Components
#### [NEW] [PhoneMockup.tsx](file:///Users/igyeongjin/Downloads/Modern%20Portfolio%20Site/src/app/components/PhoneMockup.tsx)
- **Container**: A styled `div` resembling a modern smartphone (rounded corners, bezel, notch/dynamic island).
- **Screen**: Masked overflow area.
- **Slider**: `motion.div` from `framer-motion`.
    - **Features**: Drag support (`drag="x"`), snap-to-center (optional) or continuous scroll. Autoplay behavior can be added if requested.

#### [MODIFY] [ProjectDetail.tsx](file:///Users/igyeongjin/Downloads/Modern%20Portfolio%20Site/src/app/pages/ProjectDetail.tsx)
- Conditional Rendering in the Left Column:
    - If `project.mobileImages` exists, render `<PhoneMockup images={project.mobileImages} />`.
    - Else, render the current standard Image/DetailImage.
- Styling: Center the mockup in the left column standard background (`bg-black/5`).

## Verification Plan

### Manual Verification
- Add dummy mobile images to a project.
- Open that project detail page.
- Verify the phone mockup appears on the left.
- Verify images can be dragged/slid horizontally.
