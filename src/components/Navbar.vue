<template>
  <header
    class="m-auto max-w-3xl w-full h-16 border-b border-slate-800 flex items-center justify-between px-5"
  >
    <div>
      <a href="#" class="font-extrabold logo text-white text-2xl">.m</a>
    </div>
    <div class="md:inline-block hidden">
      <nav>
        <ul class="flex items-center space-x-7">
          <li :class="{ 'border-b-2 border-white': $route.path === '/' }">
            <router-link
              to="/"
              class="text-white link font-medium block py-5 transition-all hover:text-slate-400"
              >Cadastrar</router-link
            >
          </li>
          <li
            :class="{ 'border-b-2 border-slate-3': $route.path === '/login' }"
          >
            <router-link
              to="/login"
              class="text-white link font-medium block py-5 transition-all hover:text-slate-400"
              >Log In</router-link
            >
          </li>
          <li :class="{ 'border-b-2 border-slate-3': $route.path === '/docs' }">
            <router-link
              to="/docs"
              class="text-white link font-medium block py-5 transition-all hover:text-slate-400"
              >Documentação</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center space-x-3">
      <button class="text-slate-400 transition-all hover:text-white">
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
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </button>
      <a href="#" class="text-slate-400 transition-all hover:text-white">
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
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </a>
      <button
        class="text-slate-400 transition-all hover:text-white md:hidden inline-block"
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
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
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
