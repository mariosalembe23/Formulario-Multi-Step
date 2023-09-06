<template>
  <header
    class="m-auto relative max-w-3xl w-full h-16 border-b dark:border-slate-800 border-zinc-300 flex items-center justify-between px-5"
  >
    <div>
      <router-link
        to="/"
        class="font-extrabold logo dark:text-white text-slate-900 text-2xl"
        >.m</router-link
      >
    </div>
    <div class="md:inline-block hidden">
      <nav>
        <ul class="flex items-center space-x-7">
          <li
            :class="{
              'border-b-2 border-slate-900 dark:border-white ':
                $route.path === '/',
            }"
          >
            <router-link
              to="/"
              class="dark:text-white text-slate-900 link font-medium block py-5 transition-all dark:hover:text-slate-400 hover:text-slate-600"
              >Cadastrar</router-link
            >
          </li>
          <li
            :class="{
              'border-b-2 border-slate-900 dark:border-white':
                $route.path === '/login',
            }"
          >
            <router-link
              to="/login"
              class="dark:text-white text-slate-900 link font-medium block py-5 transition-all hover:text-slate-600 dark:hover:text-slate-400"
              >Log In</router-link
            >
          </li>
          <li
            :class="{
              'border-b-2 border-slate-900 dark:border-white':
                $route.path === '/docs',
            }"
          >
            <router-link
              to="/docs"
              class="dark:text-white text-slate-900 link font-medium block py-5 transition-all hover:text-slate-600 dark:hover:text-slate-400"
              >Documentação</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center space-x-3">
      <button
        @click="changeModePage"
        class="dark:text-slate-400 text-cyan-700 transition-all hover:text-slate-900 dark:hover:text-white"
      >
        <svg
          v-if="darkMode"
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
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z"
          />
          <path
            fill-rule="evenodd"
            d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <button
        @click="showItemsLink"
        class="dark:text-slate-400 text-cyan-700 transition-all hover:text-slate-900 dark:hover:text-white inline-block md:hidden"
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
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
    </div>

    <!-- Dropdown -->
  </header>
  <Dropdown />
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  mounted() {
    window.addEventListener("load", this.onWindow);
  },
  methods: {
    onWindow() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        this.darkMode = true;

      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        this.darkMode = false;
      }
    },
    changeModePage() {
      if (!document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        this.darkMode = true;
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        this.darkMode = false;
      }
    },
    showItemsLink() {
      const backMenu = document.querySelector(".backMenu");
      backMenu.classList.remove("hidden");
      backMenu.classList.add("flex");
    },
  },
};
</script>

<style scoped>
.logo {
  font-family: "Poppins", sans-serif;
}
.link {
  font-size: 14px;
}
</style>
