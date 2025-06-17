<script lang="ts">
    export let exps: {
      meta: {
        title: string;
        date: string;
        slug: string;
      };
    }[];
  </script>
  
  <section>
    <h2>Latest experiences</h2>
    <ul>
      {#each exps as exp}
        <li>
          <a href={`/exps/${exp.meta.slug}`}>
            {exp.meta.title} — <small>{exp.meta.date}</small>
          </a>
        </li>
      {/each}
    </ul>
    
    <div class="py-12">
        <a href="/exps" class="mt-6 pr-8 pt-8 pb-1 bg-black hover:animate-pulse bg-opacity-50 text-white opacity-100 hover:duration-3000">More...</a>
    </div>

  </section>
  
  <style>
    
  </style>
  