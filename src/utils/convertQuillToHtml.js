import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { API_URL } from 'data/constants';

export default function convertQuillToHtml(json) {
  const ops = JSON.parse(json).ops;

  ops.forEach(item => {
    if (item.insert.image) {
      item.insert.image = API_URL + item.insert.image;

      if (item.attributes && item.attributes.style) {
        item.insert.imageWithStyle = item.insert.image;
        delete item.insert.image;
      }
    }
  });

  const converter = new QuillDeltaToHtmlConverter(ops);

  converter.renderCustomWith(function(op, context) {
    if (op.insert.type === 'imageWithStyle') {
      const attrs = op.attributes;
      const src = op.insert.value;
      return `<img style="${attrs.style}" width="${
        attrs.width
      }" src="${src}" />`;
    } else if (op.insert.type === 'divider') {
      return '<hr />';
    } else {
      return null;
    }
  });

  converter.afterRender(function(groupType, html) {
    if (groupType === 'video') {
      html = `<div class="ql-video-wrapper">${html}</div>`;
    }
    return html;
  });

  return converter.convert();
}
