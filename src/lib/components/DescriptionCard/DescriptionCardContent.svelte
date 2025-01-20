<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        jobTitle: string;
        jobDescription: Snippet;
    }

    let { jobTitle, jobDescription }: Props = $props();
</script>

<div class="col-span-3 flex flex-col gap-2 mt-0.5">
    <h4 class="text-white text-2xl font-normal">
        { jobTitle }
    </h4>

    <p class="text-[#7F94A6] text-xl font-normal w-3/4 max-sm:w-11/12">
        {@render jobDescription()}
    </p>
</div>