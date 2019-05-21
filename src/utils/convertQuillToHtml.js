import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { API_URL } from 'data/constants';

export default function convertQuillToHtml(data) {
  const ops = typeof data === 'string' ? JSON.parse(data).ops : data;

  ops.forEach(item => {
    if (item.insert.image) {
      item.insert.image = API_URL + item.insert.image;

      if (item.attributes) {
        if (item.attributes.style || item.attributes['data-caption']) {
          item.insert.customImage = item.insert.image;
          delete item.insert.image;
        }
      }
    } else if (item.insert.formula) {
      item.insert.formula = `$$${item.insert.formula}$$`;
    }
  });

  const converter = new QuillDeltaToHtmlConverter(ops);

  converter.renderCustomWith(function(op, context) {
    if (op.insert.type === 'customImage') {
      const src = op.insert.value;
      const attrs = op.attributes;
      const style = attrs.style || '';
      const width = attrs.width || '';
      const caption = attrs['data-caption'];

      if (caption) {
        const style1 = width ? `width: ${width}px; ${style}` : style;
        return `<div class="ql-image-wrapper" style="${style1}">
          <img src="${src}" />
          <sub>${caption}</sub>
        </div>`;
      } else {
        return `<img src="${src}" style="${style}" width="${width}" />`;
      }
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