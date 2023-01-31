<script lang="ts">
  import '../../css/app.css';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<Header />
<slot></slot>
<Footer />