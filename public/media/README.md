# Manani Seeds — Media Guide

Drop real assets into these folders using the exact filenames referenced in
`src/data/media.ts`. Nothing else in the codebase needs to change — every
component reads image paths from that single file.

- logo/            → manani-seeds-logo.png (transparent PNG, min 512px)
- hero/             → hero-field.jpg, hero-farmer.jpg, hero-seed.jpg
- farmers/          → farmer-1.jpg ... farmer-4.jpg
- fields/           → field-1.jpg ... field-4.jpg
- crops/            → crop-paddy.jpg, crop-maize.jpg, crop-cotton.jpg
- products/<slug>/  → pack.png (packaging cutout), field.jpg, grain.jpg
- gallery/          → gallery-1.jpg ... gallery-12.jpg (mixed orientation)
- videos/           → story-loop.mp4 (short, muted, looping background clip)

Until real photography is supplied, the site renders tasteful CSS
gradient/placeholder panels in the exact same slots so layout, motion and
aspect ratios are already production-correct.
