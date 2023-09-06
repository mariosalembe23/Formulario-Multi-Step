<template>
  <main class="w-full mt-10 px-5">
    <div class="text-center">
      <h2 class="dark:text-slate-300 text-slate-900 text-2xl font-extrabold">morphosis</h2>
      <p class="dark:text-slate-400 text-slate-800 font-medium py-3">
        Seja Bem-vindo! Pronto para nova Jornada?
      </p>
    </div>

    <!-- FORMULARIO -->
    <FormLogin />
  </main>
</template>

<script>
import FormLogin from "./FormLogin.vue";
export default {
  components: {
    FormLogin,
  },

  methods: {},
};
</script>

<style scoped></style>
