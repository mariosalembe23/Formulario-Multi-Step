<template>
  <main class="w-full mt-10 px-5">
    <div class="text-center">
      <h2 class="dark:text-slate-300 text-slate-900 text-2xl font-extrabold">morphosis</h2>
      <p class="dark:text-slate-400 text-slate-800 font-medium py-3">
        Inscreva-te para Fazeres Parte dessa Jornada!
      </p>
     
    </div>

    <!-- FORMULARIO -->
    <FormRegister />
  </main>
</template>

<script>
import FormRegister from "./FormRegister.vue";
export default {
  components: {
    FormRegister,
  },
  methods: {
    
  },
};
</script>

<style scoped>
h2 {
  font-family: "Poppins";
}
</style>
