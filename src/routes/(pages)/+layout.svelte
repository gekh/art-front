<script lang="ts">
  import '../../css/app.css';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<div class="text-[15px]">
<Header />
<slot></slot>
<Footer />
</div>