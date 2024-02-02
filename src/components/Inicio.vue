<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <h1>Inicio Bienvenido </h1>
    <div>
      <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg">
    </div>

    <div>
      <router-link to="/main" class="bym">Formulario</router-link>
      <router-link to="/pagination" class="bym">Paginación</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            href: '#'
          },

        ]
      }
    }
  }
</script>
<style>
.btn-inicio {
  padding: 20px;
  margin: 10px;
}

.btn-inicio a {
  text-decoration: none;
  color: white;
}

.bym {
  margin: 5vh;
}
</style>
