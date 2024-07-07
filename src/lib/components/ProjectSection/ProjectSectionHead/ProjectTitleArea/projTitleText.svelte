<style>
    .titleFontSize {
        font-size: var(--pcFontSize, 3rem);
    }

    @media not all and (min-width: 640px) {
        .titleFontSize {
            font-size: var(--mobileFontSize, 32px);
        }
    }
</style>

<h2 class="text-white font-medium leading-none w-60 max-sm:w-32 titleFontSize">
    <slot></slot>
</h2>