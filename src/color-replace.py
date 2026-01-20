#!/usr/bin/env python3
import os
import re

# Define the replacement mappings
replacements = {
    # Gradient combinations
    'from-emerald-600 to-teal-600': 'from-primary-500 to-primary-600',
    'from-emerald-500 to-teal-500': 'from-primary-500 to-primary-600',
    'from-emerald-400 to-teal-400': 'from-primary-400 to-primary-500',
    'from-teal-400 to-emerald-400': 'from-primary-400 to-primary-500',
    'from-emerald-500/10 to-teal-500/10': 'from-primary-500/10 to-primary-600/10',
    'from-emerald-50/30 to-teal-50/30': 'from-primary-50/30 to-primary-50/30',
    
    # Individual colors
    'emerald-700': 'primary-700',
    'emerald-600': 'primary-500',
    'emerald-500': 'primary-500',
    'emerald-400': 'primary-400',
    'emerald-200': 'primary-200',
    'emerald-100': 'primary-100',
    'emerald-50': 'primary-50',
    'teal-600': 'primary-600',
    'teal-500': 'primary-500',
    'teal-200': 'primary-200',
    'teal-50': 'primary-50',
}

def replace_colors_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Apply replacements in order (gradients first, then individual colors)
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    if content != original_content:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated: {filepath}")
        return True
    return False

# Process all .tsx files
tsx_files = []
for root, dirs, files in os.walk('.'):
    # Skip node_modules and hidden directories
    dirs[:] = [d for d in dirs if not d.startswith('.') and d != 'node_modules']
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            tsx_files.append(filepath)

print(f"Found {len(tsx_files)} .tsx files")
updated_count = 0

for filepath in tsx_files:
    if replace_colors_in_file(filepath):
        updated_count += 1

print(f"\nUpdated {updated_count} files")
