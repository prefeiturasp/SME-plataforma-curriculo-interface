export default function isLogged() {
  const user = sessionStorage.getItem('accessToken');
  return !!user;
}
