<script lang="ts">
    import ToolTip from "$lib/components/toolTip.svelte";
    import GithubLarge from "../icons/githubLarge.svelte";
    import LinkedInLarge from "../icons/linkedInLarge.svelte";
    import ResumeIcon from "../icons/resumeIcon.svelte";

</script>


<div class="flex gap-24 mt-12 max-sm:gap-0">
    <ToolTip tip="LinkedIn" applyClass="md:hover:scale-110 max-sm:active:scale-110">
        <a href="https://www.linkedin.com/in/ujwalujoshi/" target="_blank">
            <LinkedInLarge />
        </a>
    </ToolTip>

    <ToolTip tip="GitHub" applyClass="md:hover:scale-110 max-sm:active:scale-110">
        <a href="https://github.com/ujwal2003" target="_blank">
            <GithubLarge />
        </a>
    </ToolTip>

    <ToolTip tip="Resume" applyClass="md:hover:scale-110 max-sm:active:scale-110">
        <a href="/assets/Resume.pdf" target="_blank">
            <ResumeIcon />
        </a>
    </ToolTip>
</div>