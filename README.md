# Tailwind hover-hover Plugin

Additional Tailwindcss hover variants for non-touch devices, these variants can
be used to create hover effects that will only work on non-touch devices. This
plugin adds the following variants:

- `hover-hover`
- `group-hover-hover`

## Getting started

Download the `index.js` file and name it however you want. Then require the file
in the plugins array in your `tailwind.config.js`. For more details on how to
install tailwind plugins, see the
[official documentation about tailwindcss plugins](https://tailwindcss.com/docs/plugins).

### Usage

```html
<div class="hover-hover:bg-blue-500"></div>
<div class="group-hover-hover:bg-blue-500"></div>
```

Results in the following css:

```css
@media (hover: hover) {
  .hover-hover\:bg-blue-500:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  }

  .group:hover .group-hover-hover\:bg-blue-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  }
}
```
