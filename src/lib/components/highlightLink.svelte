<script lang="ts">
    export let href: string;
</script>

<a  class="hover:bg-none hover:underline hover:decoration-sky-500/[.25] hover:underline-offset-4 hover:decoration-2 hover:decoration-double"
    href={href} target="_blank">
    <span class="bg-sky-500/[.05]">
        <slot></slot>
    </span>
</a>