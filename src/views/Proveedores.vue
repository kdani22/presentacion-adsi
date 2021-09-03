<template>
  <div class="container">
    <div class="row">
      <h1>Administrar proveedores</h1>
      <div class="col-xl-9">
        <h3 id="tabla-proveedores">Lista de proveedores</h3>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Telefóno</th>
                <th scope="col">Celular</th>
                <th scope="col">Banco</th>
                <th class="text-center" scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="fog"
                v-for="proveedor in proveedores"
                :key="proveedor.id"
              >
                <td>{{ proveedor.nombre_completo }}</td>
                <td>{{ proveedor.telefono }}</td>
                <td>{{ proveedor.celular }}</td>
                <td>{{ proveedor.banco }}</td>
                <td class="text-center" style="width: 16%">
                  <a
                    @click="cambiarSeleccion('Editar', proveedor)"
                    title="Editar"
                    href="#formulario"
                    class="btn btn-outline-info btn-sm mb-1 mx-1"
                    ><img src="../assets/icons/pencil.svg" alt="Editar"
                  /></a>
                  <a
                    @click="eliminarproveedorLista(proveedor)"
                    title="Eliminar"
                    href="#tabla-proveedores"
                    class="btn btn-outline-danger btn-sm mb-1 mx-1"
                    ><img src="../assets/icons/trash.svg" alt="Eliminar"
                  /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="formulario" class="col-xl-3 mb-5 border-start">
        <h3>{{ seleccionModo }} proveedor</h3>
        <form @submit.prevent="validarDatosFormulario">
          <div class="mb-3">
            <label for="crearProveedorNombre" class="form-label">Nombre</label>
            <input
              v-model="form.nombre_completo"
              @input="form.nombre_completo = form.nombre_completo.toUpperCase()"
              type="text"
              class="form-control"
              id="crearProveedorNombre"
            />
            <div class="col-auto mt-1">
              <span class="form-text text-danger">
                {{ errores.nombre_completo }}
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label for="crearProveedorTelefono" class="form-label"
              >Telefóno</label
            >
            <input
              v-model="form.telefono"
              type="text"
              class="form-control"
              id="crearProveedorTelefono"
            />
            <div class="col-auto mt-1">
              <span class="form-text text-danger">
                {{ errores.telefono }}
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label for="crearProveedorCelular" class="form-label"
              >Celular</label
            >
            <input
              v-model="form.celular"
              type="text"
              class="form-control"
              id="crearProveedorCelular"
            />
            <div class="col-auto mt-1">
              <span class="form-text text-danger">
                {{ errores.celular }}
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label for="crearProveedorEps" class="form-label">EPS</label>
            <input
              v-model="form.eps"
              @input="form.eps = form.eps.toUpperCase()"
              type="text"
              class="form-control"
              id="crearProveedorEps"
            />
            <div class="col-auto mt-1">
              <span class="form-text text-danger">
                {{ errores.eps }}
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label for="crearProveedorBanco" class="form-label"
              >Nombre banco</label
            >
            <input
              v-model="form.banco"
              @input="form.banco = form.banco.toUpperCase()"
              type="text"
              class="form-control"
              id="crearProveedorBanco"
            />
            <div class="col-auto mt-1">
              <span class="form-text text-danger">
                {{ errores.banco }}
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label for="crearProveedorCuenta" class="form-label">Cuenta</label>
            <input
              v-model="form.cuenta"
              type="text"
              class="form-control"
              id="crearProveedorCuenta"
            />
            <div class="col-auto mt-1">
              <span class="form-text text-danger">
                {{ errores.cuenta }}
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label for="crearProveedorCuenta" class="form-label"
              >Tipo de Cuenta</label
            >
            <select v-model="form.tipo_cuenta" class="form-select">
              <option value="0" selected>--- SELECCIONE ---</option>
              <option value="AHORROS">Ahorros</option>
              <option value="CORRIENTE">Corriente</option>
            </select>
            <div class="col-auto mt-1">
              <span class="form-text text-danger">
                {{ errores.tipo_cuenta }}
              </span>
            </div>
          </div>
          <button
            v-show="seleccionModo === 'Editar'"
            @click="cambiarSeleccion('Crear')"
            type="reset"
            class="btn btn-outline-info float-start"
          >
            Limpiar para crear
          </button>
          <button type="submit" class="btn btn-info float-end">
            {{ seleccionModo }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "AdministrarProveedores",
  data: () => {
    return {
      /* proveedores: [
        {
          id_proveedor: 1,
          nombre_completo: "Juan Pelaez",
          telefono: "312312341",
          celular: "1241324231343",
          eps: "SURA",
          banco: "BANCOLOMBIA",
          cuenta: "1243245352342",
          tipo_cuenta: "AHORROS"
        },
        {
          id_proveedor: 2,
          nombre_completo: "Pablo Zuleta",
          telefono: "312312341",
          celular: "1241324231343",
          eps: "COLP",
          banco: "BANCO DE BOGOTA",
          cuenta: "34323453253452342",
          tipo_cuenta: "CORRIENTE"
        }
      ], */
      seleccionModo: "Crear",
      form: {
        id_proveedor: "",
        nombre_completo: "",
        telefono: "",
        celular: "",
        eps: "",
        banco: "",
        cuenta: "",
        tipo_cuenta: "0"
      },
      errores: {
        nombre_completo: "",
        telefono: "",
        celular: "",
        eps: "",
        banco: "",
        cuenta: "",
        tipo_cuenta: ""
      }
    };
  },
  async created() {
    await this.obtener_proveedores();
  },
  computed: {
    ...mapState(["proveedores"])
  },
  methods: {
    ...mapActions([
      "registrarProveedor",
      "obtener_proveedores",
      "eliminarProveedor",
      "editarProveedor"
    ]),
    cambiarSeleccion(modo, proveedor = {}) {
      this.limpiarErrores();
      this.seleccionModo = modo;
      if (modo === "Editar") {
        this.form.id = proveedor.id;
        this.form.nombre_completo = proveedor.nombre_completo;
        this.form.telefono = proveedor.telefono;
        this.form.celular = proveedor.celular;
        this.form.eps = proveedor.eps;
        this.form.banco = proveedor.banco;
        this.form.cuenta = proveedor.cuenta;
        this.form.tipo_cuenta = proveedor.tipo_cuenta;
      } else if (modo === "Crear") {
        for (const llave in this.form) {
          this.form[llave] = "";
        }
      }
    },
    async validarDatosFormulario() {
      this.limpiarErrores();
      /* Validacion Nombre */
      if (this.form.nombre_completo === "") {
        this.errores.nombre_completo = "Debes rellenar este campo.";
      }

      /* Validacion banco */
      if (this.form.banco === "") {
        this.errores.banco = "Debes rellenar este campo.";
      }

      /* Validacion cuenta */
      if (this.form.cuenta === "") {
        this.errores.cuenta = "Debes rellenar este campo.";
      }

      /* Validacion tipo_cuenta */
      if (this.form.tipo_cuenta === "0") {
        this.errores.tipo_cuenta = "Debes seleccionar un valor.";
      }

      if (this.validarFormulario()) {
        if (this.seleccionModo === "Crear") {
          await this.registrarProveedor(this.form);
          for (const llave in this.form) {
            this.form[llave] = "";
          }
        } else if (this.seleccionModo === "Editar") {
          await this.editarProveedor(this.form);
          for (const llave in this.form) {
            this.form[llave] = "";
          }
          this.seleccionModo = "Crear";
        }
      } else {
        event.preventDefault();
      }
    },
    validarFormulario() {
      for (const llave in this.errores) {
        if (this.errores[llave] !== "") {
          return false;
        }
      }
      return true;
    },
    limpiarErrores() {
      for (const llave in this.errores) {
        this.errores[llave] = "";
      }
    },
    async eliminarproveedorLista(proveedor) {
      if (
        confirm(
          "¿Estas seguro de eliminar el proveedor " +
            proveedor.nombre_completo +
            "?"
        )
      ) {
        await this.eliminarProveedor(proveedor);
      }
    }
  }
};
</script>

<style scoped>
.fog {
  cursor: default;
}
</style>
