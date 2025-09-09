#!/usr/bin/env python3
import json
import os


def main():
    """CLI tool to add a product to data/products.json"""
    # Determine path to products.json relative to this script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_path = os.path.join(script_dir, '..', 'data', 'products.json')
    data_path = os.path.normpath(data_path)

    # Load existing products
    try:
        with open(data_path, 'r', encoding='utf-8') as f:
            products = json.load(f)
    except FileNotFoundError:
        products = []

    # Determine new ID
    if products:
        new_id = max(p.get('id', 0) for p in products) + 1
    else:
        new_id = 1

    # Prompt user for product details
    name = input("Enter product name: ").strip()
    category = input("Enter category: ").strip().lower()
    image = input("Enter image URL: ").strip()
    affiliate_url = input("Enter affiliate URL: ").strip()

    # Create new product dictionary
    new_product = {
        "id": new_id,
        "name": name,
        "category": category,
        "image": image,
        "affiliate_url": affiliate_url
    }

    # Append to list and write back to file
    products.append(new_product)
    with open(data_path, 'w', encoding='utf-8') as f:
        json.dump(products, f, indent=2, ensure_ascii=False)

    print(f"Added product '{name}' (ID {new_id}) to {data_path}")


if __name__ == "__main__":
    main()
