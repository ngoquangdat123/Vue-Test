export default function ({ store, redirect, route }) {
    // If the user is not authenticated
    if (!store.state.isAuthenticated && route.path != '/register') {
      return redirect('/login')
    }
  }