# Spline Hero Section Implementation

## Summary
Successfully implemented a responsive 3D Hero section using Spline.

## Key Challenges & Solutions
1.  **Responsiveness**: The Spline embedding was not scaling correctly on mobile devices.
    -   **Solution (Code side)**:
        -   Used `iframe` with `width: 100vw` and `height: 100vh` to force viewport coverage.
        -   Added CSS centering: `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`.
    -   **Solution (Spline side)**:
        -   User enabled **"Responsive"** in Export settings.
        -   User unlocked the **Frame Size** (removed fixed pixel width).
        -   User enabled the **"Cover"** option in Export settings, which scales content to fill the screen without distortion.

## Final Implementation
-   **File**: `src/app/components/Hero.tsx`
-   **Technique**: Fullscreen `iframe` with Spline-side responsive configuration.
-   **Outcome**: The 3D scene now correctly covers the entire screen on all device sizes without cropping or distortion.

# Animation Optimization & Stability Fixes

## Summary
Resolved persistent application crashes caused by malformed JSX in `Projects.tsx`. Implemented a comprehensive "Wrapper Strategy" across all major interactive components to decouple entrance animations (slow/smooth) from hover effects (fast/snappy).

## Key Changes
1.  **Wrapper Strategy**:
    -   Separated the `motion.div` responsibilities:
        -   **Outer Wrapper**: Handles the entrance animation (e.g., `opacity: 0` -> `1`, `duration: 0.8s`).
        -   **Inner Component**: Handles the interactive hover effects (e.g., `whileHover`, `duration: 0.2s`).
    -   This prevents the slow entrance transition from overriding or lagging the fast hover transition.

2.  **Component Updates**:
    -   **`Projects.tsx`**: Fixed critical syntax error (missing closing tags) that crashed the build. Applied wrapper strategy to project cards.
    -   **`Skills.tsx`**: Refactored to use the wrapper strategy for skill cards.
    -   **`Experience.tsx`**: Refactored to use the wrapper strategy for experience items.
    -   **`Header.tsx`**: Confirmed wrapper strategy for menu items.

-   **Performance**: Hover effects are now instant and snappy, unrelated to the initial load animation speed.
-   **Consistency**: All sections now share a unified animation logic and feel.

# Safari Performance Optimization

## Summary
To address perceived stuttering on Safari (caused by strict power management and different compositing logic compared to Chrome), we applied hardware acceleration hints.

## Technique
-   **CSS Property**: Added `style={{ willChange: "transform" }}` to key animated elements (`motion.div` wrappers).
-   **Effect**: This hints the browser to promote these elements to their own GPU layer in advance.
-   **Files Affected**:
    -   `Header.tsx` (Menu items)
    -   `Projects.tsx` (Project cards)
    -   `Skills.tsx` (Skill cards)
    -   `Experience.tsx` (Experience items)

## Outcome
-   This proactive layering helps Safari handle 3D transforms and opacity changes more smoothly, reducing the "jank" feeling during animations.

# 3D Hero Viewer Update & Mobile Tuning

## Summary
Switched the hero 3D embed from `iframe` to Spline Hana Viewer, and adjusted mobile sizing/visibility.

## Key Changes
1.  **Hana Viewer Integration**:
    -   Loaded `hana-viewer` via script injection in `Hero.tsx`.
    -   Replaced `iframe` with `<hana-viewer>` element.
2.  **Mobile Scale Tweaks**:
    -   Adjusted mobile scale to prevent cropping and improve visibility.
3.  **Visual Framing Attempts**:
    -   Tested vignette/gradient overlays to reduce branding distraction.
    -   Kept changes subtle to avoid obvious masking.

## Final State
-   **File**: `src/app/components/Hero.tsx`
-   **Embed**: Hana viewer element + responsive scale wrapper

# About Image Hover Refinement

## Summary
Removed experimental prism cursor effects and replaced with a cleaner hover treatment on the About image.

## Final Hover Effect
-   Slight image scale-up on hover
-   Soft highlight overlay (subtle radial + linear light)

## Files Affected
-   `src/app/components/About.tsx`
-   `src/styles/theme.css`

# Lock Screen Slider Wheel Attempt (Reverted)

## Summary
Tried adding mouse wheel slide switching for the lock screen slider, but it caused unwanted page scroll behavior. Reverted back to thumbnail-click only.

## Attempted Approaches
-   Wheel capture on the screen area
-   `preventDefault` + `overscroll-behavior: contain`
-   Window-level wheel lock while hovering the device frame

## Final State
-   Wheel interaction removed
-   Thumbnail click remains as the only navigation

## File
-   `src/app/components/LockScreenSlider.tsx`

# Project Detail Label Update

## Summary
Changed the label in the project detail page from "Role" to "Category (EN)" and display the project category instead of role.

## File
-   `src/app/pages/ProjectDetail.tsx`

# Local Dev Server Checklist

## Steps
1.  Move to project folder
    -   `cd /Users/jiny/.gemini/antigravity/scratch/j-portfolio`
2.  Start server
    -   `npm run dev`
3.  Confirm Vite ready message
    -   `Local: http://localhost:5173/j-portfolio/`
4.  Open in browser
    -   `http://localhost:5173/j-portfolio/`
    -   `http://127.0.0.1:5173/j-portfolio/` (if needed)
5.  Stop server
    -   `Ctrl + C`
6.  Force stop (if stuck)
    -   `lsof -i :5173`
    -   `kill <PID>`
    -   `kill -9 <PID>` (if needed)

# Project Detail Safari Resize Fix

## Summary
Resolved a Safari-specific layout issue where the left detail image panel visually overlapped into the footer area after shrinking and expanding the browser window.

## Root Cause (Observed)
-   The desktop two-column detail layout used a `grid` structure plus sticky/viewport-height assumptions.
-   On Safari resize, column height recalculation became inconsistent for very tall left-side images, causing visual overlap behavior near the footer boundary.

## Applied Fix
1.  Removed sticky/forced viewport-height constraints in the right detail column.
2.  Switched desktop layout from `lg:grid lg:grid-cols-2` to `lg:flex`.
3.  Set explicit width split:
    -   Left image column: `lg:w-[55%]`
    -   Right content column: `lg:w-[45%]`
4.  Final visual decision:
    -   Image column background reverted to white.

## Result
-   Safari window resize no longer breaks the project detail layout.
-   Footer overlap symptom was eliminated under the reported resize scenario.

## File
-   `src/app/pages/ProjectDetail.tsx`

# Project Detail Mobile Info Row Polish

## Summary
Improved the mobile layout of the info strip (`Client / Category / Year`) to avoid awkward vertical stacking and make the section feel denser and more balanced.

## Applied Changes
-   Kept all three meta items in one row on mobile (`grid-cols-3`).
-   Reduced mobile spacing/padding in the info strip.
-   Improved visual balance with centered alignment and subtle column separators on mobile.
-   Restored text size to previous values after testing smaller typography.

## File
-   `src/app/pages/ProjectDetail.tsx`
