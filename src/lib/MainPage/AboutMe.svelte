<script lang="ts">
    import HighlightLink from "$lib/components/highlightLink.svelte";
import UpButton from "../components/upButton.svelte";
</script>

<h1 class="flex text-white font-semibold text-5xl mt-24 mr-auto max-sm:text-4xl max-sm:mt-14 pt-4" id="AboutMe">
    About Me
    <div class="pt-2 pl-4 hover:motion-safe:animate-pulse opacity-35 hidden lg:block">
        <UpButton url="#Top" />
    </div>
</h1>

<p class="text-white text-wrap text-2xl pr-44 mx-auto mt-6 leading-relaxed 
            max-sm:pr-3 max-sm:text-xl max-sm:mt-4 max-sm:pb-12 max-sm:leading-7">
    Hey there! I'm 
    <span class="bg-sky-500/[.05]">
        Ujwal Joshi,
    </span> 
    a senior at the 
    <HighlightLink href="https://www.uh.edu/">
        University of Houston,
    </HighlightLink>
     currently pursuing a B.S. in Computer Science with a minor in Mathematics. I'm passionate about all things tech-related, with a keen interest in software engineering, data science, and web development. I am excited to contribute to and experience more technological innovations in my time and aspire to make a impact in the field.
</p>