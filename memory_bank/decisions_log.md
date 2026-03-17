# Decisions Log

## 2026-03-06: Memory Bank Structure

**Decision:** Create comprehensive memory bank system to track project development
**Rationale:**

- Single source of truth for project context
- Track progress systematically
- Document decisions for future reference
- Maintain design consistency

## 2026-03-06: Technology Stack

**Decision:** Pure HTML5, CSS3, and vanilla JavaScript
**Rationale:**

- Matches project requirements (no frameworks)
- Fast loading
- Simple maintenance
- Maximum compatibility

## 2026-03-06: Language Localization

**Decision:** Change website language from English to Latvian
**Rationale:**

- The architect is based in Liepāja, Latvia
- Target audience includes Latvian-speaking clients
- Professional credibility with local clients

## 2026-03-16: Pieredze Section Implementation

**Decision:** Add comprehensive professional experience section to website
**Rationale:**

- User requested to add "kalvisl-pieredze" section to website
- Need to showcase professional experience and project statistics
- Should integrate logically with existing website structure

## 2026-03-16: Pieredze Page Data Correction

**Decision:** Update pieredze/index.html with corrected project data from darbu_saraksts.txt
**Rationale:**

- User provided corrected project list in darbu_saraksts.txt file
- Original pieredze page had incomplete JavaScript array with syntax errors
- Need to ensure accurate project statistics and information

## 2026-03-17: Targeted Fixes from cline-prompt.md

**Decision:** Implement targeted fixes for projekti page, CSS additions, and homepage updates
**Rationale:**

- User provided detailed task list in cline-prompt.md
- Need data-driven approach for projekti page to simplify adding new projects
- Need project detail view functionality
- Homepage needs working links to project detail pages

**Implementation Details:**

1. **Task 1 - Rewrite projekti/index.html:**
   - Created PROJECTS array at top of script with documented structure
   - Each project object includes: folder, title, location, type, year, cover, images
   - Implemented `renderGrid(filter)` function for filtering projects
   - Implemented `openProject(folderName)` function for project detail view
   - URL parameter `?project=folderName` controls grid vs detail view

2. **Task 2 - CSS Additions to assets/css/main.css:**
   - Appended new rules without modifying existing CSS
   - Added `.archive-card-link`, `.archive-card-inner` styles
   - Added complete project detail styles (gallery, CTA, responsive)

3. **Task 3 - Homepage Updates (index.html):**
   - Updated nav links: projekti/, #pieredze, par-mani/, kontakti/
   - Replaced placeholder project list with 3 real projects
   - Wrapped featured cards in anchor tags with project URLs

**Files Modified:**
- `projekti/index.html` - Complete rewrite with PROJECTS array
- `assets/css/main.css` - Appended project detail styles
- `index.html` - Updated nav links, project list, featured card links
- `memory_bank/*` - Updated documentation

**Result:** All targeted fixes implemented successfully.

## 2026-03-17: Mobile Hamburger Menu Implementation

**Decision:** Implement improved mobile navigation hamburger menu with all requested specifications
**Rationale:**
- User requested mobile navigation improvements with specific design requirements
- Current mobile navigation was hidden on small screens without proper menu
- Need to provide better mobile user experience with smooth animations and proper touch targets

**Implementation Details:**

1. **Hamburger Icon Design:**
   - Three thin lines with 1px stroke (not bold)
   - Right-aligned with generous 44x44px minimum tap target
   - Transforms into subtle × (multiplication sign) when menu is open

2. **Mobile Menu Behavior:**
   - Menu slides down smoothly with CSS transition (0.3s ease)
   - Full width, white background with subtle box shadow
   - Each nav item on its own line with 20px padding
   - Small font (14px), all lowercase text
   - Menu closes when clicking links, outside menu, or pressing Escape key

3. **Technical Implementation:**
   - Pure CSS transitions and minimal vanilla JavaScript (no libraries)
   - Added hamburger button HTML with proper ARIA attributes for accessibility
   - Updated CSS with mobile-responsive styles for ≤768px screens
   - Added JavaScript for menu toggle functionality
   - Prevented body scroll when menu is open
   - Updated both `index.html` and `projekti/index.html` with hamburger menu

**Files Modified:**
- `index.html` - Added hamburger button and updated nav structure
- `projekti/index.html` - Added hamburger button and updated nav structure  
- `assets/css/main.css` - Added hamburger styles and mobile menu CSS
- `assets/js/main.js` - Added mobile menu toggle JavaScript

**Result:** Mobile hamburger menu implemented successfully with all requested features.

## 2026-03-17: Desktop Navigation Fixes

**Decision:** Implement desktop navigation styling fixes and full-bleed project images
**Rationale:**
- User requested specific desktop navigation improvements matching davidchipperfield.com style
- Current navigation had uppercase/letterspaced text that needed refinement
- Background color was warm off-white instead of pure white
- Featured project images had horizontal padding preventing full-bleed effect

**Implementation Details:**

1. **Navigation Link Styling:**
   - Changed from uppercase/letterspaced (DM Mono 11px, 0.12em letter-spacing) to normal case
   - Updated to DM Sans 13px with font-weight 300 (light)
   - Removed letter-spacing and text-transform properties
   - Matches davidchipperfield.com navigation style

2. **Background Color Update:**
   - Changed CSS variable `--white` from `#f5f4f0` (warm off-white) to `#ffffff` (pure white)
   - Updated throughout the site for consistent white background

3. **Full-Bleed Project Images:**
   - Removed 40px horizontal padding from `.featured-section` (desktop)
   - Removed 20px horizontal padding from `.featured-section` (mobile responsive)
   - Images now extend edge-to-edge on viewport
   - Section label retains proper padding for readability

4. **Image Visibility Fix:**
   - Simplified first featured project card to use regular image instead of broken slider
   - Fixed aspect ratio conflicts in CSS for first card
   - Ensured all project images are visible and properly displayed

**Files Modified:**
- `assets/css/main.css` - Updated navigation styles, background color, and featured section padding
- `index.html` - Simplified first featured project card structure
- `memory_bank/decisions_log.md` - Updated documentation
- `memory_bank/progress_tracker.md` - Updated progress tracking

**Result:** Desktop navigation fixes completed successfully with all requested changes implemented.
