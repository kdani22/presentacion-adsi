import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    proveedores: [],
    error_servidor_register: "",
    registro_exitoso: ""
  },
  mutations: {
    SET_PROVEEDORES(state, value) {
      state.proveedores = value;
    },
    SET_ERROR_SERVIDOR_REGISTER(state, value) {
      state.error_servidor_register = value;
    },
    SET_REGISTRO_EXITOSO(state, value) {
      state.registro_exitoso = value;
    }
  },
  actions: {
    async registrarProveedor({ dispatch }, datos) {
      await firebase
        .firestore()
        .collection("proveedores")
        .add({
          nombre_completo: datos.nombre_completo,
          telefono: datos.telefono,
          celular: datos.celular,
          eps: datos.eps,
          banco: datos.banco,
          cuenta: datos.cuenta,
          tipo_cuenta: datos.tipo_cuenta
        })
        .then(() => {
          return dispatch("obtener_proveedores");
        })
        .catch(() => {
          return dispatch("obtener_proveedores");
        });
    },
    async editarProveedor({ dispatch }, datos) {
      await firebase
        .firestore()
        .collection("proveedores")
        .doc(datos.id)
        .update({
          nombre_completo: datos.nombre_completo,
          telefono: datos.telefono,
          celular: datos.celular,
          eps: datos.eps,
          banco: datos.banco,
          cuenta: datos.cuenta,
          tipo_cuenta: datos.tipo_cuenta
        })
        .then(() => {
          alert("Proveedor editado exitosamente.");
          return dispatch("obtener_proveedores");
        })
        .catch((error) => {
          alert("Ocurrio un error, no se edito el proveedor.");
          console.log(error);
          return dispatch("obtener_proveedores");
        });
    },
    async eliminarProveedor({ dispatch }, datos) {
      await firebase
        .firestore()
        .collection("proveedores")
        .doc(datos.id)
        .delete()
        .then(() => {
          alert("Proveedor eliminado exitosamente.");
          return dispatch("obtener_proveedores");
        })
        .catch(() => {
          alert("Ocurrio un error, no se eliminó el proveedor.");
          return dispatch("obtener_proveedores");
        });
    },
    async obtener_proveedores({ commit }) {
      let proveedores = [];
      let proveedor = {};
      await firebase
        .firestore()
        .collection("proveedores")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            proveedor = doc.data();
            proveedor.id = doc.id;
            proveedores.push(proveedor);
          });
          commit("SET_PROVEEDORES", proveedores);
        });
    },
    async registrarCuenta({ commit }, datos) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(datos.correo, datos.contrasena)
        .then(() => {
          commit("SET_REGISTRO_EXITOSO", "¡Cuenta creada exitosamente!");
          /* alert("Usuario registrado exitosamente."); */
        })
        .catch((error) => {
          if (error.code == "auth/email-already-in-use") {
            commit(
              "SET_ERROR_SERVIDOR_REGISTER",
              "La dirección de correo electrónico ya está siendo utilizada por otra cuenta."
            );
          } else {
            commit("SET_ERROR_SERVIDOR_REGISTER", error.message);
          }
        });
    }
  },
  modules: {}
});
