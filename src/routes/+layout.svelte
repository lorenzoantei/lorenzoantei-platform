<script>
  let { children } = $props();
  import "../app.css";
  import Footer from '../components/Footer.svelte'; // Assicurati che il path sia corretto
</script>

{@render children()}

<Footer />