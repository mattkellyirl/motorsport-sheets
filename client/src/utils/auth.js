import { jwtDecode } from "jwt-decode";

class AuthService {
  getProfile() {
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("authToken");
  }

  login(idToken) {
    localStorage.setItem("authToken", idToken);
    window.location.assign("/dashboard");
  }

  logout() {
    localStorage.removeItem("authToken");
    window.location.assign("/login");
  }
}

export default new AuthService();
