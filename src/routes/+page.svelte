<script>
  import EditorIframe from '../components/EditorIframe.svelte';
  import RecentExps from '../components/RecentExps.svelte';

  let showMore = false;
  
  const toggleText = () => {
      showMore = !showMore;

    const bioContainer = document.getElementById('bio-container');
      if (bioContainer) {
        bioContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  };

  export let data;


</script>

<style>
  .blink-cursor {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
</style>




<section class="mx-3 md:mx-24">

  <div class="my-24 md:my-12 2xl:my-24 h-auto text-7xl 2xl:text-4xl">
    <h2 class="2xl:text-[100px] font-bold">hello,</h2>
  
    <h1 class="font-bold flex flex-col 2xl:flex-row text-7xl 2xl:text-[90px]">
      <span class="pt-6 2xl:pt-0">I'm</span>
  
      <!-- Spazio tra "I'm" e nome -->
      <div class="hidden 2xl:block w-4"></div>
  
      <!-- Nome e Cognome -->
      <div class="flex flex-col 2xl:flex-row pt-3 2xl:pt-0 items-start 2xl:items-center">
        <!-- Lorenzo -->
        <span class="border-b-4 border-black pb-1">Lorenzo</span>
  
        <!-- Separatore solo su 2xl -->
        <div class="hidden 2xl:block w-4 h-full  border-b-4"></div>
  
        <!-- Rossi + cursore, bordo solo su "Rossi" -->
        <div class="pt-6 2xl:pt-0 flex items-center space-x-2">
          <span class="border-b-4 border-black pb-1">Rossi</span>
          <span class="inline-block blink-cursor text-black/30">|</span>
        </div>
      </div>
    </h1>
  </div>
  
  
  
  

  <div class="h-auto md:max-w-1/2">
    <div id="bio-container" class="text-2xl py-12">

      {#if !showMore}

          <p>I'm a computer artist. I do bizarre live coding sessions with highly questionable Arduino-based contraptions, and moonlight as a full stack web dev and video editor when I'm not frying microcontrollers.
          </p>

            <button 
                class="mt-6 pr-8 pt-8 pb-1 bg-black animate-pulse bg-opacity-50 text-white opacity-100 duration-3000 pointer-events-auto" 
                on:click={toggleText}
              >
                {showMore ? 'Less...' : 'More...'}
                
            </button>

      {:else}

          <div class="space-y-6">

            <p>I am an Italian artist and software engineer, graduated in Net Art and Digital Cultures from the Accademia di Belle Arti di Carrara with the thesis <i>Catturare l'effimero - L’archivio come azione artivista - verso un’estetica dell’effimero</i> (2025). I explore code across networks and realities, moving between digital art and creative programming.</p>

            <p>I’ve taken part in numerous exhibitions, both in physical spaces and across the ether, pursuing a research path that blends irony, hacking, and critical intervention. I’ve created animatronics for theatrical performances, joined live coding nights with highly questionable Arduino-based hardware, and developed audiovisual experiences on the edge between performance and crash.</p>

            <p>Alongside my practice, I collaborate with international entities such as Songlines Production, Omava Production and Lucca Crea (Lucca Comics & Games), handling media management and video editing for various projects... By day, I work as a full stack web developer at Quivi, building custom web applications.</p>

            <p>I approach life as a constant flow, where the only certainty is the process of creating, evolving, and breaking things down to rebuild them again. Again. Again.</p>
            
            <p>Persistence is all.</p>

        </div>

        <button class="-ml-2 pr-1 pt-1 pb-1 hover:bg-black hover:animate-pulse px-2 hover:text-white pointer-events-auto" on:click={toggleText}>
          {showMore ? '' : 'More...'}
        </button>
        
      {/if}
    </div>
    
    
  </div>
  
</section>

<section class="mx-3 md:mx-24">
  <EditorIframe />
</section>

<section class="mx-3 md:mx-24">
  <RecentExps exps={data.recentExps} />
</section>

