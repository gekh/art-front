<script lang="ts">
  // animation of loading dots
  let dots = 1;
  setInterval(() => {
    if (dots < 100) {
      dots += 1;
    } else {
      return;
    }
  }, 100);
</script>

<div class="p-20 text-[30px] opacity-30">Загрузка..{'.'.repeat(dots)}</div>
