<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-5 col-md-8">
        <div class="card mb-3 shadow">
          <div class="card-header bg-light border-light">Iniciar Sesión</div>
          <div class="card-body text-success">
            <!-- exito servidor -->
            <div class="mb-3">
              <div class="alert alert-success" role="alert">login_exitoso</div>
            </div>
            <!-- errores del servidor -->
            <div class="mb-3">
              <div class="alert alert-danger" role="alert">
                error_servidor_login
              </div>
            </div>
            <form>
              <div class="form-floating mb-3">
                <input
                  v-model="form.correo"
                  type="email"
                  class="form-control"
                  id="floatingInputCC"
                  placeholder="Correo"
                />
                <label for="floatingInputCC">Correo</label>
                <div class="col-auto mt-1">
                  <span id="floatingInputCC" class="form-text text-danger">
                    errores.correo
                  </span>
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  v-model="form.contrasena"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Contraseña"
                />
                <label for="password">Contraseña</label>
                <div class="col-auto mt-1">
                  <span id="password" class="form-text text-danger">
                    errores.contrasena
                  </span>
                </div>
              </div>

              <button type="submit" class="btn btn-info float-end">
                Iniciar sesión
              </button>
            </form>
            <!-- 
          <div v-else>
            <div>
              <h4 style="text-align: center">
                Ya has iniciado sesión
                <strong>{{ usuario_autenticado.nombre }}</strong>
              </h4>
            </div>
            <a
              href="/"
              class="btn btn-outline-success mt-2 col-12"
              style="float: right"
              >Inicio</a
            >
          </div>
           -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      form: {
        correo: "",
        contrasena: ""
      },
      errores: {
        correo: "",
        contrasena: ""
      }
    };
  }
};
</script>
