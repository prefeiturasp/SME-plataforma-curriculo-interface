export default function formatFileSize(size) {
  const ONE_MEGABYTE = 1024 * 1024;
  const readableSize = size > ONE_MEGABYTE ? size / ONE_MEGABYTE : size / 1024;
  const roundedSize = Math.round(readableSize);
  const unit = size > ONE_MEGABYTE ? 'MB' : 'KB';
  return `${roundedSize} ${unit}`;
}
