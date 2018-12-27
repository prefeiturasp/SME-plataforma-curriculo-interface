export default function isLogged() {
  const user = sessionStorage.getItem('user');
  return !!user;
}
