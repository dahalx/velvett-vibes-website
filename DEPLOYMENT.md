# Velvett Vibes Website — Development & Deployment Guide

This project is a bespoke, fast, and fully mobile-responsive creative portfolio built using **React**, **TypeScript**, and **Tailwind CSS**. 

Below is the simple guide explaining how you can run this website on your end and instantly showcase it to your clients at your live URL:
👉 `https://dahalx.github.io/velvett-vibes-we/`

---

## ⚡ Zero-Install Automatic Deployment (How to go live)

You do **not** need to install anything on your local computer to build or deploy this application. Everything has been pre-configured with industry-standard web automation.

### Option A: The One-Click GitHub Push (Recommended)
We have included a production-grade **GitHub Actions Workflow** folder in this project (`.github/workflows/deploy.yml`). 

Whenever you push or upload this code to your GitHub repository (**dahalx/velvett-vibes-we**):
1. GitHub will automatically spin up a secure builder container.
2. It will install the dependencies, compile the production files via Vite, and bundle your high-resolution assets.
3. It will push the compiled output to a secure `gh-pages` branch, making your site live at `https://dahalx.github.io/velvett-vibes-we/` within **60 seconds**.

*Note: Make sure to go to your **GitHub Repository Settings** > **Pages**, and set the Source branch to `gh-pages` and select `/(root)` to start showing the live website!*

---

### Option B: Using GitHub Codespaces
If you prefer to edit files or build directly inside your browser:
1. Open your repository on Github and click on the green **Code** button.
2. Under the **Codespaces** tab, click **Create codespace on main**.
3. Once the environment loads, simply run:
   ```bash
   npm run build
   ```
4. This will compile all files instantly into the `dist/` directory, which is ready to be committed or served.

---

## 🎨 Architectural & Style Elements
- **Traditional Theme Integration**: A light layout designed to match Nepalese creative values (rich marigolds, warm gold borders, luxury deep crimson buttons, and soft cream card backgrounds suited for audiences in their 40s and 50s).
- **Embedded Heritage Watermarks**: Subtle vector illustrations depicting Nepalese wedding custom lines (**शुभ विवाह**), Rice feeding ceremonies (**पासनी**), and Baby naming rituals (**नवारान**).
- **Responsive Media Hub**: Elegant, lag-free streaming of narrative tracks and original cinematic releases directly through YouTube and custom media player consoles.
