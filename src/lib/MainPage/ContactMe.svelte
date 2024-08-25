<script lang="ts">
    import UpButton from "../components/upButton.svelte";
</script>

<h1 class="flex text-white font-semibold text-5xl mt-24 max-sm:text-4xl max-sm:mt-0 pt-4" id="ContactMe">
    Contact Me

    <div class="pt-2 pl-4 hover:motion-safe:animate-pulse opacity-20 hidden lg:block">
        <UpButton url="#Top" />
    </div>
</h1>

<!-- Contact Form -->
<!-- <div class="space-y-3 w-1/2 mt-4 pb-6 max-sm:w-11/12 max-sm:pb-20">
    <form action="mailto:joshiujwal2003@gmail.com" method="post" enctype="text/plain">
        <label for="hs-leading-icon" class="block text-base font-medium mb-2 text-white">Email address</label>
        <div class="relative">
            <input type="text" id="hs-leading-icon" name="hs-leading-icon" class="py-3 px-4 ps-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="you@site.com" />
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <svg class="flex-shrink-0 size-4 text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
            </div>
        </div>

        <div class="mt-4">
            <label for="textarea-label" class="block text-base font-medium mb-2 text-white">Comment</label>
            <textarea id="textarea-label" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm
            disabled:opacity-50 disabled:pointer-events-none text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600" rows="5" placeholder="Message"></textarea>
        </div>

        <input type="submit" value="Submit" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-4 cursor-pointer" />
    </form>
</div> -->

<!-- Contact Card -->
<div class="space-y-3 w-1/2 mt-4 pb-6 max-sm:w-11/12 max-sm:pb-20">
    <div class="bg-white border rounded-xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
          <img class="size-full absolute top-0 start-0 object-cover" src="/images/mail_image_blue.png" alt="Email App Icon">
        </div>
        <div class="flex flex-wrap">
          <div class="p-4 flex flex-col h-full sm:p-7">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
              Card title
            </h3>
            <p class="mt-1 text-gray-500 dark:text-neutral-400">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div class="mt-5 sm:mt-auto">
              <p class="text-xs text-gray-500 dark:text-neutral-500">
                Last updated 5 mins ago
              </p>
            </div>
          </div>
        </div>
    </div>
</div>