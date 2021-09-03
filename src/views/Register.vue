<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-5 col-md-8">
        <div class="card mb-3 shadow">
          <div class="card-header bg-light border-light">Registrar cuenta</div>
          <div class="card-body text-success">
            <!-- exito servidor -->
            <div v-if="registro_exitoso" class="mb-3">
              <div class="alert alert-success" role="alert">
                {{ registro_exitoso }}
              </div>
            </div>
            <!-- errores del servidor -->
            <div v-if="error_servidor_register" class="mb-3">
              <div class="alert alert-danger" role="alert">
                {{ error_servidor_register }}
              </div>
            </div>
            <form @submit.prevent="validacionRegistro">
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
                    {{ errores.correo }}
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
                    {{ errores.contrasena }}
                  </span>
                </div>
              </div>

              <button type="submit" class="btn btn-info float-end">
                Registrar
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
import { mapActions, mapState, mapMutations } from "vuex";
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
  },
  computed: {
    ...mapState(["error_servidor_register", "registro_exitoso"])
  },
  methods: {
    ...mapMutations(["SET_ERROR_SERVIDOR_REGISTER", "SET_REGISTRO_EXITOSO"]),
    ...mapActions(["registrarCuenta"]),
    async validacionRegistro() {
      this.mostrarLoading = true;
      for (const llave in this.errores) {
        this.errores[llave] = "";
      }
      /* Validacion Correo */
      if (
        /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3,4})+$/.test(
          this.form.correo
        ) ||
        this.form.correo === ""
      ) {
        this.errores.correo = "Correo no valido.";
      }

      /* Validacion Contraseña */
      if (
        !/^(?=\w*\d)\S{6,16}$/g.test(this.form.contrasena) ||
        this.form.contrasena === ""
      ) {
        this.errores.contrasena =
          "Contraseña no valida. Recuerda que la contraseña debe tener entre 6 y 16 digitos, y no debe tener espacios en blanco.";
      }

      /* Envio Formulario */
      await this.SET_ERROR_SERVIDOR_REGISTER("");
      await this.SET_REGISTRO_EXITOSO("");
      if (this.errores.contrasena === "" && this.errores.correo === "") {
        await this.registrarCuenta(this.form);
        if (this.error_servidor_register) {
          event.preventDefault();
        } else {
          for (const llave in this.form) {
            this.form[llave] = "";
          }
        }
      } else {
        event.preventDefault();
      }
    }
  }
};
</script>
