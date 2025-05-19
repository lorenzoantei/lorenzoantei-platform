<script lang="ts">
    export let data;
    const { post } = data;
</script>

  <article class="max-w-3xl mx-auto py-12 px-4">
    <h1 class="text-4xl font-bold mb-2">{post.title}</h1>
    <p class="text-sm text-gray-500 mb-6">{post.date}</p>
    <div class="prose prose-lg max-w-none">
      <p>{post.excerpt}</p>
      <!-- In futuro puoi usare markdown o contenuti HTML -->
    </div>
  </article>
  