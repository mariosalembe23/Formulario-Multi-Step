<template>
  <div class="max-w-xl mt-6 w-full m-auto">
    <form @submit="(e) => e.preventDefault()">
      <div class="grid w-full grid-cols-1 gap-5">
        <div
          class="input-group w-full  focus-within:ring-2 dark:focus-within:ring-cyan-600 ring-slate-600 flex items-center space-x-2 dark:bg-slate-800 bg-gray-200 px-4 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 dark:text-white text-slate-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <input
            type="text"
            class="w-full py-3 outline-none text-slate-900 dark:text-white bg-transparent px-1 rounded-md font-medium"
            name="name"
            id="name"
            placeholder="Insira seu Nome Completo"
          />
        </div>
        <div
          class="input-group w-full focus-within:ring-2 dark:focus-within:ring-cyan-600 ring-slate-600 flex items-center space-x-2 dark:bg-slate-800 bg-gray-200 px-4 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 dark:text-white text-slate-600"
          >
            <path
              stroke-linecap="round"
              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
          </svg>

          <input
            type="email"
            class="w-full py-3 outline-none dark:text-white text-slate-900 bg-transparent px-1 rounded-md font-medium"
            name="email"
            id="email"
            placeholder="Insira seu E-mail"
          />
        </div>
        <div
          class="input-group w-full focus-within:ring-2 dark:focus-within:ring-cyan-600 ring-slate-600 flex items-center space-x-2 dark:bg-slate-800 bg-gray-200 px-4 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 dark:text-white text-slate-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <input
            type="password"
            class="w-full py-3 outline-none dark:text-white text-slate-900 bg-transparent px-1 rounded-md font-medium"
            name="senha"
            id="senha"
            placeholder="Digite sua Senha "
          />
          <button
            @click="showPass"
            class="dark:text-slate-400 text-slate-900 transition-all hover:text-slate-600 dark:hover:text-white"
          >
            <svg
              v-if="!isVisible"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </button>
        </div>
        <div class="w-full">
          <button
            class="dark:bg-cyan-700  bg-slate-900 transition-all hover:bg-slate-950 dark:hover:bg-cyan-800 text-white font-semibold w-full py-3 rounded-md"
          >
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    showPass() {
      const senha = document.getElementById("senha");

      if (senha.type === "password") {
        this.isVisible = true;
        senha.type = "text";
      } else {
        senha.type = "password";
        this.isVisible = false;
      }
    },
  },
};
</script>

<style scoped>
.labelForm {
  font-size: 13px;
  font-family: "Inter", sans-serif;
}
input {
  font-family: "Inter", sans-serif;
}
</style>
