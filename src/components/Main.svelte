<script>
  import Button from "./Button.svelte";
  export let buttons;
  let animating = -1;

  function onClick(button, index) {
    animating = index;
    setTimeout(() => {
      location.href = button.url;
    }, 2000);
  }
</script>

<main class="relative w-full h-full">
  <div
    class="flex justify-center items-center w-full h-full z-10 overflow-hidden"
  >
    <div class="h-auto flex flex-col sm:flex-row gap-9">
      {#each buttons as button, i}
        <Button
          url={button.url}
          icon={button.icon}
          onClick={() => onClick(button, i)}
          animating={animating}
          index={i}
        />
      {/each}
    </div>
    <!--<div class="fixed z-0">
      <div class="w-full h-full text-white opacity-50 font-sans leading-5">
        {#each Array(5) as _, i}
          <p class="text-8xl leading-tight">smixqse</p>
        {/each}
      </div>
    </div>-->
  </div>
</main>
