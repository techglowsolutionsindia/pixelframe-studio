# PixelFrame Studio — Project Documentation

**Developer:** TechGlow Solutions

**Last Updated:** 9 November 2026
**Status:** Published on GitHub Pages; final audit and backup pending

## 1. Project Overview

- Project Name: PixelFrame Studio
- Website Type: Photography Studio — Single-Page Landing Website
- Developer: TechGlow Solutions
- Local Project Folder: `D:\web-projects\pixelframe-studio\`
- Frontend Technologies: HTML5, CSS3, Vanilla JavaScript
- Frontend Hosting: GitHub Pages (live)
- Backend: Google Apps Script
- Enquiry Storage: Google Sheets
- Email Integration: Owner notification and customer confirmation
- Website Objective: Showcase photography services, portfolio and packages, and collect session-booking enquiries.
- Project Completion Date: Pending
- Publication Date: 9 November 2026

## 2. GitHub and Hosting

- GitHub Repository: https://github.com/techglowsolutionsindia/pixelframe-studio
- GitHub Pages URL: https://techglowsolutionsindia.github.io/pixelframe-studio/
- Main Git Working Folder: `D:\web-projects\pixelframe-studio\`
- Git Branch: main
- Latest Confirmed Commit: 5dd60e2
- Hosting Status: Live on GitHub Pages
- Git Working Tree: Clean after commit 5dd60e2; subsequent sitemap and robots.txt updates pending commit

Use the existing project folder as the Git repository. Do not create a duplicate GitHub folder.

## 3. Project Structure

Project root: `D:\web-projects\pixelframe-studio\`

### Main HTML Files

- `index.html` — Main photography landing page
- `sitemap.html` — Human-readable website sitemap

### CSS Files

- `assets/css/base.css`
- `assets/css/buttons.css`
- `assets/css/cards.css`
- `assets/css/footer.css`
- `assets/css/header.css`
- `assets/css/landing-page.css`
- `assets/css/layout.css`
- `assets/css/responsive.css`
- `assets/css/variables.css`

### JavaScript Files

- `assets/js/header.js` — Header, mobile navigation, sticky header and active-section highlighting
- `assets/js/booking.js` — Booking enquiry submission and confirmation handling

### Branding and Assets

- `assets/images/logo/pixelframe-logo.svg` — Navbar and footer logo
- `assets/images/logo/pixelframe-favicon.svg` — Website favicon
- `assets/images/` — Photography website images

### Configuration Files

- `sitemap.xml` — XML sitemap
- `robots.txt` — Search crawler configuration
- `.gitignore` — Git exclusion rules
- `PROJECT-DOCUMENTATION.md` — Project reference and maintenance documentation

Verify the complete image directory and any additional project files before final closure.

## 4. Website Sections and SEO

### Main Website Sections

1. Hero / Home
2. Photography Services
3. Portfolio
4. About Us
5. Our Process
6. Photography Packages
7. Frequently Asked Questions
8. Book a Session

### SEO Configuration

- HTML sitemap: Created and locally displayed successfully
- XML sitemap: Updated locally with verified GitHub Pages URL; GitHub push pending
- robots.txt: Updated locally with live sitemap URL; GitHub push pending
- SVG favicon: Configured
- SVG navbar and footer logo: Configured
- SEO title and description: Verified in index.html
- Canonical URL: Configured with verified GitHub Pages URL; GitHub push pending
- Open Graph / social sharing metadata: Verification pending
- Structured data: Verification pending
- Mobile responsiveness: Passed visual checks at 375px and 768px; mobile navigation verified

### Google Organic Sitelinks Readiness

Verify:

- Clear semantic page structure
- Descriptive navigation and section headings
- Working internal section links
- Crawlable navigation
- Appropriate canonical URL
- XML sitemap and robots.txt
- Search indexing after deployment

Google automatically selects organic sitelinks. Their appearance cannot be guaranteed.

### Google Analytics 4 Readiness

- GA4 Readiness Status: Prepared for future integration
- GA4 Property: Not created
- Measurement ID: Not assigned
- Tracking Activation: Not active
- GA4 Tracking Code: Not installed
- Mandatory Code Changes: None at this stage
- Planned Tracking: Page views, booking CTA interactions and successful booking enquiries
- Consent and Privacy Requirements: Review before activation

When GA4 is required:

1. Create a GA4 property and web data stream.
2. Obtain the actual Measurement ID (G-XXXXXXXXXX).
3. Add the official GA4 tracking code to index.html.
4. Configure booking CTA and successful enquiry events.
5. Verify tracking through GA4 Realtime and DebugView.
6. Review applicable privacy and consent requirements.
7. Update PROJECT-DOCUMENTATION.md.

Do not insert placeholder GA4 measurement IDs into production code.

## 5. Application Architecture

### Frontend

Static HTML5, CSS3 and Vanilla JavaScript.

### Hosting

Frontend deployed through GitHub Pages from the main branch and repository root.

### Backend

Google Apps Script processes photography booking enquiries.

### Data Storage

Google Sheets records submitted enquiries.

### Email Delivery

Google Apps Script sends:

1. Owner notification email
2. Customer confirmation email

No Node.js, Render or Brevo backend has been confirmed for PixelFrame Studio.

## 6. Booking Enquiry Form Integration

### Relevant Files

- `index.html`
- `assets/js/booking.js`

### Purpose

Collect photography session booking enquiries.

### Confirmed Functionality

- Client-side booking form submission
- Google Apps Script integration
- Google Sheets enquiry recording
- Owner notification email
- Customer confirmation email
- Successful submission message
- Form reset after confirmed submission
- Default `+91` phone prefix restored

### Submission Confirmation

The frontend uses a POST request followed by a verification request to confirm that the enquiry was saved before displaying success.

The frontend implementation uses a `no-cors` POST and a JSONP-based saved-enquiry verification process.

Do not interpret a successful network request alone as proof of backend storage or email delivery.

## 7. Google Sheets and Google Apps Script

### Google Spreadsheet

- Spreadsheet Name: PixelFrame Studio
- Worksheet Name: Data
- Spreadsheet ID: Not recorded
- Owning Google Account: To be verified

### Google Apps Script

- Backend Platform: Google Apps Script
- Web App Endpoint: Configured in `assets/js/booking.js`; record the verified endpoint location without publishing private credentials
- Deployment Version: Not documented
- Deployment Permissions: Final verification pending

### Confirmed End-to-End Testing

The user verified:

- A new booking enquiry was saved in Google Sheets
- Owner notification email was received
- Customer confirmation email was received
- Email status values showed Sent
- Overall processing status showed Completed
- Frontend displayed successful submission
- Form reset correctly

Do not publish customer contact details or confidential enquiry records.

## 8. Photography Services and Booking

The website presents photography services, portfolio examples and photography packages.

Primary CTA: Book a Session.

Verify final service descriptions, package details and availability against `index.html` before commercial publication.

## 9. Header and Navigation

Relevant files:

- `assets/css/header.css`
- `assets/js/header.js`

### Confirmed Features

- Sticky header
- Responsive mobile menu
- Mobile menu backdrop
- Keyboard navigation and Escape handling
- Mobile navigation closing after selection
- Automatic active-section highlighting
- Subtle gold rounded active-link background
- No active-link underline

The active-section highlighting was locally tested and confirmed working on 9 November 2026.

## 10. Branding and Other Integrations

### Branding

- Website Name: PixelFrame Studio
- Main Logo: `assets/images/logo/pixelframe-logo.svg`
- Favicon: `assets/images/logo/pixelframe-favicon.svg`
- Accent Styling: Gold and neutral tones

### Logo Usage

The branded SVG logo is used in the navbar and footer.

The footer uses the SVG logo with styling appropriate for the dark footer background.

### Other Integrations

- Google Apps Script: Confirmed
- Google Sheets: Confirmed
- Owner and customer email: Confirmed
- Newsletter integration: Not confirmed
- Payment processing: Not confirmed
- GA4: Pending

## 11. Form Validation and Security

### Confirmed Requirements

- Validate required booking fields
- Validate email format
- Validate phone number
- Preserve the `+91` phone prefix
- Prevent unintended repeated submissions
- Verify successful backend storage before showing success
- Keep credentials and customer information out of the public repository

### Security Review

Backend validation, sanitization, deployment permissions and abuse protection should be verified against the active Apps Script code.

Do not expose private spreadsheet data or credentials.

## 12. Configuration and Secrets

### Frontend Configuration

Booking API integration is maintained in:

`assets/js/booking.js`

### Backend Configuration

Google Apps Script and Google Sheets.

Exact backend deployment details should be recorded after verification.

### Environment Variables

No project-specific environment variable names have been verified.

### Git Exclusions

The `.gitignore` file excludes:

- `.env`
- `.env.*`, except `.env.example`
- `node_modules/`
- npm/yarn debug logs
- `.DS_Store`
- `Thumbs.db`

Never commit credentials, private keys or confidential customer records.

## 13. Local Website Setup

1. Open `D:\web-projects\pixelframe-studio\` in VS Code.
2. Start Live Server.
3. Open `http://127.0.0.1:5500/index.html`.
4. Verify all navigation links.
5. Test desktop, tablet and mobile layouts.
6. Verify SVG logos and favicon.
7. Test photography section interactions.
8. Submit a controlled booking enquiry.
9. Verify the Google Sheets record.
10. Verify owner and customer emails.
11. Check the browser console and network errors.

No Node.js installation is required for the confirmed static frontend.

## 14. Frontend Deployment — GitHub Pages

### Current Status

Deployed successfully on 9 November 2026.

- Source: main branch
- Publishing Folder: / (root)
- HTTPS: Enabled
- Live Website: https://techglowsolutionsindia.github.io/pixelframe-studio/
- Hero and About images: User-confirmed visible
- Live booking form: End-to-end verification pending

### Deployment Procedure

1. Complete mandatory local audit.
2. Review Git configuration and working tree.
3. Initialize Git in the existing project folder if necessary.
4. Create the PixelFrame Studio GitHub repository.
5. Commit approved project files.
6. Push to the main branch.
7. Enable GitHub Pages.
8. Verify the published website.
9. Update canonical URLs, sitemap.xml and robots.txt.
10. Verify the live booking form.
11. Update this documentation.
12. Complete Google Drive backup.

### GitHub Repository

https://github.com/techglowsolutionsindia/pixelframe-studio

### Live Website

https://techglowsolutionsindia.github.io/pixelframe-studio/

## 15. Google Apps Script Deployment

### Current Status

Working integration confirmed through local end-to-end testing.

### Maintenance Procedure

1. Open https://script.google.com/home.
2. Locate the PixelFrame Studio Apps Script project.
3. Verify the active web app deployment.
4. Confirm the destination spreadsheet is PixelFrame Studio.
5. Confirm the worksheet is Data.
6. Review backend field validation.
7. Verify owner and customer email functions.
8. Submit controlled test data.
9. Confirm the Google Sheets row and email statuses.
10. Update the frontend endpoint only if a verified deployment change requires it.

Preserve the working integration during frontend updates.

## 16. Testing History

### Completed / User-Confirmed

- Local website running through Live Server
- SVG navbar and footer branding verified
- Footer logo display and spacing corrected
- Booking enquiry submitted successfully
- Google Sheets enquiry record verified
- Owner notification email received
- Customer confirmation email received
- Booking form reset verified
- Default `+91` prefix restored
- Active-section navigation highlighting verified
- HTML sitemap displayed correctly
- XML sitemap created
- robots.txt updated
- .gitignore reviewed

### Pending

- Final SEO metadata verification
- Final responsive testing
- Complete local functional audit
- Git configuration verified; initial commit and stylesheet fix pushed
- GitHub repository created
- GitHub Pages deployment successful
- Live website opened; hero and About images confirmed visible
- XML sitemap placeholder replaced locally; GitHub push pending
- Live sitemap URL added to robots.txt locally; GitHub push pending
- Final canonical URL configuration
- GA4 readiness verification
- Google Drive backup
- Final documentation update

## 17. Maintenance and Known Limitations

### Email Delivery

Successful test emails do not guarantee future inbox delivery. Monitor failures and spam classification.

### Google Apps Script

Deployment or permission changes may interrupt booking enquiries. Retest after backend changes.

### Future Custom Domain

When migrating to a custom domain:

- Update canonical URLs
- Update XML sitemap
- Update robots.txt
- Verify internal links and asset paths
- Recheck Apps Script integration
- Test Google Sheets and both emails
- Review GA4 configuration

### Business Information

Confirm actual photography pricing, packages, availability and marketing claims before using the website commercially.

## 18. GitHub and Google Drive Backup

### GitHub

- Repository: https://github.com/techglowsolutionsindia/pixelframe-studio
- Latest Confirmed Remote Commit: 5dd60e2
- GitHub Pages: https://techglowsolutionsindia.github.io/pixelframe-studio/
- Sitemap and documentation changes: Pending commit and push

### Google Drive

- Backup Status: Pending
- Backup Date: Not recorded

### Backup Requirements

Include current HTML, CSS, JavaScript, images, SVG logos, sitemap files, robots.txt, Git configuration and PROJECT-DOCUMENTATION.md.

Exclude secrets and confidential customer records.

## 19. Common Service Details — TechGlow Solutions

### GitHub

https://github.com/techglowsolutionsindia

### Google Apps Script

https://script.google.com/home

### Google Sheets

https://sheets.google.com/

Spreadsheet: PixelFrame Studio

Worksheet: Data

### Google Drive

https://drive.google.com/

### Local Project Folder

`D:\web-projects\pixelframe-studio\`

### Backend Reference Files

Previously saved reusable backend integration references:

`D:\web-projects\Backend Requirements\Apps Script.txt`

`D:\web-projects\Backend Requirements\booking.js`

`D:\web-projects\Backend Requirements\Backend Integration Master Prompt.txt`

These are development references, not part of the public PixelFrame Studio repository.

## 20. Final Project Closure Checklist

- [x] Single-page photography landing website developed locally
- [x] SVG navbar and footer logos configured
- [x] SVG favicon configured
- [x] Booking enquiry integration working
- [x] Google Sheets recording tested
- [x] Owner notification email tested
- [x] Customer confirmation email tested
- [x] Booking success and form reset tested
- [x] Active navigation highlighting tested
- [x] HTML sitemap created and locally verified
- [x] XML sitemap prepared
- [x] robots.txt prepared
- [x] .gitignore reviewed
- [ ] Final SEO audit
- [x] Final mobile responsiveness audit
- [x] Final local testing (website errors resolved; extension error identified)
- [x] Git configuration verification
- [x] GitHub repository creation
- [x] GitHub Pages deployment
- [x] Replace sitemap placeholder with verified URL locally
- [x] Update robots.txt sitemap directive locally
- [x] Verify canonical URL locally; GitHub push pending
- [x] Google organic sitelinks readiness verification
- [x] GA4 tracking readiness verification (prepared for future integration; tracking inactive)
- [x] Live website and booking form verification (Google Sheets, owner email, customer email, success message and form reset verified on 9 November 2026)
- [x] Final documentation update
- [ ] Google Drive backup
- [ ] Final project closure

---

**Documentation Last Updated:** 9 November 2026

**Project Status:** Live on GitHub Pages; remaining audit and deployment updates in progress.

**Project Closure:** Pending final SEO and canonical verification, live booking test, GA4 readiness, GitHub push of final updates, and Google Drive backup.
