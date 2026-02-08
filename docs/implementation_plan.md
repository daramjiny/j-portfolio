# Optimize Hover Animation Speed

## Goal
The user feels the hover animations (move up/down) are too slow and sluggish. This is caused by `framer-motion` sharing the `transition` prop between the entrance animation (which needs to be slow/smooth) and the hover animation (which needs to be instant).
The solution is to decouple these by using a wrapper `motion.div` for the entrance, and an inner element for the hover interaction.

## User Review Required
- **Feel**: User needs to verify if the hover response is snappy enough (0.2s or less).

## Proposed Changes

### Components

#### [MODIFY] [Header.tsx](file:///Users/jiny/.gemini/antigravity/scratch/j-portfolio/src/app/components/Header.tsx)
- **Menu Items**: Wrap current `<motion.button>` (which handles entrance) around a new child `<motion.span>` (or button) that handles the hover effect.
- **Speed**: Set hover transition to `duration: 0.2`.

#### [MODIFY] [Projects.tsx](file:///Users/jiny/.gemini/antigravity/scratch/j-portfolio/src/app/components/Projects.tsx)
- **Category Buttons**: Separate the entrance animation (0.6s) from the hover animation.
  - Outer: `initial`, `animate`, `transition (0.6s)`
  - Inner: `whileHover`, `whileTap`, `transition (0.2s)`
- **Project Cards**: Ensure `whileHover` has a dedicated fast transition override.

#### [MODIFY] [Contact.tsx](file:///Users/jiny/.gemini/antigravity/scratch/j-portfolio/src/app/components/Contact.tsx)
- **Social Links**: Apply the same wrapper pattern if they have entrance animations.

## Verification Plan
### Manual Verification
- Hover over the "Work" category buttons. They should jump up instantly and return instantly.
- Reload the page to ensure the entrance animation still plays smoothly at the original speed.
