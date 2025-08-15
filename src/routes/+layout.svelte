<script lang="ts">
    import "../app.css";
    import { afterNavigate } from "$app/navigation";
    import { SvelteToast } from '@zerodevx/svelte-toast'

    afterNavigate(() => {
        (window as any).HSStaticMethods.autoInit();
    });
</script>

<style>
    :root {
      --toastContainerTop: auto;
      --toastContainerRight: auto;
      --toastContainerBottom: 2rem;
      --toastContainerLeft: calc(50vw - 8rem);
    }
</style>

<slot />
<SvelteToast options={{ reversed: true, intro: { y: 102 } }} />
