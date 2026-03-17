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
