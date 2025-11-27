<script lang="ts">
    import UpButton from "../components/upButton.svelte";
    import DescriptionContainerGrid from "$lib/components/DescriptionCard/DescriptionContainerGrid.svelte";
    import DescriptionCardTitle from "$lib/components/DescriptionCard/DescriptionCardTitle.svelte";
    import DescriptionCardContent from "$lib/components/DescriptionCard/DescriptionCardContent.svelte";
    import DescriptionContent from "$lib/components/DescriptionContent/descriptionContent.svelte";
</script>

<h1 class="flex text-white font-semibold text-5xl mt-24 max-sm:text-4xl max-sm:mt-0 pt-4" id="ExprSection">
    Experience

    <div class="pt-2 pl-4 hover:motion-safe:animate-pulse opacity-35 hidden lg:block">
        <UpButton url="#Top" />
    </div>
</h1>

<!-- <div class="grid grid-cols-4 gap-y-4">
    <div class="text-white">Test 1</div>
    <div class="col-span-3 text-white">Content 1</div>
</div> -->

<DescriptionContainerGrid>
    <DescriptionCardTitle 
        company={'Paycom'}
        duration={'Dec. 2024 - Present'}
    />

    <DescriptionCardContent jobTitle={'Software Developer'}>
        {#snippet jobDescription()}
            I am currently working as a Software Developer for Paycom's Expense Management module.
        {/snippet}
    </DescriptionCardContent>

    <DescriptionCardTitle 
        company={'Boeing'}
        duration={'Jun. 2024 - Aug. 2024'}
    />

    <DescriptionCardContent jobTitle={'Digital Aviation Solutions - Development Intern'}>
        {#snippet jobDescription()}
            Collaborated with a 10-member team of Software and DevOps engineers to enhance navigation data analysis and flight message validation processes. Automated data analysis with shell scripts and improved data readability and accuracy using Python. Integrated validation tools into a CI/CD pipeline with Docker, streamlining deployment workflows and providing clear, user-friendly test result displays.
        {/snippet}
    </DescriptionCardContent>

    <DescriptionCardTitle 
        company={'CougarCS'} 
        duration={'Aug. 2023 - Aug. 2024'} 
    />

    <DescriptionCardContent jobTitle={'Computer Science Tutor'}>
        {#snippet jobDescription()}
            Guided over 11 students weekly on coding assignments, projects, and lab exercises, while also conducting one-on-one and group tutoring sessions in Computer Science courses such as Data Structures. Collaborated with a team of 30 tutors to create customized lesson plans, resulting in a 12% average increase in student exam scores.
        {/snippet}
    </DescriptionCardContent>
</DescriptionContainerGrid>