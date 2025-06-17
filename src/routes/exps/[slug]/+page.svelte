<script lang="ts">
  import { marked } from 'marked';

  // Tipizzazione opzionale
  export let data: {
    exp: {
      meta: {
        title: string;
        date: string;
        slug: string;
      };
      content: string;
    };
  };
</script>

<article>
  <h1>{data.exp.meta.title}</h1>
  <p><i>{data.exp.meta.date}</i></p>
  {@html marked(data.exp.content)}
</article>
