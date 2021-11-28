#!/usr/bin/env zx

const main_config = `./src/snowpack-main.cfg.mjs`;
const render_config = `./src/snowpack-render.cfg.mjs`;

const main_flags = [
    '--config', 
    main_config
];

const render_flags = [
    '--config',
    render_config
];

await Promise.all([
    $`pnpm snowpack build ${main_flags}`,
    $`pnpm snowpack build ${render_flags}`
]);
