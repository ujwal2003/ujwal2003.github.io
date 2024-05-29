<script lang="ts">
    import { navIcons } from '$lib/icons/navIcons';
    const NAV_MARGINS: any = {Home: 'mt-0.5', About: 'mb-1'}
</script>

<nav class='text-white text-2xl flex justify-between px-8 pt-8 pb-12'>
    <div class="flex gap-4">
        {#each Object.entries(navIcons) as [navItem, icon]}
            <div class="flex gap-1">
                {@html icon}
                <span>{navItem}</span>
            </div>
        {/each}
    </div>

    <div>
        <span>[in]</span>
        <span>[gh]</span>
    </div>
</nav>