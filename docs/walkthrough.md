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
