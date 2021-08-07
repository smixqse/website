<script>
  import Button from "./Button.svelte";
  export let buttons;

  function onClick(button) {
    alert("click");
    location.href = button.url;
  }
</script>

<main class="relative w-full h-full">
  <div class="flex justify-center items-center w-full h-full z-10">
    <div class="h-auto flex flex-col sm:flex-row gap-9">
      {#each buttons as button}
        <Button
          url={button.url}
          icon={button.icon}
          ficon={button.ficon}
          onClick={() => onClick(button)}
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
