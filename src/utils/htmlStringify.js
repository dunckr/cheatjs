import unescape from 'unescape';

// export const normalizeHtml = html => html.replace('\n', '');

export const htmlStringify = html =>
  unescape(html.replace(/<br>/gm, '\n').replace(/<\/?[^>]*>/gm, ''));
