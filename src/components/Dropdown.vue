<template>
  <aside
    class="fixed w-full h-screen backMenu left-0 top-0 p-3 hidden justify-center md:justify-end"
  >
    <div
      class="offcanvas p-5 shadow-lg bg-white dark:bg-slate-800 rounded-lg h-60"
    >
      <header class="flex items-center justify-between w-full">
        <h4 class="text-slate-800 dark:text-white font-medium">Menu</h4>
        <button
          @click="closeOffCanvas"
          class="text-cyan-700 dark:text-slate-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </header>
      <main class="mt-8">
        <nav>
          <ul class="flex flex-col space-y-6">
            <li @click="closeOffCanvas">
              <router-link
              
                to="/"
                class="flex items-center linkOffCanvas font-medium dark:text-slate-300 dark:hover:text-cyan-500 text-slate-800 hover:text-cyan-600 transition-all"
              >
                Cadastrar
              </router-link>
            </li>
            <li @click="closeOffCanvas">
              <router-link
                to="/login"
                class="flex items-center linkOffCanvas font-medium dark:text-slate-300 dark:hover:text-cyan-500 text-slate-800 hover:text-cyan-600 transition-all"
              >
                Log In
              </router-link>
            </li>
            <li @click="closeOffCanvas">
              <router-link
                to="/docs"
                class="flex items-center linkOffCanvas font-medium dark:text-slate-300 dark:hover:text-cyan-500 text-slate-800 hover:text-cyan-600 transition-all"
              >
                Documentação
              </router-link>
            </li>
          </ul>
        </nav>
        
      </main>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    closeOffCanvas() {
      const backMenu = document.querySelector(".backMenu");

      backMenu.classList.add("hidden");
      backMenu.classList.remove("flex");
    },
  },
};
</script>

<style scoped>
.backMenu {
  backdrop-filter: blur(10px);
}
.offcanvas {
  max-width: 20rem;
  width: 100%;
}
.linkOffCanvas {
  font-size: 15px;
}
</style>
