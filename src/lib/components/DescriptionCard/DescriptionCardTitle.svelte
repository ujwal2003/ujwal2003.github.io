<script lang="ts">
    interface Props {
        company: string;
        duration: string;
    }

    let { company, duration }: Props = $props();
</script>

<div class="text-white flex flex-col gap-2">
    <h3 class="text-3xl font-medium">
        { company }
    </h3>

    <p class="text-[#768087] text-lg font-normal">
        { duration }
    </p>
</div>