# Accessibility Testing Checklist

## WCAG 2.1 AA Compliance Checklist

### 1. Perceivable
- [ ] **1.1 Text Alternatives**: Provide text alternatives for non-text content
- [ ] **1.2 Time-based Media**: Provide alternatives for time-based media
- [ ] **1.3 Adaptable**: Create content that can be presented in different ways
- [ ] **1.4 Distinguishable**: Make it easier for users to see and hear content

### 2. Operable
- [ ] **2.1 Keyboard Accessible**: Make all functionality available from a keyboard
- [ ] **2.2 Enough Time**: Provide users enough time to read and use content
- [ ] **2.3 Seizures and Physical Reactions**: Do not design content in a way that is known to cause seizures
- [ ] **2.4 Navigable**: Provide ways to help users navigate, find content, and determine where they are

### 3. Understandable
- [ ] **3.1 Readable**: Make text content readable and understandable
- [ ] **3.2 Predictable**: Make Web pages appear and operate in predictable ways
- [ ] **3.3 Input Assistance**: Help users avoid and correct mistakes

### 4. Robust
- [ ] **4.1 Compatible**: Maximize compatibility with current and future user agents

## Specific Tests to Perform

### Semantic HTML
- [ ] Proper heading hierarchy (h1, h2, h3, etc.)
- [ ] Semantic elements (nav, main, footer, section, article)
- [ ] Lists properly marked up (ul, ol, li)
- [ ] Tables with proper headers and scope

### Keyboard Navigation
- [ ] All interactive elements reachable via Tab key
- [ ] Focus indicators visible and clear
- [ ] Logical tab order
- [ ] Skip links for navigation

### ARIA & Screen Reader Support
- [ ] ARIA labels for interactive elements
- [ ] ARIA landmarks for page regions
- [ ] Form fields with proper labels
- [ ] Error messages associated with form fields
- [ ] Live regions for dynamic content

### Color & Contrast
- [ ] Sufficient color contrast (4.5:1 for normal text)
- [ ] Color not used as the only visual means of conveying information
- [ ] Text resizable up to 200% without loss of functionality

### Images & Media
- [ ] All images have alt text
- [ ] Decorative images have empty alt text (alt="")
- [ ] Complex images have long descriptions
- [ ] Icons have text alternatives

### Forms
- [ ] All form fields have associated labels
- [ ] Required fields clearly indicated
- [ ] Error messages clearly associated with fields
- [ ] Form validation accessible

### Mobile & Touch
- [ ] Touch targets at least 44x44px
- [ ] No reliance on hover states for functionality
- [ ] Gestures have alternative methods

### Performance & Motion
- [ ] Respects prefers-reduced-motion
- [ ] No flashing content that could trigger seizures
- [ ] Animations can be paused or stopped

## Testing Tools
- [ ] WAVE Web Accessibility Evaluation Tool
- [ ] axe DevTools
- [ ] Lighthouse Accessibility Audit
- [ ] Screen reader testing (NVDA, VoiceOver)
- [ ] Keyboard-only navigation testing
- [ ] Color contrast analyzer