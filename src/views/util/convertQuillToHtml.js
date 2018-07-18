import QuillDeltaToHtmlConverter from 'quill-delta-to-html';
import { API_URL } from '../../constants';

export default function convertQuillToHtml(json) {
  const ops = JSON.parse(json).ops;
  const converter = new QuillDeltaToHtmlConverter(ops);

  converter.beforeRender(function(groupType, data) {
    if (data.ops) {
      data.ops.forEach(item  => {
        if (item.insert.type === 'image') {
          item.insert.value = API_URL + item.insert.value;
        }
      })
    }
  });

  converter.renderCustomWith(function(customOp, contextOp) {
    if (customOp.insert.type === 'divider') {
      return '<hr />';
    } else {
      return null;
    }
  });

  return converter.convert();
}
