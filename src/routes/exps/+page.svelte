// routes/exps/+page.svelte

<script lang="ts">
    export let data;
</script>

{#each data.exps as exp}
    <a href={`/exps/${exp.meta.slug}`}>
        <h2>{exp.meta.title}</h2>
        <p>{exp.meta.date}</p>
    </a>
{/each}