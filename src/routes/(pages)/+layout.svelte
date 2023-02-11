<script lang="ts">
  import Modal from 'svelte-simple-modal';
  import '../../css/app.css';
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<Modal
  classWindow="h-screen !my-0 !rounded-none"
  classContent="!h-full"
  classCloseButton="!top-0 !right-0 !w-[52px] !h-[52px]
                    !text-center !bg-biruza hover:!bg-pinky !trans-color
                    !shadow-none !rounded-none
                    before:!bg-white before:!w-6 before:!left-[14px]
                    after:!bg-white  after:!w-6  after:!left-[14px]"
>
  <div class="text-[15px] text-graphite">
    <Header />
    <slot />
    <Footer />
  </div>
</Modal>
