<template>
  <aside class="m-auto max-w-3xl w-full mt-10 px-5 pb-5">
    <div>
      <header class="flex items-center flex-nowrap space-x-2">
        <span class="dark:text-cyan-400 text-cyan-700 font-medium text-2xl">#</span>
        <h4 class="dark:text-white text-slate-900 text-xl font-bold">Overview</h4>
      </header>
      <main class="mt-3">
        <p class="textInfo dark:text-slate-300 text-slate-700 font-medium md:text-justify">
          Criei este Formulário Multi-Step para Ajudar aos Outros
          Desenvolvedores Fronte-end que Queiram Gastar menos Tempo em
          Construção de Layouts de Formulários. Com Muita Vantagem pelo modo
          <a
            href="https://tailwindcss.com/docs/dark-mode"
            class="px-2 rounded-md bg-cyan-600 font-semibold text-white py-1 underline"
            >Dark e Light</a
          >
          o que é Tendência para Muitas Aplicações modernas.

          <br />
          <br />
          Foram Implementadas Tecnologias Modernas como Vue.js, Vite.js, e
          TailwindCss, o que Facilitou e seria Bom se ao Utilizar este Layout
          saiba o Básico dessas Tecnologias para Ter mais controle e editar da
          Maneira que Precisar para seus Projectos. A Sensação de Carregar
          Componentes sem Recarregar a Página é Sensacional, uma Leveza em seus
          Projectos e isso Muda Tudo.
        </p>
      </main>
    </div>
    <div class="mt-3">
      <header class="flex items-center flex-nowrap space-x-2">
        <span class="dark:text-cyan-400 text-cyan-700 font-medium text-2xl">#</span>
        <h4 class="dark:text-white text-slate-900 text-xl font-bold">Alguma Dúvida?</h4>
      </header>
      <main class="mt-3">
        <p class="textInfo dark:text-slate-300 text-slate-700 font-medium md:text-justify">
          Caso Tenha Alguma Questão Sobre Esta Feature, basta
          <a
            href="https://www.instagram.com/mariosalembe22"
            class="px-2 bg-cyan-600 rounded-md font-semibold text-white py-1 underline"
            >Puxar-me</a
          >
          para a Gente Trocar Ideias ou Consultar a Documentação das Tecnologias
          Aqui Utilizadas:
        </p>
        <ul class="mt-3 flex flex-col space-y-4 list-disc dark:text-cyan-400 text-slate-700 px-5">
          <li>
            <a
              href="https://vuejs.org/guide/introduction.html"
              class="px-2 bg-cyan-600 font-medium rounded-md text-white py-1 underline link-tech"
              >Vue.JS(Componentes, Vue Router...)</a
            >
          </li>
          <li>
            <a
              href="https://vitejs.dev/guide/"
              class="px-2 bg-cyan-600 rounded-md font-medium text-white py-1 underline link-tech"
              >Vite.JS</a
            >
          </li>
          <li>
            <a
              href="https://tailwindcss.com/docs/installation"
              class="px-2 bg-cyan-600 font-medium rounded-md text-white py-1 underline link-tech"
              >TailwindCSS</a
            >
          </li>
        </ul>
      </main>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.textInfo {
  font-size: 15px;
  font-family: "Inter", sans-serif;
  line-height: 28px;
}
.link-tech {
  font-size: 14px;
}
</style>
