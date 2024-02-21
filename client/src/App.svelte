<script>
  import { onMount } from 'svelte';
  
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from './assets/vite.svg';
  import expressjsLogo from './assets/expressjs.svg';
  import nedbLogo from './assets/nedb.svg';
  import ComponentExampleName from './lib/Component-example.svelte';

  let appStatus;

  onMount(async () => {
    const response = await fetch('http://localhost:57806/');
    const { status } = await response.json();
    appStatus = status;
  });


</script>

<div>
  <div>
    <a href="https://www.electronjs.org" target="_blank" rel="noreferrer"> 
      <img src={"https://www.electronjs.org/es/assets/img/logo.svg"} class="logo electron" alt="Electron Logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
    <a href="https://expressjs.com/" target="_blank" rel="noreferrer"> 
      <img src={expressjsLogo} class="logo expressjs" alt="Express Logo" />
    </a>
    <a href="https://github.com/louischatriot/nedb" target="_blank" rel="noreferrer"> 
      <img src={nedbLogo} class="logo nedb" alt="NeDB Logo" />
    </a>
  </div>
  <h1>Electron + Vite + Svelte + Express + NeDB</h1>

  {#if appStatus}
    API-STATUS: <span class="app-status">{appStatus}</span>
  {/if}

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>
  
  <ComponentExampleName text="Click on the logos to learn more" />
</div>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.electron:hover {
    filter: drop-shadow(0 0 2em #2f3242);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .logo.expressjs:hover {
    filter: drop-shadow(0 0 2em grey);
  }
  .logo.nedb:hover {
    filter: drop-shadow(0 0 2em #84cdf0);
  }
  .app-status{
    color: green;
  }
</style>
