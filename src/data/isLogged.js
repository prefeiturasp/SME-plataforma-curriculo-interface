export default function isLogged() {
  const user = localStorage.getItem('accessToken');
  return !!user;
}
