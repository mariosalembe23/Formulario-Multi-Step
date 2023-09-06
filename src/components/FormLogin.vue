<template>
  <div class="max-w-xl mt-6 w-full m-auto">
    <form @submit="(e) => e.preventDefault()">
      <div class="grid w-full grid-cols-1 gap-5">
        <div
          class="input-group w-full flex items-center space-x-2 bg-gray-200 dark:bg-slate-800 px-4 rounded-md"
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
            type="email"
            class="w-full peer py-3 outline-none dark:text-white text-slate-900 bg-transparent px-1 rounded-md font-medium"
            name="email"
            id="email"
            placeholder="Entre com seu E-mail ou Utilizador "
          />
        </div>
        <div
          class="input-group w-full flex items-center space-x-2 dark:bg-slate-800 bg-gray-200 px-4 rounded-md"
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
            class="dark:bg-cyan-700 bg-slate-900 transition-all hover:bg-slate-950 dark:hover:bg-cyan-800 text-white font-semibold w-full py-3 rounded-md"
          >
            Entrar
          </button>
        </div>

        <div class="midea mt-3 text-center">
          <p class="dark:text-slate-300 text-slate-800 font-medium">
            Ou Podes Entrar com:
          </p>
          <div class="flex items-center justify-center mt-6 space-x-3">
            <a
              href="#"
              class="w-10 h-10 transition-all dark:bg-white bg-slate-900 dark:hover:bg-white hover:bg-slate-800 dark:hover:border-0 dark:hover:text-white dark:hover:bg-transparent hover:text-slate-200 rounded-full border-0 border-gray-300 dark:text-slate-900 text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-google w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                />
              </svg> </a
            ><a
              href="#"
              class="w-10 h-10 transition-all dark:bg-white bg-slate-900 dark:hover:bg-white hover:bg-slate-800 dark:hover:border-0 dark:hover:text-white dark:hover:bg-transparent hover:text-slate-200 rounded-full border-0 border-gray-300 dark:text-slate-900 text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-facebook w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 transition-all dark:bg-white bg-slate-900 dark:hover:bg-white hover:bg-slate-800 dark:hover:border-0 dark:hover:text-white dark:hover:bg-transparent hover:text-slate-200 rounded-full border-0 border-gray-300 dark:text-slate-900 text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-twitter w-5 h-6"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
              </svg>
            </a>
          </div>
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
