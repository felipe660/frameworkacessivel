
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/frameworkacessivel/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3062, hash: 'dcdb3fd87b1163d90d631a458287efa89e7e20a01bd615a924674f43af629a80', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3404, hash: 'b999264fbe0b1328008d38b3a8c099e948e48dc0fa5a939078dc104440d93dc4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4WE6D6WH.css': {size: 46, hash: '0bonjXA8WQ8', text: () => import('./assets-chunks/styles-4WE6D6WH_css.mjs').then(m => m.default)}
  },
};
