export default function createModalLink(path) {
  return {
    pathname: path,
    state: { isModal: true },
  };
}
