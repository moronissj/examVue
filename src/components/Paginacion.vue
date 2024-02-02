<template>
  <div>
    <b-container>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-container>
    <h1>Paginación</h1>
    <br>
    <br>
    <h2>Vehículos Registrados</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Marca</th>
          <th scope="col">Modelo</th>
          <th scope="col">Año</th>
          <th scope="col">Serie</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehicle in vehicles" :key="vehicle.marca + vehicle.modelo">
          <th scope="row">1</th>
          <td>{{ vehicle.marca }}</td>
          <td>{{ vehicle.modelo }}</td>
          <td>{{ vehicle.anio }}</td>
          <td>{{ vehicle.numeroSerie }}</td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    <nav aria-label="...">
      <ul class="pagination">
        <!-- ... -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    vehicles: {
      type: Array,
      required: true,
    },
  },
  methods: {
    totalPaginas() {
      return Math.ceil(this.vehicles.length / 10);
    },
  },
  data() {
    return {
      items: [
        {
          text: 'Inicio',
          href: '/inicio'
        },
        {
          text: 'Paginación',
          href: 'true'
        },

      ]
    }
  }
};
</script>
