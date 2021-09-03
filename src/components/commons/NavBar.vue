<template>
  <div>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-light p-4">
        <h5 class="h4">Moras Manantiales</h5>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register"
                >Registro</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link" to="/login"
                >Inicio de sesión</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin-proveedores"
                >Administrar proveedores</router-link
              >
            </li>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                User
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Log Out</a>
              </div>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
