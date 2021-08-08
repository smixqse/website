<script>
  import Button from "./Button.svelte";
  export let buttons;
  let animating = -1;
  let rect = { x: 0, y: 0 }; //

  function onClick(button, index, element) {
    animating = index;
    setTimeout(() => {
      location.href = button.url;
    }, 2000);
    let initialRect = element.getBoundingClientRect();
    initialRect.icon = button.icon;
    rect = initialRect;
  }
</script>

<main class="relative w-full h-full">
  <div
    class="flex justify-center items-center w-full h-full z-10 overflow-hidden"
  >
    <div class="relative h-auto flex flex-col sm:flex-row gap-9">
      {#each buttons as button, i}
        <Button
          url={button.url}
          icon={button.icon}
          onClick={(element) => onClick(button, i, element)}
          {animating}
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
  {#if rect.x !== 0}
    <span class="fixed" style={`left: ${rect.x}px; top: ${rect.y}px;`}>
      <Button
        url={""}
        icon={rect.icon}
        onClick={() => {}}
        animating={-1}
        index={0}
      />
    </span>
  {/if}
</main>
