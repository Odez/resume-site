# Oscar Meza Guedez Resume Site

Single-page resume site for `omguedez.com`, built as a lightweight static site for GitHub Pages.

## Structure

- `index.html`: primary GitHub Pages entrypoint
- `resume.html`: compatibility redirect to `/`
- `resume.css`: site styling
- `resume.js`: nav, motion, and small interaction logic
- `profile-photo.jpg`: current profile photo used in the hero

## Local Preview

From this folder, run a local static server and open:

```text
http://127.0.0.1:8000/
```

## Updating the Profile Photo

Replace `profile-photo.jpg` with a new square JPG.

Recommended image size:

- minimum: `400 x 400`
- ideal: `800 x 800`
- practical max: `1200 x 1200`

If the crop needs adjustment, edit `--profile-photo-position` in `resume.css`.

## Deployment Notes

- GitHub Pages should publish from `main`
- `CNAME` must be preserved for the custom domain `omguedez.com`
