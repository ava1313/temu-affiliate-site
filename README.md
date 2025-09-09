# Temu Affiliate Product Site

This repository contains the source code for a simple affiliate marketing site built to showcase product reviews and deals from Temu. It is designed as a static website with an interactive UI that allows users to browse products by category, search by name, and view featured items in a carousel. All text on the site is in English, but you can localize it as needed.

## Features

- **Responsive design:** Works on desktop and mobile devices using a clean dark theme.
- **Navbar with social icons:** Includes your channel logo and links to YouTube, TikTok and Instagram.
- **Search and filter:** Users can search products by name and filter by category.
- **Carousel and grid:** Featured products appear in a carousel; the rest are displayed in a responsive grid.
- **Data driven:** Products are loaded from a JSON file (`data/products.json`) so you don't need to edit the HTML when adding items.
- **Affiliate ready:** Each product includes an affiliate link property; you can update the `affiliate_url` field in the JSON.

## Repository structure

```
├── index.html             # main HTML page
├── css/
│   └── styles.css         # global styles for the site
├── js/
│   └── app.js             # JavaScript logic for loading and filtering products
├── data/
│   └── products.json      # product data; edit manually or via add_product.py
├── assets/
│   └── logo.svg           # placeholder logo (replace with your own)
├── tools/
│   └── add_product.py     # CLI tool to append new products to products.json
```

## Running locally

Because the site fetches `data/products.json` via HTTP, you'll need to serve it over a local web server when developing:

```bash
# from the repository root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Adding new products

Use the helper script located in `tools/add_product.py` to add new entries to the JSON file. It will prompt you for a name, category, image URL and affiliate link and then update `data/products.json` accordingly:

```bash
cd tools
python add_product.py
```

Alternatively, you can edit `data/products.json` directly in your text editor.

## Deployment

To host the site for free, you can enable [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages) on this repository:

1. Go to **Settings → Pages**.
2. Under "Source", choose `main` branch and the `/root` folder.
3. Save. GitHub will publish your site at `https://<your-username>.github.io/<repo>/`.

You can then share that URL in your YouTube video descriptions.

## Customization

- Replace `assets/logo.svg` with your channel's real logo (keeping the same filename).
- Open `index.html` and update the `<a>` tags in the navbar with your actual social media URLs.
- Adjust styles in `css/styles.css` as desired.

Contributions and improvements are welcome! Feel free to fork or open pull requests.
